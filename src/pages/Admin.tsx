
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Plus, Edit, Trash, Save, User, Calendar, Trophy, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('events');

  return (
    <Layout>
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Admin <span className="text-purple-600">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-600">
              Manage club content, events, members, and updates
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="events" className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Events
              </TabsTrigger>
              <TabsTrigger value="members" className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Members
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center">
                <Trophy className="h-4 w-4 mr-2" />
                Achievements
              </TabsTrigger>
              <TabsTrigger value="news" className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                News
              </TabsTrigger>
            </TabsList>

            <TabsContent value="events">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Manage Events</CardTitle>
                      <CardDescription>Add, edit, or remove upcoming events</CardDescription>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Event
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Event Title" />
                      <Input type="date" placeholder="Event Date" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Event Time" />
                      <Input placeholder="Venue" />
                    </div>
                    <Textarea placeholder="Event Description" rows={4} />
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save Event
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="members">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Manage Members</CardTitle>
                      <CardDescription>Add, edit, or remove council members</CardDescription>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Member
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Member Name" />
                      <Input placeholder="Position" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Year/Branch" />
                      <Input placeholder="Contact" />
                    </div>
                    <Textarea placeholder="About/Quote" rows={3} />
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save Member
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Manage Achievements</CardTitle>
                      <CardDescription>Add, edit, or remove club achievements and prizes</CardDescription>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Achievement
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Achievement Title" />
                      <Input placeholder="Competition/Event Name" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Input placeholder="Position/Prize" />
                      <Input type="date" placeholder="Date" />
                      <Input placeholder="Student Name" />
                    </div>
                    <Textarea placeholder="Achievement Description" rows={3} />
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save Achievement
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="news">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Manage News & Updates</CardTitle>
                      <CardDescription>Add, edit, or remove news and announcements</CardDescription>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add News
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <Input placeholder="News Title" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <select className="px-3 py-2 border rounded-md">
                        <option>Select Category</option>
                        <option>Achievement</option>
                        <option>Event</option>
                        <option>Workshop</option>
                        <option>Recruitment</option>
                      </select>
                      <select className="px-3 py-2 border rounded-md">
                        <option>Select Priority</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                    <Textarea placeholder="News Content" rows={5} />
                    <Input placeholder="External Link (optional)" />
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Save className="h-4 w-4 mr-2" />
                      Publish News
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
