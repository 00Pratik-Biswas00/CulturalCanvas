import React, { useState } from "react";
import axios from "axios";
import bgImg from "../../assets/explorePlaces/bgImg.png";
import MyButton4 from "../../components/Buttons/MyButton4";
import InputImageVideo from "../../components/Input/InputImageVideo";
import { IoCloudUploadOutline } from "react-icons/io5";
import InputComponent from "../../components/Input/InputComponent";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

const RAGSummary = () => {
  const [question, setQuestion] = useState("");
  const [fileUploadStatus, setFileUploadStatus] = useState(false);
  const [summary, setSummary] = useState(null);
  const [response, setResponse] = useState(null);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleFileUpload = async (event) => {
    const formData = new FormData();
    formData.append("pdfs", event.target.files[0]);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/upload-pdfs-rag",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.message === "success") {
        setFileUploadStatus(true);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error processing file!");
    }
  };

  const handleQuestionSubmit = async (summaryRequired) => {
    if (!fileUploadStatus) {
      toast.error("Please upload a proper file!");
      return;
    }

    if (!summaryRequired && !question) {
      toast.error("Please enter a valid question");
      return;
    }

    try {
      if (summaryRequired) {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/ask-questions-rag",
          {
            question: "Give me a summary of it.",
          }
        );
        setSummary(response.data);
      } else {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/ask-questions-rag",
          {
            question,
          }
        );
        setResponse(response.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching response!");
    }
  };

  return (
    <section
      style={{ backgroundImage: `url(${bgImg}) ` }}
      className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 flex flex-col items-center bg-contain bg-no-repeat bg-center">
      <div className="flex items-start justify-center gap-10 p-8 my-8 rounded-xl shadow-custom-black dark:shadow-custom-white blogCards">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-extrabold text-center">
            Upload Your Manual and Ask Your Doubts
          </h1>
          <p className="text-center text-lg font-playfair">
            Stuck on a manual? Let's clear it up! Upload your manual, ask your
            questions, and get expert answers. It's that simple.
          </p>
          <InputImageVideo
            imageName={"Upload your pdf here:"}
            required
            fileType="pdf"
            onChange={handleFileUpload}
          />
          <div className="flex flex-col items-start">
            <MyButton4
              classDesign={
                "bg-highlight_dark before:bg-highlight  text-dark_primary_text "
              }
              buttonName={"Generate a Short Summary"}
              bType="submit"
              onClick={() => handleQuestionSubmit(true)}
            />
          </div>
          {summary && (
            <div className="mt-8 p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
              <h2 className="font-bold text-xl">Summary of the Manual:</h2>
              <ReactMarkdown>{summary.answer}</ReactMarkdown>
            </div>
          )}
          <div className="flex flex-col gap-3">
            <label className="font-bold text-xl ">Q & A Section: </label>
            <InputComponent
              iType={"text"}
              iName={"Ask your doubt here"}
              required={true}
              value={question}
              onChange={handleQuestionChange}
            />
          </div>
          <div className=" flex flex-col items-start justify-atitems-start">
            <MyButton4
              classDesign={
                "bg-highlight_dark before:bg-highlight  text-dark_primary_text "
              }
              buttonName={"SUBMIT"}
              bType="submit"
              onClick={() => handleQuestionSubmit()}
            />
          </div>
          z
          {response && (
            <div className="mt-8 p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
              <h2 className="font-bold text-xl">Response from RAG Agent:</h2>
              <ReactMarkdown>{response.answer}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RAGSummary;
