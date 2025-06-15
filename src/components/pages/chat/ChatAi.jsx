import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToAI } from '../../../openAi/OpenAiConfig';

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const chatEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setChat((prev) => [...prev, userMessage]);
    setInput("");

    const reply = await sendMessageToAI(input);
    const aiMessage = { role: "assistant", content: reply };
    setChat((prev) => [...prev, aiMessage]);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "800px",
        height: "90vh",
        margin: "0 auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#343541",
          color: "#fff",
          padding: "16px",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        چت با هوش مصنوعی
      </div>

      {/* Chat area */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
          backgroundColor: "#f7f7f8",
        }}
      >
        {chat.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                maxWidth: "75%",
                padding: "12px 16px",
                borderRadius: "12px",
                backgroundColor:
                  msg.role === "user" ? "#007bff" : "#e4e6eb",
                color: msg.role === "user" ? "#fff" : "#000",
                whiteSpace: "pre-wrap",
                lineHeight: "1.6",
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input area */}
      <div
        style={{
          padding: "12px",
          borderTop: "1px solid #ccc",
          backgroundColor: "#fff",
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="پیام خود را بنویسید..."
          style={{
            flex: 1,
            padding: "12px 16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "0 24px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ارسال
        </button>
      </div>
    </div>
  );
}
