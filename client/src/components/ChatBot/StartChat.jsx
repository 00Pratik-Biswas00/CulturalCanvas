import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { IoMic, IoMicOff } from "react-icons/io5";

const StartChat = ({ selectedLanguage, onClose }) => {
  const [question, setQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  // Start speech recognition
  // const startListening = () => {
  //   if (!("webkitSpeechRecognition" in window)) {
  //     alert("Your browser does not support speech recognition.");
  //     return;
  //   }

  //   const recognitionInstance = new webkitSpeechRecognition();
  //   recognitionInstance.continuous = false;
  //   recognitionInstance.interimResults = false;
  //   recognitionInstance.lang = "en-US";

  //   recognitionInstance.onstart = () => setIsListening(true);
  //   recognitionInstance.onend = () => setIsListening(false);

  //   recognitionInstance.onresult = (event) => {
  //     const transcript = event.results[0][0].transcript;
  //     setQuestion(transcript); // Set the recognized text as the question
  //   };

  //   recognitionInstance.onerror = (event) => {
  //     console.error("Speech recognition error:", event.error);
  //     setIsListening(false);
  //   };

  //   recognitionInstance.start();
  //   setRecognition(recognitionInstance);
  // };

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognitionInstance = new webkitSpeechRecognition();
    recognitionInstance.continuous = false;
    recognitionInstance.interimResults = false;

    // Set language dynamically based on the selected language
    const languageMap = {
      Bengali: "bn-IN",
      Hindi: "hi-IN",
      English: "en-US",
      Tamil: "ta-IN",
      Assamese: "as-IN",
      Bodo: "brx-IN",
      Dogri: "doi-IN",
      Gujarati: "gu-IN",
      Kashmiri: "ks-IN",
      Kannada: "kn-IN",
      Konkani: "kok-IN",
      Maithili: "mai-IN",
      Malayalam: "ml-IN",
      Manipuri: "mni-IN",
      Marathi: "mr-IN",
      Nepali: "ne-IN",
      Oriya: "or-IN",
      Punjabi: "pa-IN",
      Sanskrit: "sa-IN",
      Santali: "sat-IN",
      Sindhi: "sd-IN",
      Telugu: "te-IN",
      Urdu: "ur-IN",
    };

    recognitionInstance.lang = languageMap[selectedLanguage] || "en-US";

    recognitionInstance.onstart = () => setIsListening(true);
    recognitionInstance.onend = () => setIsListening(false);

    recognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript); // Set the recognized text as the question
    };

    recognitionInstance.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognitionInstance.start();
    setRecognition(recognitionInstance);
  };

  // Stop speech recognition
  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setRecognition(null);
    }
  };

  const generateAnswer = async (e) => {
    e.preventDefault();
    if (!question.trim()) return; // Prevent empty questions

    setGeneratingAnswer(true);

    // Add the user's question to the conversation
    const userMessage = {
      question,
      type: "user",
      timestamp: new Date(),
    };

    setConversation((prev) => [...prev, userMessage]);

    try {
      // Construct the payload based on the correct Gemini API structure
      const payload = {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `You are an expert in heritage and culture. Act as an expert in ${selectedLanguage} and answer all the questions in the ${selectedLanguage} language. Keep information precise, and if someone asks something irrelevant, respond that it's irrelevant. ${question}`,
              },
            ],
          },
        ],
      };

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY
        }`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Extract the response from the API. Adjust based on actual response structure.
      const newAnswer =
        response?.data?.candidates[0]?.content?.parts[0]?.text ||
        "No response received.";

      // Add the AI's response to the conversation
      const aiMessage = {
        answer: newAnswer,
        type: "ai",
        timestamp: new Date(),
      };

      setConversation((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(
        "API Request failed:",
        error.response?.data || error.message
      );
      const errorMessage =
        error.response?.data?.error?.message ||
        "Sorry - Something went wrong. Please try again!";
      const errorMsg = {
        answer: errorMessage,
        type: "ai",
        timestamp: new Date(),
      };
      setConversation((prev) => [...prev, errorMsg]);
    } finally {
      setGeneratingAnswer(false);
      setQuestion(""); // Clear the input field after sending the message
    }
  };

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <div className="text-xs absolute top-12 px-2 bg-background1 text-primary_text rounded-md font-semibold">
        Chatting in: {selectedLanguage}
      </div>

      {/* Conversation Section */}
      <div className="w-full bg-transparent py-2 rounded-lg overflow-auto max-h-[420px]">
        {conversation.length > 0 ? (
          <ul className="space-y-4">
            {conversation.map((item, index) => (
              <li
                key={index}
                className={`flex ${
                  item.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    item.type === "user"
                      ? "bg-[#2a3d4c] text-dark_primary_text"
                      : "bg-dark_primary_text text-[#2a3d4c]"
                  } p-3 rounded-lg shadow-md max-w-xs`}
                >
                  <ReactMarkdown>
                    {item.type === "user" ? item.question : item.answer}
                  </ReactMarkdown>
                  <p
                    className={`${
                      item.type === "user"
                        ? " text-[#c1d2df]"
                        : "text-[#113551]"
                    } text-xs text-right mt-1`}
                  >
                    {new Date(item.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-3xl text-dark_primary_text font-bold tracking-wider">
            Start the chat by asking a question! 🙏
          </p>
        )}
      </div>

      {/* Input Section */}
      <div className="w-full flex gap-2 mt-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder={
              isListening ? "Listening..." : "Type your question here..."
            }
            className="w-full py-2 px-3 bg-shadow rounded-xl text-dark_primary_text placeholder:text-dark_primary_text focus:outline-none focus:bg-shadow focus:border-shadow"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>

        <button
          onClick={isListening ? stopListening : startListening}
          className={`px-2 rounded-full ${
            isListening
              ? "bg-red-500"
              : "bg-[#2a3d4c] hover:bg-[#1b2934] text-dark_primary_text"
          }`}
        >
          {isListening ? (
            <IoMicOff className=" w-5 h-5" />
          ) : (
            <IoMic className=" w-5 h-5" />
          )}
        </button>

        <button
          onClick={generateAnswer}
          className={`text-dark_primary_text px-3 cursor-pointer bg-[#2a3d4c] hover:bg-[#1b2934] rounded-xl ${
            generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={generatingAnswer}
        >
          {generatingAnswer ? "Sending..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default StartChat;
