// src/components/CurhatChatbot.js
import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function CurhatChatbot() {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Initialize GoogleGenerativeAI with your API key
  const genAI = new GoogleGenerativeAI("AIzaSyBYVeFBuhSF_0_9PMgut6miTYJzg9P12FI"); // Ensure to use .env for API key
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Function to check if input is emotion-related
  const isEmotionRelated = (input) => {
    const englishKeywords = ['feel', 'emotion', 'sad', 'happy', 'angry', 'anxiety', 'depression'];
    const indonesianKeywords = ['merasa', 'emosi', 'sedih', 'bahagia', 'marah', 'cemas', 'depresi'];

    const keywords = [...englishKeywords, ...indonesianKeywords];
    return keywords.some(keyword => input.toLowerCase().includes(keyword));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent empty submissions
    setLoading(true);

    // Update chat history with the user's message
    setChatHistory(prev => [...prev, { sender: 'user', text: input }]);

    // Check if the input relates to emotions
    if (!isEmotionRelated(input)) {
      setChatHistory(prev => [...prev, { sender: 'bot', text: "Maaf, saya hanya bisa membahas tentang perasaan dan emosi." }]);
      setLoading(false);
      setInput('');
      return;
    }

    try {
      // Generate content using the generateContent method
      const result = await model.generateContent(input);
      const botResponse = result.response.text(); // Adjusting to extract text

      // Validate bot's response to ensure it discusses emotions
      if (!isEmotionRelated(botResponse)) {
        setChatHistory(prev => [...prev, { sender: 'bot', text: "Maaf, saya hanya bisa membahas tentang perasaan dan emosi." }]);
      } else {
        setChatHistory(prev => [...prev, { sender: 'bot', text: botResponse }]);
      }
    } catch (error) {
      console.error("Error:", error);
      setChatHistory(prev => [...prev, { sender: 'bot', text: "Terjadi kesalahan, coba lagi." }]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  const handleClearChat = () => {
    setChatHistory([]); // Clear chat history
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto p-4 bg-gradient-to-r from-green-400 to-green-500 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-center text-white mb-4">Curhat Chatbot</h2>
      <div className="chat-history flex-1 space-y-2 overflow-y-auto p-4 bg-white rounded-lg shadow-md border border-green-200">
        {chatHistory.map((message, index) => (
          <div key={index} className={`relative p-3 mb-2 rounded-lg max-w-xs ${message.sender === 'user' ? 'bg-blue-100 border-2 border-blue-500 text-black self-end ml-auto' : 'bg-green-100 border-2 border-green-500 text-black self-start'}`}>
            <p>{message.text}</p>
            <div className={`absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent ${message.sender === 'user' ? 'border-b-8 border-b-blue-100 right-1' : 'border-b-8 border-b-green-100 left-1'}`}></div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
        <input
          type="text"
          className="input input-bordered w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 h-12"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Curhat di sini..."
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
