
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Anisha Patel",
      year: "Final Year CSE",
      content: "GEC Debate Club transformed my confidence completely. From a shy freshman to winning inter-college competitions, this journey has been incredible!",
      rating: 5,
      achievement: "Best Speaker Award 2023"
    },
    {
      name: "Rohit Naik",
      year: "Third Year ECE", 
      content: "The skills I learned here helped me ace job interviews and presentations. The club doesn't just teach debate - it builds leaders.",
      rating: 5,
      achievement: "Campus Placement at Google"
    },
    {
      name: "Sneha D'Souza",
      year: "Second Year MECH",
      content: "Amazing community of intellectuals! The workshops, friendly competitions, and mentorship have made my college experience unforgettable.",
      rating: 5,
      achievement: "Regional Debate Champion"
    },
    {
      name: "Aditya Kulkarni",
      year: "Alumni, Software Engineer",
      content: "Years later, I still use the critical thinking and communication skills I developed at GEC Debate Club. It's an investment in your future!",
      rating: 5,
      achievement: "Tech Lead at Startup"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our <span className="text-yellow-300">Members Say</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Real stories from real people whose lives have been transformed through 
            the power of debate and public speaking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-yellow-300 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-lg text-gray-100 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-purple-200">{testimonial.year}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-medium">
                        {testimonial.achievement}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-lg mb-6">
              Join hundreds of students who have transformed their communication skills and confidence!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.whatsapp.com/your-group-link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                Join Our Community
              </a>
              <a
                href="https://forms.google.com/your-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors font-semibold"
              >
                Apply for FE Rep
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
