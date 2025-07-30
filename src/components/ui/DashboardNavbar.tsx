import React from 'react';
import { 
  Bars3Icon, 
  MagnifyingGlassIcon, 
  BellIcon,
  UserCircleIcon 
} from '@heroicons/react/24/outline';
import logo from '@/assets/logo.png';

interface NavbarProps {
  onToggleSidebar: () => void;
}

export const DashboardNavbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          {/* Mobile hamburger menu */}
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 lg:hidden"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Pro S" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-900 hidden sm:block">Pro S</span>
          </div>
        </div>

        {/* Center section - Search bar */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search patients..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#007F5F] focus:border-[#007F5F] sm:text-sm"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
            <BellIcon className="w-6 h-6" />
            {/* Notification badge */}
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>

          {/* User profile */}
          <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
            <UserCircleIcon className="w-8 h-8" />
            <span className="hidden md:block text-sm font-medium">Dr. Smith</span>
          </button>
        </div>
      </div>
    </header>
  );
};