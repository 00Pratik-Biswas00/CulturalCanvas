from flask import Flask, render_template, request, jsonify
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import ChatPromptTemplate
from dotenv import load_dotenv
import os
import uuid
import google.generativeai as genai

# Load environment variables
load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Flask app
app = Flask(__name__)

# Utility functions
def extract_text_from_pdfs(pdf_files):
    """Extract text from uploaded PDF files."""
    text = ""
    for pdf in pdf_files:
        pdf_reader = PdfReader(pdf)
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text

def split_text_into_chunks(text, chunk_size=1000, overlap=100):
    """Split text into manageable chunks."""
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=overlap)
    return text_splitter.split_text(text)


import asyncio

async def async_create_vector_store(chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store = FAISS.from_texts(chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")

def create_vector_store(chunks):
    """Wrapper for async_create_vector_store."""
    asyncio.run(async_create_vector_store(chunks))

# def create_vector_store(chunks):
#     """Create a FAISS vector store from text chunks."""
#     embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
#     vector_store = FAISS.from_texts(chunks, embedding=embeddings)
#     vector_store.save_local("faiss_index")
#     return vector_store

# def load_vector_store():
#     """Load an existing FAISS vector store."""
#     embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
#     return FAISS.load_local("faiss_index", embeddings)

async def async_load_vector_store():
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    return FAISS.load_local("faiss_index", embeddings)

def load_vector_store():
    """Wrapper for async_load_vector_store."""
    return asyncio.run(async_load_vector_store())

async def async_ask_question(vector_store, question):
    docs = vector_store.similarity_search(question)
    chain = create_conversational_chain()
    response = chain({"input_documents": docs, "question": question}, return_only_outputs=True)
    return response["output_text"]

def ask_question_sync(vector_store, question):
    """Wrapper for async_ask_question."""
    return asyncio.run(async_ask_question(vector_store, question))


def create_conversational_chain():
    """Set up the conversational chain using Google Generative AI."""
    prompt_template = """
    Answer the question as detailed as possible from the provided context. 
    If the answer is not in the provided context, say: "Answer not available in the context."
    
    Context:
    {context}
    
    Question: {question}
    
    Answer:
    """
    model = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.3)
    prompt = ChatPromptTemplate(template=prompt_template, input_variables=["context", "question"])
    return load_qa_chain(model, chain_type="stuff", prompt=prompt)

# Routes
@app.route("/")
def index():
    return render_template("index.html")

    
@app.route("/process-pdfs", methods=["POST"])
def process_pdfs():
    """Process uploaded PDF files and create vector store."""
    try:
        pdf_files = request.files.getlist("pdf_files")
        text = extract_text_from_pdfs(pdf_files)
        chunks = split_text_into_chunks(text)
        create_vector_store(chunks)  # Uses the synchronous wrapper
        return jsonify({"message": "PDFs processed successfully!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# @app.route("/ask-question", methods=["POST"])
# def ask_question():
#     """Answer a user's question based on processed PDFs."""
#     try:
#         question = request.json.get("question")
#         vector_store = load_vector_store()
#         docs = vector_store.similarity_search(question)
#         chain = create_conversational_chain()
#         response = chain({"input_documents": docs, "question": question}, return_only_outputs=True)
#         return jsonify({"answer": response["output_text"]})
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
    

@app.route("/ask-question", methods=["POST"])
def ask_question():
    """Answer a user's question based on processed PDFs."""
    try:
        question = request.json.get("question")
        vector_store = load_vector_store()  # Uses the synchronous wrapper
        answer = ask_question_sync(vector_store, question)  # Calls the sync wrapper
        return jsonify({"answer": answer})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
