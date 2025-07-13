
import Layout from '@/components/Layout';
import { Calendar, Clock, User, ExternalLink, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "GEC Debate Club Wins National Championship",
      excerpt: "Our team brought home the gold from the National Inter-College Debate Championship held in Delhi.",
      content: "In a remarkable display of eloquence and critical thinking, the GEC Debate Club team consisting of Arjun Sharma and Priya Desai emerged victorious at the National Inter-College Debate Championship. The competition saw participation from over 100 colleges across India.",
      date: "2024-01-15",
      time: "10:30 AM",
      author: "Admin",
      category: "Achievement",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Applications Open for FE Representative Position",
      excerpt: "We're looking for passionate first-year students to join our council as FE Representatives.",
      content: "The GEC Debate Club is accepting applications for the position of First Year (FE) Representative. This is an excellent opportunity for new students to get involved in club activities and develop their leadership skills.",
      date: "2024-01-10",
      time: "2:00 PM",
      author: "Secretary",
      category: "Announcement",
      image: "/api/placeholder/400/250",
      featured: true,
      hasApplication: true
    },
    {
      id: 3,
      title: "Workshop on Public Speaking Techniques",
      excerpt: "Expert trainer to conduct intensive workshop on advanced public speaking techniques.",
      content: "Join us for an intensive workshop on public speaking techniques conducted by renowned speaker and trainer, Mr. Vikram Malhotra. The workshop will cover voice modulation, body language, and confidence building.",
      date: "2024-01-08",
      time: "3:15 PM",
      author: "Training Committee",
      category: "Workshop",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Inter-Department Debate Series Begins",
      excerpt: "Annual inter-department debate series kicks off with Computer Science vs Electronics debate.",
      content: "The much-awaited inter-department debate series has begun with an exciting debate between Computer Science and Electronics departments. The topic: 'Artificial Intelligence will replace human creativity'.",
      date: "2024-01-05",
      time: "11:00 AM",
      author: "Event Coordinator",
      category: "Event",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Alumni Success Story: From GEC to Corporate Leadership",
      excerpt: "Former club president shares journey from college debates to becoming a corporate executive.",
      content: "In an inspiring session, our alumnus Rajesh Patel (President 2018-19) shared his journey from being a shy engineering student to becoming a successful corporate leader, crediting his debate club experience.",
      date: "2024-01-03",
      time: "4:00 PM",
      author: "Alumni Relations",
      category: "Alumni",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Achievement': return 'bg-green-100 text-green-800';
      case 'Announcement': return 'bg-blue-100 text-blue-800';
      case 'Workshop': return 'bg-purple-100 text-purple-800';
      case 'Event': return 'bg-orange-100 text-orange-800';
      case 'Alumni': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Latest <span className="text-yellow-300">News</span>
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Stay updated with the latest happenings, achievements, and announcements 
                from GEC Debate Club and the world of debates.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Featured News */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Featured <span className="text-purple-600">Stories</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white text-6xl font-bold">
                    {item.title.split(' ')[0][0]}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                      {item.featured && (
                        <Badge className="bg-red-100 text-red-800">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 hover:text-purple-600 cursor-pointer">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {item.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{item.time}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{item.author}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.content}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Read More
                      </Button>
                      {item.hasApplication && (
                        <Button size="sm" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Apply Now
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Regular News */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Recent <span className="text-purple-600">Updates</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((item) => (
                <Card key={item.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <div className="h-32 bg-gradient-to-br from-purple-300 to-blue-300 flex items-center justify-center text-white text-4xl font-bold">
                    {item.title.split(' ')[0][0]}
                  </div>
                  <CardHeader>
                    <Badge className={`${getCategoryColor(item.category)} w-fit mb-2`}>
                      {item.category}
                    </Badge>
                    <CardTitle className="text-lg font-bold text-gray-900 hover:text-purple-600 cursor-pointer line-clamp-2">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-2">
                      {item.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>{item.author}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-gray-600 mb-6">
                Get the latest news, event updates, and exclusive content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;
