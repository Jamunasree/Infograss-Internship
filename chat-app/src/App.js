import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    { id: 0, text: "👋 Hi! Welcome to our support chat.", sender: "bot" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [idCounter, setIdCounter] = useState(1);

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    const userText = newMessage.trim().toLowerCase();

    const userMsg = {
      id: idCounter,
      text: newMessage,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMsg]);
    setIdCounter((prev) => prev + 1);
    setNewMessage("");

    setTimeout(() => {
      let botReply = "";

      // Simple keyword-based reply logic
      if (userText.includes("hi") || userText.includes("hello")) {
        botReply = "Hello! How can I assist you today?";
      } else if (userText.includes("how are you")) {
        botReply = "I'm just a bot, but I'm doing great! How about you?";
      } else if (userText.includes("help")) {
        botReply = "Sure, tell me what you need help with.";
      } else if (userText.includes("name")) {
        botReply = "I'm your friendly support bot!";
      } else if (userText.includes("bye")) {
        botReply = "Goodbye! Have a great day!";
      } else {
        botReply = "I'm not sure how to respond to that. Can you rephrase?";
      }

      const botMsg = {
        id: idCounter + 1,
        text: botReply,
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMsg]);
      setIdCounter((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div className="app">
      <div className="chat-box">
        <h2>💬 React Chat with Bot</h2>
        <div className="messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
