
import Layout from '@/components/Layout';
import { Calendar, Clock, MapPin, Users, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Inter-College Parliamentary Debate Championship",
      date: "2024-02-15",
      time: "10:00 AM",
      venue: "Main Auditorium",
      description: "Annual championship featuring teams from across Goa. Register your team now!",
      participants: "64 teams",
      status: "Registration Open",
      category: "Competition",
      prize: "₹50,000"
    },
    {
      id: 2,
      title: "Public Speaking Workshop",
      date: "2024-01-28",
      time: "2:00 PM", 
      venue: "Conference Hall",
      description: "Master the art of confident public speaking with expert trainers.",
      participants: "50 seats",
      status: "Few Spots Left",
      category: "Workshop",
      prize: "Certificate"
    },
    {
      id: 3,
      title: "Freshers' Debate Night",
      date: "2024-02-05",
      time: "7:00 PM",
      venue: "Open Amphitheater",
      description: "Welcome new members with an exciting debate night under the stars.",
      participants: "Open to all",
      status: "Coming Soon",
      category: "Social",
      prize: "Trophies"
    },
    {
      id: 4,
      title: "Model United Nations Conference",
      date: "2024-03-10",
      time: "9:00 AM",
      venue: "Convention Center",
      description: "Three-day MUN conference with delegates from multiple colleges.",
      participants: "200 delegates",
      status: "Registration Open",
      category: "Conference",
      prize: "₹25,000"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Registration Open': return 'bg-green-100 text-green-800';
      case 'Few Spots Left': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Competition': return 'bg-red-100 text-red-800';
      case 'Workshop': return 'bg-purple-100 text-purple-800';
      case 'Conference': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Upcoming <span className="text-yellow-300">Events</span>
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Join us for exciting debates, workshops, and competitions that will challenge your mind 
                and enhance your speaking skills.
              </p>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                      <Badge className={getStatusColor(event.status)}>
                        {event.status}
                      </Badge>
                    </div>
                    <div className="flex items-center text-orange-600">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{event.prize}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-purple-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-purple-500" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-purple-500" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    {event.status === 'Registration Open' ? 'Register Now' : 'Learn More'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
