import React, { useState } from "react";
import ReactDOM from "react-dom";
import ChatBotPopUp from "./ChatBotPopUp";  // Correct path if it's in the same folder 

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);  // Controls chat visibility

  const openChat = () => {
    setIsChatOpen(true);  // Opens the chat popup
  };

  const closeChat = () => {
    setIsChatOpen(false);  // Closes the chat popup
  };

  return (
    <div className="app">
      {/* This button triggers the chatbot popup */}
      <button onClick={openChat} className="open-chat-button">
        Chat with Us
      </button>

      {/* Render the ChatBotPopUp component when chat is open */}
      {isChatOpen && <ChatBotPopUp onClose={closeChat} />}
    </div>
  );
};

// Render the Index component to the root element
ReactDOM.render(<Index />, document.getElementById("root"));
