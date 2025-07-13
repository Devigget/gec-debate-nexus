
import Layout from '@/components/Layout';
import { Users, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-purple-600">GEC Debate Club</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering voices, fostering critical thinking, and building tomorrow's leaders 
              through the timeless art of debate and public speaking.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To cultivate confident speakers, critical thinkers, and future leaders 
                through structured debate and public speaking opportunities.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Eye className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the premier platform for intellectual discourse and communication 
                excellence at Goa Engineering College.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Respect, integrity, inclusivity, and the pursuit of knowledge 
                through meaningful dialogue and debate.
              </p>
            </div>
          </div>

          {/* Detailed About */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
            <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
              <p>
                The GEC Debate Club stands as a beacon of intellectual excellence at Goa Engineering College, 
                fostering an environment where ideas flourish and voices find their power. Since our establishment, 
                we have been committed to developing the next generation of articulate, thoughtful leaders.
              </p>
              <p>
                Our club serves as more than just a platform for debate - we are a community of learners, 
                thinkers, and aspiring leaders who believe in the transformative power of effective communication. 
                Through structured debates, public speaking workshops, and competitive events, we help our members 
                develop skills that extend far beyond the classroom.
              </p>
              <p>
                From nervous freshers taking their first steps on stage to confident seniors leading national 
                competitions, we witness incredible transformations. Our motto "Work is Worship" reflects our 
                dedication to continuous improvement and the belief that excellence comes through persistent effort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
