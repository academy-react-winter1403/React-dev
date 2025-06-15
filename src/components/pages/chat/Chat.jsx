// import React, { useState, useEffect, useRef } from "react";
// import { db } from "../../../firebase/firebaseConfig";
// import { ref, push, onValue } from "firebase/database";

// export default function UserChat() {
//   const [userMessages, setUserMessages] = useState([]);
//   const [adminMessages, setAdminMessages] = useState([]);
//   const [text, setText] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     const userRef = ref(db, "userMessages");
//     const unsubscribeUser = onValue(userRef, (snapshot) => {
//       let msgs = [];
//       snapshot.forEach((child) => {
//         msgs.push({ id: child.key, ...child.val() });
//       });
//       msgs.sort((a, b) => a.createdAt - b.createdAt);
//       setUserMessages(msgs);
//     });

//     return () => unsubscribeUser();
//   }, []);

//   useEffect(() => {
//     const adminRef = ref(db, "adminMessages");
//     const unsubscribeAdmin = onValue(adminRef, (snapshot) => {
//       let msgs = [];
//       snapshot.forEach((child) => {
//         msgs.push({ id: child.key, ...child.val() });
//       });
//       msgs.sort((a, b) => a.createdAt - b.createdAt);
//       setAdminMessages(msgs);
//     });

//     return () => unsubscribeAdmin();
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [userMessages, adminMessages]);

//   const sendMessage = () => {
//     if (!text.trim()) return;
//     const userRef = ref(db, "userMessages");
//     push(userRef, {
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
//         {userMessages.map(m => (
//           <div key={m.id} style={{ margin: "4px 0" }}>
//             <strong>کاربر:</strong> {m.text}
//           </div>
//         ))}
//         {adminMessages.map(m => (
//           <div key={m.id} style={{ margin: "4px 0", color: "blue" }}>
//             <strong>ادمین:</strong> {m.text}
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

export default function UserChat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
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
  }, [messages]);

  const sendMessage = () => {
    if (!text.trim()) return;
    const messagesRef = ref(db, "messages");
    push(messagesRef, {
      sender: "user",
      text,
      createdAt: Date.now()
    });
    setText("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2>چت کاربر</h2>
      <div style={{ height: 300, overflowY: "auto", border: "1px solid #ccc", padding: 10, backgroundColor: "#f9f9f9" }}>
        {messages.map(m => (
          <div key={m.id} style={{ margin: "4px 0", color: m.sender === "admin" ? "blue" : "black" }}>
            <strong>{m.sender === "admin" ? "ادمین" : "کاربر"}:</strong> {m.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ marginTop: 10 }}>
        <input
          placeholder="پیامتو بنویس..."
          value={text}
          onChange={e => setText(e.target.value)}
          style={{ width: "80%", padding: 8 }}
        />
        <button onClick={sendMessage} style={{ width: "18%", marginLeft: "2%", padding: 8 }}>ارسال</button>
      </div>
    </div>
  );
}
