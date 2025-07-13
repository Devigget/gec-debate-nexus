
import { Button } from '@/components/ui/button';
import { Calendar, Users, Trophy, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/3a35daa4-56de-4e11-813c-947a9631d101.png" 
            alt="GEC Debate Club Logo" 
            className="h-32 w-auto mx-auto mb-6 drop-shadow-2xl animate-scale-in"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            GEC <span className="text-yellow-300">Debate Club</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-2 font-medium">
            Work is Worship
          </p>
          <p className="text-lg text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Unleashing the power of words, fostering critical thinking, and building tomorrow's leaders 
            through the art of debate and public speaking at Goa Engineering College.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-yellow-300">150+</div>
            <div className="text-purple-200">Active Members</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-yellow-300">25+</div>
            <div className="text-purple-200">Events Yearly</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-yellow-300">12</div>
            <div className="text-purple-200">Major Prizes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-yellow-300">8+</div>
            <div className="text-purple-200">Years Legacy</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Link to="/events">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
              <Calendar className="mr-2 h-5 w-5" />
              Upcoming Events
            </Button>
          </Link>
          <Link to="/members">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
              <Users className="mr-2 h-5 w-5" />
              Meet Our Team
            </Button>
          </Link>
          <a
            href="https://chat.whatsapp.com/your-group-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
              <MessageSquare className="mr-2 h-5 w-5" />
              Join WhatsApp
            </Button>
          </a>
        </div>

        {/* Special Announcement */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black p-6 rounded-lg shadow-2xl animate-pulse">
          <h3 className="text-xl font-bold mb-2">🎯 Now Accepting Applications!</h3>
          <p className="mb-4">First Year Representative Position Open - Shape the future of debate at GEC!</p>
          <a
            href="https://forms.google.com/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-black text-white hover:bg-gray-800">
              Apply Now →
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
