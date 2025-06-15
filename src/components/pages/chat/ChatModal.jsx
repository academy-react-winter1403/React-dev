import React, { useState } from 'react';
import ChatBot from './ChatAi';

export default function ChatModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* دکمه چت پایین صفحه */}
      <button
        onClick={handleToggle}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#0b93f6",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        💬
      </button>

      {/* مودال */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
          onClick={handleToggle}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "90vh",
              backgroundColor: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            }}
          >
            {/* نوار بالا */}
            <div
              style={{
                backgroundColor: "#202123",
                color: "#fff",
                padding: "12px",
                textAlign: "right",
              }}
            >
              <button
                onClick={handleToggle}
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ✖
              </button>
            </div>

            {/* کامپوننت چت */}
            <ChatBot />
          </div>
        </div>
      )}
    </>
  );
}
