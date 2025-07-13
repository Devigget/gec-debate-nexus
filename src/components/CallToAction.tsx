
import { MessageSquare, UserPlus, Calendar, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-yellow-300">Transform</span> Your Voice?
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join GEC Debate Club and embark on a journey of intellectual growth, 
            confident communication, and lifelong friendships. Your future self will thank you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <MessageSquare className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Join WhatsApp</h3>
              <p className="text-purple-100 text-sm">Connect instantly with our community</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <UserPlus className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Apply for Positions</h3>
              <p className="text-purple-100 text-sm">Lead and make a difference</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Calendar className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Attend Events</h3>
              <p className="text-purple-100 text-sm">Never miss an opportunity to grow</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Trophy className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Win Competitions</h3>
              <p className="text-purple-100 text-sm">Showcase your skills and win big</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://chat.whatsapp.com/your-group-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <MessageSquare className="mr-2 h-6 w-6" />
                Join WhatsApp Group
              </Button>
            </a>
            <a
              href="https://forms.google.com/your-form-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <UserPlus className="mr-2 h-6 w-6" />
                Apply for FE Rep
              </Button>
            </a>
          </div>

          <div className="mt-8 text-purple-200">
            <p className="text-sm">
              Questions? Email us at <a href="mailto:debate@gec.ac.in" className="text-yellow-300 hover:underline">debate@gec.ac.in</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
