import React, { useState } from 'react';
import { Plane, MessageSquare } from 'lucide-react';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';

function App() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { text: message, isUser: true }]);
    // Simulate AI response (replace with actual AI logic later)
    setTimeout(() => {
      const aiResponse = getAIResponse(message);
      setMessages(prevMessages => [...prevMessages, { text: aiResponse, isUser: false }]);
    }, 1000);
  };

  const getAIResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('flight delay')) {
      return "If your flight is delayed, you may be entitled to compensation under EU Regulation 261/2004 or other applicable laws. The amount depends on the length of the delay and the distance of the flight. Always check with the airline for their specific policies.";
    } else if (lowerMessage.includes('luggage') || lowerMessage.includes('baggage')) {
      return "If your luggage is damaged or lost, report it immediately to the airline before leaving the airport. You may be entitled to compensation for damaged or lost items. Keep all receipts and file a claim with the airline as soon as possible.";
    } else if (lowerMessage.includes('cancel')) {
      return "If your flight is cancelled, you are entitled to either a full refund or a re-routing to your final destination. You may also be entitled to compensation, depending on the circumstances of the cancellation and how much notice you were given.";
    } else {
      return "I'm here to help with any questions about your rights as a flight passenger. Feel free to ask about flight delays, cancellations, luggage issues, or any other concerns you may have.";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ChatInterface messages={messages} onSendMessage={handleSendMessage} />
      </main>
    </div>
  );
}

export default App;