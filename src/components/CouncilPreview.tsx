
import { Crown, Star, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CouncilPreview = () => {
  const councilMembers = [
    {
      name: "Arjun Sharma",
      position: "President",
      image: "/api/placeholder/150/150",
      quote: "Leading with passion, debating with purpose.",
      icon: Crown,
      color: "text-yellow-600"
    },
    {
      name: "Priya Desai", 
      position: "Vice President",
      image: "/api/placeholder/150/150",
      quote: "Empowering voices, fostering growth.",
      icon: Star,
      color: "text-purple-600"
    },
    {
      name: "Prof. Dr. Rajesh Kumar",
      position: "Faculty Advisor",
      image: "/api/placeholder/150/150",
      quote: "Guiding minds towards eloquent expression.",
      icon: Users,
      color: "text-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-purple-600">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated individuals who inspire, guide, and lead our debate community 
            towards excellence and intellectual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {councilMembers.map((member) => (
            <Card key={member.name} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 p-2 bg-white rounded-full shadow-md ${member.color}`}>
                    <member.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className={`font-semibold mb-4 ${member.color}`}>{member.position}</p>
                <p className="text-gray-600 italic">"{member.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Messages Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Messages from Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-3">President's Message</h4>
              <p className="text-purple-100 leading-relaxed">
                "Welcome to GEC Debate Club! Here, we don't just debate - we forge character, 
                build confidence, and create future leaders. Every voice matters, every opinion counts."
              </p>
              <div className="mt-4 text-sm text-purple-200">- Arjun Sharma, President</div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-3">Faculty Advisor's Note</h4>
              <p className="text-blue-100 leading-relaxed">
                "The art of debate teaches us not just to speak, but to listen, think critically, 
                and respect diverse perspectives. I'm proud to guide these brilliant minds."
              </p>
              <div className="mt-4 text-sm text-blue-200">- Prof. Dr. Rajesh Kumar</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/members">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 text-lg">
              <Users className="mr-2 h-5 w-5" />
              Meet All Council Members
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CouncilPreview;
