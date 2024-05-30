import React, { useState } from 'react';
import { getChatbotResponse } from '../../openaiService';
import './styles.css';

import * as Icons  from "@phosphor-icons/react";

export const Ia = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const userMessage = { text: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
  
      try {
        const botResponse = await getChatbotResponse(input);
        const botMessage = { text: botResponse, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
      } catch (error) {
        console.error('Erro ao obter resposta do chatbot:', error);
      }
  
      setInput('');
    };
  
    return (
        <main className='page-ia'>
            <header className='header-ia'>

                     <h1>Chatbot OpenAI</h1>
            </header>
            <section className='container-ia'>
                <div className="user-wrapper">
                    {messages.map((msg, index) => (
                        <div key={index} className={msg.sender}>
                        <strong>{msg.sender === 'user' ? 'Você: ' : 'Bot: '}</strong>
                        {msg.text}
                        </div>
                    ))}
                </div>
        </section>
            <footer className='footer-ia'>
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                    <button type="submit">
                    
                        <Icons.ChatCircleDots   />
                    </button>
                </form>
            </footer>
      </main>
    );
  };

