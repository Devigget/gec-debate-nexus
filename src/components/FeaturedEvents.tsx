
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturedEvents = () => {
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
      priority: "high"
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
      priority: "medium"
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
      priority: "low"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      default: return 'border-l-green-500 bg-green-50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Registration Open': return 'bg-green-100 text-green-800';
      case 'Few Spots Left': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming <span className="text-purple-600">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for exciting debates, workshops, and competitions that will challenge your mind 
            and enhance your speaking skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className={`border-l-4 ${getPriorityColor(event.priority)} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
                    {event.title}
                  </CardTitle>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>
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

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
            View All Events →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
