import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleToggle = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (input.trim() === '') return;
  
    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
  
    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAnzbwfWe13zbpZf4ASUCUYAlHf11H4msM', // Replace YOUR_API_KEY with your actual API key
        {
          contents: [
            {
              parts: [
                {
                  text: input,
                },
              ],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log('Full API Response:', response.data); // Log the entire response for inspection
  
      if (response.data && response.data.candidates && response.data.candidates[0].content.parts[0].text) {
        const botMessage = {
          sender: 'bot',
          text: response.data.candidates[0].content.parts[0].text || 'No response text available',
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        const fallbackMessage = response.data?.error?.message || JSON.stringify(response.data) || 'Unexpected API response format';
        console.error('Fallback response message:', fallbackMessage);
        const errorMessage = { sender: 'bot', text: fallbackMessage };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      console.error('Error sending message:', error.response?.data || error.message);
  
      const errorMessage = { sender: 'bot', text: 'Error in response. Please try again.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  
    setInput('');
  };

  return (
    <div>
      <div
        className="fixed bottom-4 right-4 rounded-full bg-blue-600 w-12 h-12 flex items-center justify-center cursor-pointer z-50"
        onClick={handleToggle}
      >
        💬
      </div>
      
      {isOpen && (
        <div className="fixed bottom-16 right-4 bg-white w-96 p-4 rounded-lg shadow-lg z-50">
          <div className="h-72 overflow-y-scroll">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <p className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <input
            className="border w-full p-2 mt-2 rounded"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
