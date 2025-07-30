import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { HeartIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Button } from './button';

interface HeaderProps {
  variant?: 'landing' | 'app';
}

export const Header = ({ variant = 'landing' }: HeaderProps) => {
  const location = useLocation();

  if (variant === 'app') {
    return (
      <header className="bg-white shadow-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/ad9c47fb-76f7-474b-9629-488fc16e6c8d.png" alt="Pro S Logo" className="w-10 h-10 rounded-2xl" />
              <span className="text-xl font-bold text-primary">Pro S</span>
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-card sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/ad9c47fb-76f7-474b-9629-488fc16e6c8d.png" alt="Pro S Logo" className="w-10 h-10 rounded-2xl" />
            <span className="text-xl font-bold text-primary">Pro S</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-foreground hover:text-primary transition-colors ${
                location.pathname === '/' ? 'text-primary font-medium' : ''
              }`}
            >
              Home
            </Link>
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
              <PhoneIcon className="w-4 h-4" />
              <span>Emergency: 15</span>
            </div>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};