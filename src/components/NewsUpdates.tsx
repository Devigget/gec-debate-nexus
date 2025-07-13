
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const NewsUpdates = () => {
  const news = [
    {
      id: 1,
      title: "GEC Students Shine at National Parliamentary Debate",
      excerpt: "Our team secured 2nd position at the National Parliamentary Debate Championship held in Delhi, competing against 50+ colleges nationwide.",
      date: "2024-01-20",
      category: "Achievement",
      type: "success",
      external: true,
      link: "#"
    },
    {
      id: 2,
      title: "New Workshop Series: 'Debate Fundamentals' Launched",
      excerpt: "Weekly workshops every Saturday to help beginners master the basics of structured debate and public speaking techniques.",
      date: "2024-01-18",
      category: "Workshop",
      type: "info",
      external: false,
      link: "#"
    },
    {
      id: 3,
      title: "FE Representative Applications Now Open!",
      excerpt: "We're looking for enthusiastic first-year students to join our council. Applications close on January 31st. Don't miss this opportunity!",
      date: "2024-01-15",
      category: "Recruitment",
      type: "urgent",
      external: true,
      link: "https://forms.google.com/your-form-link"
    },
    {
      id: 4,
      title: "Alumni Meet: Success Stories and Career Guidance",
      excerpt: "Former debate club members share their journey and how debate skills helped in their professional careers. Inspiring session ahead!",
      date: "2024-01-12",
      category: "Event",
      type: "info",
      external: false,
      link: "#"
    }
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'success': return 'default';
      case 'urgent': return 'destructive';
      default: return 'secondary';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Achievement': return 'text-green-600 bg-green-100';
      case 'Workshop': return 'text-blue-600 bg-blue-100';
      case 'Recruitment': return 'text-red-600 bg-red-100';
      default: return 'text-purple-600 bg-purple-100';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-purple-600">News & Updates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and opportunities 
            in our debate community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={`${getCategoryColor(item.category)} border-0`}>
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {item.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Button 
                    variant="ghost" 
                    className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0"
                    asChild
                  >
                    <a 
                      href={item.link}
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center"
                    >
                      Read More
                      {item.external ? (
                        <ExternalLink className="ml-2 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ml-2 h-4 w-4" />
                      )}
                    </a>
                  </Button>
                  {item.type === 'urgent' && (
                    <Badge variant="destructive" className="animate-pulse">
                      Urgent
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
            View All News →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;
