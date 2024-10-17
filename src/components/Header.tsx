import React from 'react';
import { Plane } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center">
        <Plane className="mr-2" size={24} />
        <h1 className="text-xl font-bold">Flight Passenger AI Assistant</h1>
      </div>
    </header>
  );
};

export default Header;