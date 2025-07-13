
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, Calendar, Trophy, History, MessageCircle, Mail, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: null },
    { name: 'About', path: '/about', icon: null },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Members', path: '/members', icon: Users },
    { name: 'Achievements', path: '/achievements', icon: Trophy },
    { name: 'History', path: '/history', icon: History },
    { name: 'News', path: '/news', icon: MessageCircle },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/3a35daa4-56de-4e11-813c-947a9631d101.png" 
              alt="GEC Debate Club" 
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                GEC Debate Club
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-purple-600 bg-purple-50 shadow-sm'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/admin">
              <Button variant="outline" size="sm" className="ml-4">
                <Settings className="h-4 w-4 mr-2" />
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-sm rounded-lg border border-purple-100 mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <div className="flex items-center">
                    {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                    {item.name}
                  </div>
                </Link>
              ))}
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              >
                <div className="flex items-center">
                  <Settings className="h-4 w-4 mr-2" />
                  Admin
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
