import streamlit as st
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
import os
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_google_genai import ChatGoogleGenerativeAI
import google.generativeai as genai
from langchain.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts.chat import ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate

from dotenv import load_dotenv
import asyncio

load_dotenv()
os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# ThreadPoolExecutor
# executor = ThreadPoolExecutor(max_workers=1)

def get_pdf_text(pdf_docs):
    text = ""
    for pdf in pdf_docs:
        pdf_reader = PdfReader(pdf)
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text

def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    chunks = text_splitter.split_text(text)
    return chunks

def get_vector_store(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")

def get_conversational_chain():
    prompt_template = (
        "You are an assistant for question-answering tasks. "
        "Use the following pieces of retrieved context to answer "
        "the question. If you don't know the answer, say that you "
        "don't know. Use three sentences maximum and keep the "
        "answer concise."
        "\n\n"
        "{context}"
    )

    # Create system and human message templates
    system_message = SystemMessagePromptTemplate.from_template(prompt_template)
    human_message = HumanMessagePromptTemplate.from_template("{input}")

    # Construct the ChatPromptTemplate
    prompt = ChatPromptTemplate.from_messages([system_message, human_message])

    # Initialize the conversational chain
    model = ChatGoogleGenerativeAI(model="gemini-1.5-pro", temperature=0)
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)
    
    return chain

async def user_input(user_question):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    new_db = FAISS.load_local("faiss_index", embeddings)
    docs = new_db.similarity_search(user_question)

    chain = get_conversational_chain()
    
    # Simplified usage without "messages"
    response = chain(
        {"input_documents": docs, "question": user_question}, return_only_outputs=True
    )

    if "output_text" in response:
        st.write("Reply: ", response["output_text"])
    else:
        st.write("Sorry, no answer could be found in the provided context.")




async def handle_pdf_processing(pdf_docs):
    raw_text = get_pdf_text(pdf_docs)
    text_chunks = get_text_chunks(raw_text)
    get_vector_store(text_chunks)
    st.success("Done")

def main():
    st.set_page_config("Multi PDF Chatbot", page_icon=":scroll:")
    st.header("Multi-PDF's 📚 - Chat Agent 🤖 ")

    user_question = st.text_input("Ask a Question from the PDF Files uploaded .. ✍️📝")

    if user_question:
        asyncio.run(user_input(user_question))  # Ensure the async function runs properly

    with st.sidebar:
        st.image("img/Robot.jpg")
        st.write("---")
        st.title("📁 PDF File's Section")
        pdf_docs = st.file_uploader("Upload your PDF Files & \n Click on the Submit & Process Button ", accept_multiple_files=True)
        if st.button("Submit & Process"):
            with st.spinner("Processing..."):
                asyncio.run(handle_pdf_processing(pdf_docs))  # Async handling for PDF processing

        st.write("---")
        st.image("img/Robot.jpg")
        st.write("AI App created by @ Ayaan Ahmed")

    st.markdown(
        """
        <div style="position: fixed; bottom: 0; left: 0; width: 100%; background-color: #0E1117; padding: 15px; text-align: center;">
            © <a href="" target="_blank">Ayaan Ahmed</a> | Made with ❤️
        </div>
        """,
        unsafe_allow_html=True
    )

if __name__ == "__main__":
    main()
