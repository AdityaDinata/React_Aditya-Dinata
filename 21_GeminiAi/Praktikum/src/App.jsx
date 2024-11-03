// src/App.js
import React from 'react';
import CurhatChatbot from './components/CurhatChatbot';

function App() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="text-center w-full max-w-md mx-auto p-6 bg-white shadow-xl rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-primary">Curhat Chatbot</h1>
        <CurhatChatbot />
      </div>
    </div>
  );
}

export default App;
