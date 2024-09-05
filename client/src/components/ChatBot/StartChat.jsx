import React, { useState } from "react";
import { askExpert } from "../../services/geminiApi";
 // Import the askExpert function

const StartChat = ({ selectedLanguage }) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]); // To display conversation

  const handleMessageSubmit = async () => {
    if (!message.trim()) {
      alert("Please enter a message.");
      return;
    }

    // Add user message to the chat history
    const newHistory = [...chatHistory, { role: "user", text: message }];
    setChatHistory(newHistory);

    // Call the Gemini API for the response
    const response = await askExpert(message, selectedLanguage);

    // Add the model response to the chat history
    setChatHistory([...newHistory, { role: "model", text: response }]);

    // Clear the message input after submission
    setMessage("");
  };

  return (
    <div className="w-full">
      <div className="chat-window">
        {chatHistory.map((item, index) => (
          <div key={index} className={`${item.role === "user" ? "user-msg" : "model-msg"}`}>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end w-full gap-2">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full py-2 px-3 bg-shadow rounded-xl text-dark_primary_text placeholder:text-dark_primary_text focus:outline-none focus:bg-shadow focus:border-shadow"
          />
        </div>
        <button
          onClick={handleMessageSubmit}
          className="text-dark_primary_text px-3 cursor-pointer bg-[#2a3d4c] hover:bg-[#1b2934] rounded-xl"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StartChat;
