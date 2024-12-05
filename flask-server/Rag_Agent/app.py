###Streamlit Driver code

import streamlit as st
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
import os
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain.vectorstores import FAISS
from langchain.chains import ConversationalRetrievalChain
from langchain.prompts.chat import ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate
from dotenv import load_dotenv
import asyncio

# Load environment variables
load_dotenv()

# Configure Google Generative AI
os.getenv("GOOGLE_API_KEY")
import google.generativeai as genai
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))


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
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
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
        st.write("Reply: ", response["answer"])
    else:
        st.write("Sorry, no answer could be found in the provided context.")



# Handle PDF processing
async def handle_pdf_processing(pdf_docs):
    raw_text = get_pdf_text(pdf_docs)
    text_chunks = get_text_chunks(raw_text)
    get_vector_store(text_chunks)
    st.success("Done")


# Streamlit main function
def main():
    st.set_page_config("Multi PDF Chatbot", page_icon=":scroll:")
    st.header("Doc Chat Agent 🤖 ")

    user_question = st.text_input("Ask a Question from the PDF Files uploaded .. ✍️📝")

    if user_question:
        asyncio.run(user_input(user_question))  # Run async user input handling

    with st.sidebar:
        st.image("img/robo.jpeg")
        st.write("---")
        st.title("📁 PDF File's Section")
        pdf_docs = st.file_uploader(
            "Upload your PDF Files & \n Click on the Submit & Process Button",
            accept_multiple_files=True,
        )
        if st.button("Submit & Process"):
            with st.spinner("Processing..."):
                asyncio.run(handle_pdf_processing(pdf_docs))  # Run async PDF processing

        st.write("---")
        st.write("created by @ Ayaan Ahmed")



if __name__ == "__main__":
    main()
