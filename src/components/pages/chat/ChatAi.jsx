// ChatWithAI.jsx
import React, { useState } from 'react';
import {sendMessageToAI} from '../../../openAi/OpenAiConfig';

// const ChatWithAI = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const newMessages = [...messages, { role: 'user', content: input }];
//     setMessages(newMessages);
//     setInput('');
//     setLoading(true);

//     try {
//       const res = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo',
//         messages: newMessages,
//       });

//       const reply = res.choices[0].message;
//       setMessages([...newMessages, reply]);
//     } catch (err) {
//       console.error('خطا در دریافت پاسخ:', err);
//       setMessages([...newMessages, { role: 'assistant', content: 'خطا در پاسخ از سرور.' }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 rounded-2xl border border-gray-300 bg-gray-50 shadow-md">
//       <h2 className="text-2xl font-bold text-center mb-4">🤖 چت با هوش مصنوعی</h2>

//       <div className="h-96 overflow-y-auto flex flex-col gap-3 p-2 border-b border-gray-300 mb-4">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`p-3 rounded-xl text-sm whitespace-pre-wrap max-w-[80%] ${
//               msg.role === 'user'
//                 ? 'bg-green-100 self-end text-right'
//                 : 'bg-gray-200 self-start text-left'
//             }`}
//           >
//             {msg.content}
//           </div>
//         ))}
//         {loading && (
//           <div className="text-gray-500 italic text-sm">در حال نوشتن...</div>
//         )}
//       </div>

//       <div className="flex gap-2">
//         <input
//           type="text"
//           className="flex-1 p-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
//           placeholder="پیامتو بنویس..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//         />
//         <button
//           onClick={sendMessage}
//           className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition-all"
//         >
//           ارسال
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatWithAI;

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const reply = await sendMessageToAI(input);
    setChat([...chat, { role: "user", content: input }, { role: "assistant", content: reply }]);
    setInput("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>چت با هوش مصنوعی</h2>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "auto", marginBottom: "10px" }}>
        {chat.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.role === "user" ? "right" : "left", margin: "10px 0" }}>
            <strong>{msg.role === "user" ? "شما" : "هوش مصنوعی"}:</strong> {msg.content}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          style={{ flex: 1, padding: "10px", fontSize: "16px" }}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="پیام خود را وارد کنید..."
        />
        <button
          onClick={handleSend}
          style={{ padding: "10px 20px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}
        >
          ارسال
        </button>
      </div>
    </div>
  );
}