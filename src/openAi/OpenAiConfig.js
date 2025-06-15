export const sendMessageToAI = async (message) => {
  const response = await fetch("https://ai.liara.ir/api/v1/684e1c4ea1f75b3278c092e5/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2ODRlMTk5NTJiNDhlNDYzMTY4Zjk5ZmMiLCJ0eXBlIjoiYXV0aCIsImlhdCI6MTc0OTk1MTc2MH0.oOz4aMOKYoKAm6BPNt91VXLJtUNti9UgbKlfDDOZIQs", // حتماً جایگزینش کن
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini",
      messages: [
        { role: "user", content: message }
      ],
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
};
