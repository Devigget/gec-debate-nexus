
import Layout from '@/components/Layout';
import { Crown, Star, Users, Mail, Phone, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Members = () => {
  const councilMembers = [
    {
      name: "Arjun Sharma",
      position: "President",
      year: "Final Year CSE",
      email: "president@gecdebate.com",
      phone: "+91 98765 43210",
      linkedin: "linkedin.com/in/arjunsharma",
      quote: "Leading with passion, debating with purpose.",
      achievements: ["Best Speaker 2023", "Regional Champion"],
      icon: Crown,
      color: "text-yellow-600",
      bgColor: "from-yellow-400 to-orange-400"
    },
    {
      name: "Priya Desai", 
      position: "Vice President",
      year: "Third Year ECE",
      email: "vp@gecdebate.com",
      phone: "+91 98765 43211",
      linkedin: "linkedin.com/in/priyadesai",
      quote: "Empowering voices, fostering growth.",
      achievements: ["State Level Winner", "Best Adjudicator"],
      icon: Star,
      color: "text-purple-600",
      bgColor: "from-purple-400 to-pink-400"
    },
    {
      name: "Prof. Dr. Rajesh Kumar",
      position: "Faculty Advisor",
      year: "Professor",
      email: "advisor@gecdebate.com",
      phone: "+91 98765 43212",
      linkedin: "linkedin.com/in/rajeshkumar",
      quote: "Guiding minds towards eloquent expression.",
      achievements: ["20+ Years Experience", "Published Author"],
      icon: Users,
      color: "text-blue-600",
      bgColor: "from-blue-400 to-indigo-400"
    },
    {
      name: "Rahul Naik",
      position: "Secretary",
      year: "Third Year MECH",
      email: "secretary@gecdebate.com",
      phone: "+91 98765 43213",
      linkedin: "linkedin.com/in/rahulnaik",
      quote: "Organizing excellence, one event at a time.",
      achievements: ["Event Coordinator", "Top Organizer"],
      icon: Users,
      color: "text-green-600",
      bgColor: "from-green-400 to-teal-400"
    },
    {
      name: "Sneha D'Souza",
      position: "Treasurer",
      year: "Second Year IT",
      email: "treasurer@gecdebate.com",
      phone: "+91 98765 43214",
      linkedin: "linkedin.com/in/sneha",
      quote: "Managing resources for maximum impact.",
      achievements: ["Finance Expert", "Budget Planner"],
      icon: Star,
      color: "text-indigo-600",
      bgColor: "from-indigo-400 to-purple-400"
    },
    {
      name: "Aditya Kulkarni",
      position: "Joint Secretary",
      year: "Second Year CSE",
      email: "jointsec@gecdebate.com",
      phone: "+91 98765 43215",
      linkedin: "linkedin.com/in/adityakulkarni",
      quote: "Supporting leadership, enabling success.",
      achievements: ["Rising Star", "Team Player"],
      icon: Users,
      color: "text-red-600",
      bgColor: "from-red-400 to-pink-400"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Council <span className="text-yellow-300">Members</span>
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Meet the dedicated individuals who lead, inspire, and guide our debate community 
                towards excellence and intellectual growth.
              </p>
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {councilMembers.map((member) => (
              <Card key={member.name} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.bgColor} flex items-center justify-center text-white text-4xl font-bold shadow-lg`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 p-2 bg-white rounded-full shadow-md ${member.color}`}>
                      <member.icon className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className={`font-semibold mb-1 ${member.color}`}>{member.position}</p>
                  <p className="text-gray-600 mb-4">{member.year}</p>
                  
                  <p className="text-gray-600 italic mb-4">"{member.quote}"</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Achievements</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.achievements.map((achievement, index) => (
                        <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2 text-purple-500" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2 text-purple-500" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Linkedin className="h-4 w-4 mr-2 text-purple-500" />
                      <span className="truncate">{member.linkedin}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Members;
