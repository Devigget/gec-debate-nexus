
import Layout from '@/components/Layout';
import { Trophy, Medal, Award, Star, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      title: "National Debate Championship Winner",
      year: "2023",
      category: "Competition",
      level: "National",
      description: "Our team secured first place in the prestigious National Inter-College Debate Championship.",
      participants: ["Arjun Sharma", "Priya Desai"],
      prize: "₹1,00,000",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      title: "Best Speaker Award - Regional Championship",
      year: "2023",
      category: "Individual",
      level: "Regional",
      description: "Sneha D'Souza won the Best Speaker Award at the Regional Debate Championship.",
      participants: ["Sneha D'Souza"],
      prize: "₹25,000",
      icon: Medal,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Parliamentary Debate Excellence Award",
      year: "2022",
      category: "Team",
      level: "State",
      description: "Recognition for outstanding performance in parliamentary style debates.",
      participants: ["Team GEC Debate Club"],
      prize: "Trophy & Certificate",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Model UN Best Delegation",
      year: "2023",
      category: "Conference",
      level: "Inter-College",
      description: "Our MUN team received Best Delegation award at the Inter-College Model UN Conference.",
      participants: ["Rahul Naik", "Aditya Kulkarni"],
      prize: "₹15,000",
      icon: Star,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Youth Parliament Champions",
      year: "2022",
      category: "Competition",
      level: "District",
      description: "Champions at the District Youth Parliament organized by the local administration.",
      participants: ["Multiple Teams"],
      prize: "₹30,000",
      icon: Trophy,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      title: "Best Debate Club Award",
      year: "2023",
      category: "Institutional",
      level: "University",
      description: "Recognized as the Best Debate Club by Goa University for overall excellence.",
      participants: ["GEC Debate Club"],
      prize: "Certificate & Grant",
      icon: Award,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'National': return 'bg-red-100 text-red-800';
      case 'Regional': return 'bg-orange-100 text-orange-800';
      case 'State': return 'bg-blue-100 text-blue-800';
      case 'District': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Competition': return 'bg-purple-100 text-purple-800';
      case 'Individual': return 'bg-yellow-100 text-yellow-800';
      case 'Team': return 'bg-blue-100 text-blue-800';
      case 'Conference': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = [
    { label: "Total Wins", value: "50+", icon: Trophy },
    { label: "Individual Awards", value: "25+", icon: Medal },
    { label: "Years of Excellence", value: "10+", icon: Calendar },
    { label: "Prize Money Won", value: "₹5L+", icon: Star }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-yellow-300">Achievements</span>
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                A testament to excellence, dedication, and the power of eloquent discourse. 
                These victories represent years of hard work and intellectual growth.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <stat.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`${achievement.bgColor} border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                    <div className="flex gap-2">
                      <Badge className={getLevelColor(achievement.level)}>
                        {achievement.level}
                      </Badge>
                      <Badge className={getCategoryColor(achievement.category)}>
                        {achievement.category}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {achievement.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                      <span className="font-medium">{achievement.year}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-purple-500" />
                      <span className="text-sm">{achievement.participants.join(', ')}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Trophy className="h-4 w-4 mr-2 text-purple-500" />
                      <span className="font-medium text-orange-600">{achievement.prize}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Add Your Name to This List?</h3>
              <p className="text-lg text-purple-100 mb-6">
                Join GEC Debate Club and be part of our legacy of excellence!
              </p>
              <a
                href="https://chat.whatsapp.com/your-group-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-semibold"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Achievements;
