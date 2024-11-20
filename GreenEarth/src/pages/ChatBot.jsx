// src/Chat.jsx

import React, { useState, useEffect } from "react";
import generateContent from "./GoogleGenerativeAi";

const ChatBot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Menambahkan pesan pembuka saat komponen pertama kali di-render
  useEffect(() => {
    const initialMessage = {
      sender: "ai",
      text: "Halo, saya bisa membantu Anda menjawab pertanyaan tentang cara menjaga lingkungan agar bumi menjadi lebih hijau 🌍. Silakan ajukan pertanyaan Anda!",
    };
    setChatHistory([initialMessage]);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Menambahkan pesan dari user ke chat history
    const newChatHistory = [
      ...chatHistory,
      { sender: "user", text: userInput },
    ];
    setChatHistory(newChatHistory);

    // Memeriksa apakah pertanyaan relevan dengan menjaga lingkungan
    const isRelevant =
      userInput.toLowerCase().includes("lingkungan") ||
      userInput.toLowerCase().includes("menjaga");

    if (isRelevant) {
      // Menggunakan prompt yang dibatasi untuk menjaga lingkungan
      const prompt = `Tolong berikan respons yang terperinci tentang cara menjaga lingkungan dan dampak jika tidak menjaga lingkungan berdasarkan pertanyaan berikut: ${userInput}`;
      const aiResponse = await generateContent(prompt);

      // Merapikan respons
      const formattedResponse = aiResponse
        ? aiResponse
        : "Error: Unable to get response.";
      setChatHistory([
        ...newChatHistory,
        { sender: "ai", text: formattedResponse },
      ]);
    } else {
      setChatHistory([
        ...newChatHistory,
        {
          sender: "ai",
          text: "Maaf, saya hanya dapat menjawab pertanyaan tentang cara menjaga lingkungan.",
        },
      ]);
    }

    setUserInput("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen p-9 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-4">Chat with AI</h1>
      <div className="flex-1 overflow-y-auto p-4 bg-white rounded-lg shadow-md">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`font-semibold ${
                message.sender === "user" ? "text-blue-600" : "text-green-600"
              }`}
            >
              {message.sender === "user" ? "Anda" : "AI"}:
            </span>
            <span className="ml-2">{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ketik pesan Anda di sini..."
          required
          className="w-full h-20 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-green-300"
        >
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
