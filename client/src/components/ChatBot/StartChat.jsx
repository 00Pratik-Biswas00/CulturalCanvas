import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const StartChat = ({ selectedLanguage, onClose }) => {
  const [question, setQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [conversation, setConversation] = useState([]);

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
      // Construct the payload based on Gemini API's expected structure
      const payload = {
        input: {
          messages: [
            {
              role: "system",
              content: `You are an expert in heritage and culture. Respond to all questions in ${selectedLanguage}. Keep the responses precise. If something is irrelevant, respond that it's irrelevant.`,
            },
            {
              role: "user",
              content: question,
            },
          ],
        },
        parameters: {
          maxTokens: 100, // Adjust field name if different in Gemini API
        },
      };

      console.log("Request Payload:", payload); // Debugging the payload

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

      // Adjust based on the actual response structure from Gemini API
      const newAnswer =
        response?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
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
      <div className="text-lg font-semibold">
        Chatting in: {selectedLanguage}
      </div>

      {/* Conversation Section */}
      <div className="w-full bg-gray-100 p-3 rounded-lg overflow-auto max-h-60">
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
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black"
                  } p-3 rounded-lg shadow-md max-w-xs`}
                >
                  <ReactMarkdown>
                    {item.type === "user" ? item.question : item.answer}
                  </ReactMarkdown>
                  <p className="text-xs text-right text-gray-500 mt-1">
                    {new Date(item.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">
            Start the chat by asking a question!
          </p>
        )}
      </div>

      {/* Input Section */}
      <form onSubmit={generateAnswer} className="w-full flex gap-2 mt-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full py-2 px-3 bg-shadow rounded-xl text-dark_primary_text placeholder:text-dark_primary_text focus:outline-none focus:bg-shadow focus:border-shadow"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className={`text-dark_primary_text px-3 cursor-pointer bg-[#2a3d4c] hover:bg-[#1b2934] rounded-xl ${
            generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={generatingAnswer}
        >
          {generatingAnswer ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default StartChat;
