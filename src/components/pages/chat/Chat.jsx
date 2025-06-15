// // import React, { useState, useEffect, useRef } from "react";
// // import { db } from "../../../firebase/firebaseConfig";
// // import { ref, push, onValue } from "firebase/database";

// // export default function UserChat() {
// //   const [userMessages, setUserMessages] = useState([]);
// //   const [adminMessages, setAdminMessages] = useState([]);
// //   const [text, setText] = useState("");
// //   const messagesEndRef = useRef(null);

// //   useEffect(() => {
// //     const userRef = ref(db, "userMessages");
// //     const unsubscribeUser = onValue(userRef, (snapshot) => {
// //       let msgs = [];
// //       snapshot.forEach((child) => {
// //         msgs.push({ id: child.key, ...child.val() });
// //       });
// //       msgs.sort((a, b) => a.createdAt - b.createdAt);
// //       setUserMessages(msgs);
// //     });

// //     return () => unsubscribeUser();
// //   }, []);

// //   useEffect(() => {
// //     const adminRef = ref(db, "adminMessages");
// //     const unsubscribeAdmin = onValue(adminRef, (snapshot) => {
// //       let msgs = [];
// //       snapshot.forEach((child) => {
// //         msgs.push({ id: child.key, ...child.val() });
// //       });
// //       msgs.sort((a, b) => a.createdAt - b.createdAt);
// //       setAdminMessages(msgs);
// //     });

// //     return () => unsubscribeAdmin();
// //   }, []);

// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [userMessages, adminMessages]);

// //   const sendMessage = () => {
// //     if (!text.trim()) return;
// //     const userRef = ref(db, "userMessages");
// //     push(userRef, {
// //       sender: "user",
// //       text,
// //       createdAt: Date.now()
// //     });
// //     setText("");
// //   };

// //   return (
// //     <div style={{ maxWidth: 600, margin: "0 auto" }}>
// //       <h2>چت کاربر</h2>
// //       <div style={{ height: 300, overflowY: "auto", border: "1px solid #ccc", padding: 10, backgroundColor: "#f9f9f9" }}>
// //         {userMessages.map(m => (
// //           <div key={m.id} style={{ margin: "4px 0" }}>
// //             <strong>کاربر:</strong> {m.text}
// //           </div>
// //         ))}
// //         {adminMessages.map(m => (
// //           <div key={m.id} style={{ margin: "4px 0", color: "blue" }}>
// //             <strong>ادمین:</strong> {m.text}
// //           </div>
// //         ))}
// //         <div ref={messagesEndRef} />
// //       </div>
// //       <div style={{ marginTop: 10 }}>
// //         <input
// //           placeholder="پیامتو بنویس..."
// //           value={text}
// //           onChange={e => setText(e.target.value)}
// //           style={{ width: "80%", padding: 8 }}
// //         />
// //         <button onClick={sendMessage} style={{ width: "18%", marginLeft: "2%", padding: 8 }}>ارسال</button>
// //       </div>
// //     </div>
// //   );
// // }




// import React, { useState, useEffect, useRef } from "react";
// import { db } from "../../../firebase/firebaseConfig";
// import { ref, push, onValue } from "firebase/database";

// export default function UserChat() {
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     const messagesRef = ref(db, "messages");
//     const unsubscribe = onValue(messagesRef, (snapshot) => {
//       let msgs = [];
//       snapshot.forEach((child) => {
//         msgs.push({ id: child.key, ...child.val() });
//       });
//       msgs.sort((a, b) => a.createdAt - b.createdAt);
//       setMessages(msgs);
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = () => {
//     if (!text.trim()) return;
//     const messagesRef = ref(db, "messages");
//     push(messagesRef, {
//       sender: "user",
//       text,
//       createdAt: Date.now()
//     });
//     setText("");
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "0 auto" }}>
//       <h2>چت کاربر</h2>
//       <div style={{ height: 300, overflowY: "auto", border: "1px solid #ccc", padding: 10, backgroundColor: "#f9f9f9" }}>
//         {messages.map(m => (
//           <div key={m.id} style={{ margin: "4px 0", color: m.sender === "admin" ? "blue" : "black" }}>
//             <strong>{m.sender === "admin" ? "ادمین" : "کاربر"}:</strong> {m.text}
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>
//       <div style={{ marginTop: 10 }}>
//         <input
//           placeholder="پیامتو بنویس..."
//           value={text}
//           onChange={e => setText(e.target.value)}
//           style={{ width: "80%", padding: 8 }}
//         />
//         <button onClick={sendMessage} style={{ width: "18%", marginLeft: "2%", padding: 8 }}>ارسال</button>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import { db } from "../../../firebase/firebaseConfig";
import { ref, push, onValue } from "firebase/database";

const ChatIcon = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "fixed",
      bottom: 90,
      right: 40,
      width: 60,
      height: 60,
      borderRadius: "50%",
      backgroundColor: "#0084ff",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 30,
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      zIndex: 1000,
    }}
  >
    💬
  </div>
);

export default function UserChatWidget() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const messagesRef = ref(db, "messages");
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      let msgs = [];
      snapshot.forEach((child) => {
        msgs.push({ id: child.key, ...child.val() });
      });
      msgs.sort((a, b) => a.createdAt - b.createdAt);
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = () => {
    if (!text.trim()) return;
    const messagesRef = ref(db, "messages");
    push(messagesRef, {
      sender: "user",
      text,
      createdAt: Date.now(),
    });
    setText("");
  };

  return (
    <>
      <ChatIcon onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 350,
            height: 450,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: 10,
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              backgroundColor: "#0084ff",
              color: "#fff",
              padding: "10px 15px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            چت با پشتیبانی
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 10,
              backgroundColor: "#e5ddd5",
            }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  display: "flex",
                  justifyContent:
                    m.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    maxWidth: "75%",
                    padding: "8px 12px",
                    borderRadius: "16px",
                    backgroundColor:
                      m.sender === "user" ? "#0084ff" : "#f1f0f0",
                    color: m.sender === "user" ? "#fff" : "#000",
                    textAlign: "left",
                    direction: "rtl",
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div
            style={{
              padding: 10,
              borderTop: "1px solid #ddd",
              display: "flex",
              gap: 8,
            }}
          >
            <input
              placeholder="پیامتو بنویس..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 20,
                border: "1px solid #ccc",
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "0 20px",
                borderRadius: 20,
                backgroundColor: "#0084ff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              ارسال
            </button>
          </div>
        </div>
      )}
    </>
  );
}
