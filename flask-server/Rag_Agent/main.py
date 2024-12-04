from flask import Flask, render_template, request, jsonify
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
import os
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain.vectorstores import FAISS
from langchain.chains import ConversationalRetrievalChain
from langchain.prompts.chat import ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate
from dotenv import load_dotenv
import google.generativeai as genai
import asyncio

# Load environment variables
load_dotenv()

# Configure Google Generative AI
os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Initialize Flask app
app = Flask(__name__)

# Helper function to extract text from PDFs
def get_pdf_text(pdf_docs):
    text = ""
    for pdf in pdf_docs:
        pdf_reader = PdfReader(pdf)
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text


# Helper function to split text into chunks
def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
    chunks = text_splitter.split_text(text)
    return chunks


# Helper function to create a FAISS vector store
def get_vector_store(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")


# Define the conversational retrieval chain
def get_conversational_chain(retriever):
    system_prompt = (
        "You are an assistant for question-answering tasks. "
        "Use the following pieces of retrieved context to answer "
        "the question. If you don't know the answer, say that you "
        "don't know. Use three sentences maximum and keep the "
        "answer concise."
        "\n\n"
        "{context}"
    )
    # Create prompt templates
    system_message = SystemMessagePromptTemplate.from_template(system_prompt)
    human_message = HumanMessagePromptTemplate.from_template("{input}")
    prompt = ChatPromptTemplate.from_messages([system_message, human_message])

    # Initialize the LLM
    model = ChatGoogleGenerativeAI(model="gemini-1.5-pro", temperature=0)

    # Return the retrieval chain with a valid retriever
    chain = ConversationalRetrievalChain.from_llm(
        llm=model, retriever=retriever, return_source_documents=True
    )
    return chain


# Process user query asynchronously
async def user_input(user_question):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    new_db = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)
    retriever = new_db.as_retriever(search_kwargs={"k": 10})

    # Now pass the retriever to the conversational chain
    chain = get_conversational_chain(retriever)

    # Initialize chat_history as an empty list or from any previous state
    chat_history = []

    # Execute chain
    response = chain({
        "question": user_question,
        "chat_history": chat_history  # Add the chat_history input key
    })

    if "answer" in response:
        return response["answer"]
    else:
        return "Sorry, no answer could be found in the provided context."


# Handle PDF processing
async def handle_pdf_processing(pdf_docs):
    raw_text = get_pdf_text(pdf_docs)
    text_chunks = get_text_chunks(raw_text)
    get_vector_store(text_chunks)
    return "PDFs processed successfully."


# Flask Routes
@app.route('/')
def index():
    return render_template('index.html')  # You can create an HTML page for uploading PDFs and asking questions


@app.route('/upload_pdfs', methods=['POST'])
def upload_pdfs():
    if 'pdfs' not in request.files:
        return jsonify({"error": "No files provided"}), 400

    pdf_files = request.files.getlist('pdfs')
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.run_until_complete(handle_pdf_processing(pdf_files))  # Process PDFs asynchronously

    return jsonify({"message": "PDFs processed successfully."}), 200


@app.route('/ask_question', methods=['POST'])
def ask_question():
    data = request.get_json()
    user_question = data.get('question')

    if not user_question:
        return jsonify({"error": "No question provided"}), 400

    # Run the async user input handling
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    answer = loop.run_until_complete(user_input(user_question))

    return jsonify({"answer": answer}), 200


if __name__ == '__main__':
    app.run(debug=True)
