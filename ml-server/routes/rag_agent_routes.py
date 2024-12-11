from flask import Blueprint, request, jsonify
from ml.rag_manual_summary.rag_manual_summary import process_pdf, ask_question

rag_agent_bp = Blueprint('rag_agent', __name__)

@rag_agent_bp.route('/upload-pdfs-rag', methods=['POST'])
def upload_pdfs():
    pdf_files = request.files.getlist('pdfs')
    response = process_pdf(pdf_files)
    return jsonify({"message": response})

@rag_agent_bp.route('/ask-questions-rag', methods=['POST'])
def handle_question():
    data = request.get_json()
    question = data.get('question')
    answer = ask_question(question)
    return jsonify({"answer": answer})
