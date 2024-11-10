
import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function CurhatChatbot() {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);


  const genAI = new GoogleGenerativeAI("AIzaSyBYVeFBuhSF_0_9PMgut6miTYJzg9P12FI"); 
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setChatHistory(prev => [...prev, { sender: 'user', text: input }]);

    try {
  
      const prompt = `Jawablah pertanyaan terkait kesehatan mental secara ringkas dan informatif dan jika bertannya selain tentang kesehatan mental maka akan di jawab hanya menjawab pertanyaan terkait kesehatan mental: ${input}`;
      const result = await model.generateContent(prompt);
      const botResponse = result.response.text().trim();

      setChatHistory(prev => [...prev, { sender: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("Error:", error);
      setChatHistory(prev => [...prev, { sender: 'bot', text: "Terjadi kesalahan, coba lagi." }]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  const handleClearChat = () => {
    setChatHistory([]);
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto p-4 bg-gradient-to-r from-green-400 to-green-500 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-center text-white mb-4">Kesehatan Mental Q&A</h2>
      <div className="chat-history flex-1 space-y-2 overflow-y-auto p-4 bg-white rounded-lg shadow-md border border-green-200">
        {chatHistory.map((message, index) => (
          <div key={index} className={`relative p-3 mb-2 rounded-lg max-w-xs ${message.sender === 'user' ? 'bg-blue-100 border-2 border-blue-500 text-black self-end ml-auto' : 'bg-green-100 border-2 border-green-500 text-black self-start'}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
        <input
          type="text"
          className="input input-bordered w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 h-12"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tanyakan tentang kesehatan mental..."
        />
        <button
          type="submit"
          className={`btn ${loading ? 'btn-disabled' : 'bg-blue-600 text-white hover:bg-blue-700'} h-12 w-32 rounded-md shadow-md transition`}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Kirim'}
        </button>
      </form>

      <button
        className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mt-2 w-full h-12 rounded-md shadow-md transition"
        onClick={handleClearChat}
      >
        Clear Chat
      </button>

      {loading && (
        <div className="flex items-center justify-center mt-2">
          <span className="loading loading-spinner loading-lg text-green-500"></span>
        </div>
      )}
    </div>
  );
}

export default CurhatChatbot;
