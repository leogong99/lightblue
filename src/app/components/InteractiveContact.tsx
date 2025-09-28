'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const botResponses = {
  greeting: [
    "Hello! I'd love to hear about your project. What brings you here today?",
    "Hi there! Tell me about what you're working on.",
    "Great to meet you! What can I help you with?"
  ],
  project: [
    "That sounds exciting! What's your timeline for this project?",
    "Interesting! What's the main challenge you're facing?",
    "I'd love to learn more. What's your target audience?"
  ],
  timeline: [
    "Perfect timing! I'm currently available for new projects. What's your budget range?",
    "That works well with my schedule. What's your preferred communication style?",
    "Great! I can definitely work within that timeframe. What's your biggest priority?"
  ],
  budget: [
    "That's helpful context. What's your preferred project structure - hourly or fixed price?",
    "Thanks for sharing! What's most important to you - speed, quality, or cost?",
    "Got it! What's your ideal start date?"
  ],
  contact: [
    "Perfect! I'll send you a detailed proposal within 24 hours. What's your email?",
    "Excellent! I'll prepare a custom quote for you. How should I reach you?",
    "Great! I'm excited to work together. What's the best way to contact you?"
  ],
  demo: [
    "I am just a fake bot :)  Please contact me directly at leogong99@gmail.com",
  ]
};

export default function InteractiveContact() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help you get in touch. What brings you here today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [conversationStep, setConversationStep] = useState('greeting');
  const [isTyping, setIsTyping] = useState(false);
  const { currentTheme } = useTheme();

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now() + Math.random(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getBotResponse = () => {
    const responses = botResponses[conversationStep as keyof typeof botResponses];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (!currentInput.trim()) return;

    addMessage(currentInput, 'user');
    setCurrentInput('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const response = getBotResponse();
      addMessage(response, 'bot');
      setIsTyping(false);

      // Update conversation step
      if (conversationStep === 'greeting') setConversationStep('project');
      else if (conversationStep === 'project') setConversationStep('timeline');
      else if (conversationStep === 'timeline') setConversationStep('budget');
      else if (conversationStep === 'budget') setConversationStep('contact');
      else setConversationStep('demo');
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${currentTheme === 'retro' ? 'bg-[var(--surface)] border-[var(--border)]' : 'bg-white border-gray-200'} rounded-2xl shadow-xl overflow-hidden`}
      >
        {/* Chat Header */}
        <div className={`${currentTheme === 'retro' ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)]' : 'bg-gradient-to-r from-blue-600 to-blue-700'} px-6 py-4`}>
          <div className="flex items-center">
            <div className={`w-10 h-10 ${currentTheme === 'retro' ? 'bg-[var(--accent)]' : 'bg-white'} rounded-full flex items-center justify-center mr-3`}>
              <span className={`${currentTheme === 'retro' ? 'text-[var(--text-primary)]' : 'text-blue-600'} text-xl`}>👋</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Let&apos;s Chat!</h3>
              <p className="text-blue-100 text-sm">I&apos;m here to help you get started</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-6 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className={`border-t ${currentTheme === 'retro' ? 'border-[var(--border)]' : 'border-gray-200'} p-4`}>
          <div className="flex space-x-3">
            <label htmlFor="message-input" className="sr-only">Type your message</label>
            <input
              id="message-input"
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className={`flex-1 px-4 py-2 ${currentTheme === 'retro' ? 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)]' : 'border-gray-300'} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              aria-label="Type your message to start a conversation"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
              disabled={!currentInput.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
              aria-label="Send message"
            >
              Send
            </motion.button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={`border-t ${currentTheme === 'retro' ? 'border-[var(--border)] bg-[var(--surface)]' : 'border-gray-200 bg-gray-50'} p-4`}>
          <p className={`text-sm ${currentTheme === 'retro' ? 'text-[var(--text-secondary)]' : 'text-gray-600'} mb-3`}>Quick actions:</p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Quick action buttons">
            {[
              "I have a new project",
              "Need a consultation",
              "Want to collaborate",
              "Just saying hi!"
            ].map((action) => (
              <motion.button
                key={action}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentInput(action)}
                className={`px-3 py-1 ${currentTheme === 'retro' ? 'bg-[var(--surface-elevated)] text-[var(--text-primary)] border-[var(--border)]' : 'bg-white text-gray-700 border-gray-200'} text-sm rounded-full border hover:border-blue-300 hover:text-blue-600 transition-colors`}
                aria-label={`Select quick action: ${action}`}
              >
                {action}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 text-center"
      >
        <p className="text-gray-600 mb-4">Or reach out directly:</p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:hello@example.com"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>📧</span>
            <span>leogong99@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/javascriptguru"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>💼</span>
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
