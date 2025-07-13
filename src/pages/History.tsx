
import Layout from '@/components/Layout';
import { Calendar, Users, Trophy, BookOpen, Milestone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const History = () => {
  const timeline = [
    {
      year: "2014",
      title: "Foundation of GEC Debate Club",
      description: "Started with just 15 passionate students and Prof. Dr. Rajesh Kumar as the founding faculty advisor. The vision was to create a platform for intellectual discourse.",
      milestone: "Birth of a Vision",
      icon: BookOpen,
      achievements: ["First debate held", "15 founding members", "Constitutional framework established"]
    },
    {
      year: "2015-2016",
      title: "First Inter-College Participation",
      description: "Our team participated in the first inter-college debate competition, marking the beginning of our competitive journey.",
      milestone: "Taking the Stage",
      icon: Users,
      achievements: ["First inter-college competition", "40 active members", "Weekly practice sessions"]
    },
    {
      year: "2017-2018",
      title: "Regional Recognition",
      description: "GEC Debate Club gained recognition at the regional level with multiple semi-final appearances and our first major award.",
      milestone: "Rising Stars",
      icon: Trophy,
      achievements: ["First major award", "Regional semi-finalists", "100+ members"]
    },
    {
      year: "2019-2020",
      title: "State Championship Victory",
      description: "Historic moment as we won our first state-level championship, putting GEC on the debate map of Goa.",
      milestone: "Champions Emerge",
      icon: Trophy,
      achievements: ["State champions", "Best speaker awards", "Media recognition"]
    },
    {
      year: "2021-2022",
      title: "Digital Transformation",
      description: "Adapted to virtual debates during the pandemic, organizing online tournaments and maintaining our community spirit.",
      milestone: "Adapting & Thriving",
      icon: Calendar,
      achievements: ["Virtual tournaments", "Online workshops", "Digital community building"]
    },
    {
      year: "2023-2024",
      title: "National Excellence",
      description: "Achieved national recognition with multiple championship wins and establishing ourselves as one of India's premier college debate clubs.",
      milestone: "National Recognition",
      icon: Milestone,
      achievements: ["National champions", "₹5L+ prize money", "200+ active members"]
    }
  ];

  const founders = [
    {
      name: "Prof. Dr. Rajesh Kumar",
      role: "Founding Faculty Advisor",
      contribution: "Visionary leader who established the club's foundation and continues to guide us today."
    },
    {
      name: "Amit Patil",
      role: "First President (2014-15)",
      contribution: "Led the initial team and established the club's core values and traditions."
    },
    {
      name: "Kavya Shetty",
      role: "First Secretary (2014-15)",
      contribution: "Organized the first debates and created the organizational structure."
    }
  ];

  const milestones = [
    { number: "10+", label: "Years of Excellence" },
    { number: "500+", label: "Alumni Network" },
    { number: "50+", label: "Major Victories" },
    { number: "₹5L+", label: "Total Prize Money" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-yellow-300">Journey</span>
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                From humble beginnings to national recognition - the inspiring story of 
                GEC Debate Club's decade-long journey of excellence and growth.
              </p>
            </div>
          </div>
        </div>

        {/* Milestones Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{milestone.number}</div>
                  <div className="text-gray-600">{milestone.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our <span className="text-purple-600">Timeline</span>
            </h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-8">
                      <div className="bg-purple-600 rounded-full p-3 text-white">
                        <item.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <Card className="flex-1 hover:shadow-lg transition-shadow bg-white">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-2xl font-bold text-purple-600">
                            {item.year}
                          </CardTitle>
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                            {item.milestone}
                          </span>
                        </div>
                        <CardTitle className="text-xl text-gray-900">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-lg">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {item.achievements.map((achievement, i) => (
                            <div key={i} className="bg-purple-50 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium text-center">
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-purple-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Founders Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Honoring Our <span className="text-purple-600">Founders</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-purple-600 font-semibold mb-3">{founder.role}</p>
                  <p className="text-gray-600">{founder.contribution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legacy Message */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Building Tomorrow's Leaders</h3>
              <p className="text-lg text-purple-100 mb-6">
                Our history is not just about wins and trophies - it's about transforming lives, 
                building confidence, and creating leaders who will shape the future.
              </p>
              <a
                href="https://chat.whatsapp.com/your-group-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-semibold"
              >
                Be Part of Our Next Chapter
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default History;
