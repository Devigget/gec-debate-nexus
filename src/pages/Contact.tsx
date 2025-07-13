
import Layout from '@/components/Layout';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="text-purple-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? Want to join us? Looking for collaboration opportunities? 
              We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-600">
                    <Mail className="h-6 w-6 mr-2" />
                    Email Us
                  </CardTitle>
                  <CardDescription>
                    Get in touch via email for detailed inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="mailto:debate@gec.ac.in" className="text-lg font-medium text-gray-900 hover:text-purple-600">
                    debate@gec.ac.in
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-600">
                    <Phone className="h-6 w-6 mr-2" />
                    Call Us
                  </CardTitle>
                  <CardDescription>
                    Speak directly with our team members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-gray-900">+91 98765 43210</p>
                  <p className="text-sm text-gray-600 mt-1">President: Arjun Sharma</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-600">
                    <MapPin className="h-6 w-6 mr-2" />
                    Visit Us
                  </CardTitle>
                  <CardDescription>
                    Find us on campus
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-gray-900">Student Activity Center</p>
                  <p className="text-gray-600">Goa Engineering College</p>
                  <p className="text-gray-600">Farmagudi, Ponda, Goa 403401</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-600">
                    <Clock className="h-6 w-6 mr-2" />
                    Office Hours
                  </CardTitle>
                  <CardDescription>
                    When you can find us
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><span className="font-medium">Monday - Friday:</span> 4:00 PM - 6:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 10:00 AM - 12:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2" />
                  Join Our WhatsApp Community
                </h3>
                <p className="mb-4 text-green-100">
                  Get instant updates, join discussions, and connect with fellow debaters!
                </p>
                <a
                  href="https://chat.whatsapp.com/your-group-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white text-green-600 hover:bg-gray-100">
                    Join WhatsApp Group →
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input placeholder="What's this about?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..." 
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
