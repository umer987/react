import React from 'react';
import { Shield, Bell, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8" />
            <span className="font-bold text-xl">SAFE KARACHI</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-blue-700">
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full hover:bg-blue-700">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;