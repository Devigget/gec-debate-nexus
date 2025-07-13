
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/3a35daa4-56de-4e11-813c-947a9631d101.png" 
                alt="GEC Debate Club" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">GEC Debate Club</h3>
                <p className="text-purple-200">Work is Worship</p>
              </div>
            </div>
            <p className="text-purple-100 mb-4">
              Fostering critical thinking, eloquent speech, and intellectual discourse at Goa Engineering College. 
              Join us in exploring the art of debate and public speaking.
            </p>
            <a
              href="https://chat.whatsapp.com/your-group-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Join WhatsApp Group
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/events" className="block text-purple-200 hover:text-white transition-colors">
                Upcoming Events
              </Link>
              <Link to="/members" className="block text-purple-200 hover:text-white transition-colors">
                Council Members
              </Link>
              <Link to="/achievements" className="block text-purple-200 hover:text-white transition-colors">
                Our Achievements
              </Link>
              <Link to="/history" className="block text-purple-200 hover:text-white transition-colors">
                Club History
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center text-purple-200">
                <Mail className="h-4 w-4 mr-2" />
                <span>debate@gec.ac.in</span>
              </div>
              <div className="flex items-center text-purple-200">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-purple-200">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Goa Engineering College</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 text-center">
          <p className="text-purple-200">
            © 2024 GEC Debate Club. All rights reserved. Built with ❤️ for intellectual discourse.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
