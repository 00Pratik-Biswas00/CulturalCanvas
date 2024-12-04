from flask import Flask, render_template, request, jsonify
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain_core.prompts import ChatPromptTemplate
from dotenv import load_dotenv
import os
import asyncio
import google.generativeai as genai

# Load environment variables
load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Flask app setup
app = Flask(__name__)

# Utility Functions
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

async def create_vector_store_async(chunks):
    """Asynchronous vector store creation."""
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store = FAISS.from_texts(chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")

def create_vector_store(chunks):
    """Wrapper for asynchronous vector store creation."""
    asyncio.run(create_vector_store_async(chunks))

async def load_vector_store_async():
    """Asynchronously load the FAISS vector store."""
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    return FAISS.load_local("faiss_index", embeddings)

def load_vector_store():
    """Wrapper for asynchronous vector store loading."""
    return asyncio.run(load_vector_store_async())

def create_conversational_chain():
    """Set up a conversational chain using Google Generative AI with ChatPromptTemplate."""
    system_prompt = (
        "You are an assistant for answering questions based on provided context. "
        "Use the context provided to answer as accurately as possible. If the answer "
        "is not found in the context, respond with: 'Answer not available in the context.'"
    )
    human_prompt = "Question: {question}\n"
    
    chat_prompt = ChatPromptTemplate.from_messages(
        [
            ("system", system_prompt),
            ("human", human_prompt)
        ]
    )
    
    model = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.3)
    return load_qa_chain(model, chain_type="stuff", prompt=chat_prompt)

async def ask_question_async(vector_store, question):
    """Answer a question using the conversational chain."""
    docs = vector_store.similarity_search(question)
    chain = create_conversational_chain()
    response = chain({"input_documents": docs, "question": question}, return_only_outputs=True)
    return response["output_text"]

def ask_question(vector_store, question):
    """Wrapper for asynchronous question answering."""
    return asyncio.run(ask_question_async(vector_store, question))

# Flask Routes
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/process-pdfs", methods=["POST"])
def process_pdfs():
    """Process uploaded PDF files and create a vector store."""
    try:
        pdf_files = request.files.getlist("pdf_files")
        text = extract_text_from_pdfs(pdf_files)
        chunks = split_text_into_chunks(text)
        create_vector_store(chunks)
        return jsonify({"message": "PDFs processed successfully!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/ask-question", methods=["POST"])
def handle_question():
    """Handle user questions based on the processed PDFs."""
    try:
        question = request.json.get("question")
        vector_store = load_vector_store()
        answer = ask_question(vector_store, question)
        return jsonify({"answer": answer})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run Flask App
if __name__ == "__main__":
    app.run(debug=True)
