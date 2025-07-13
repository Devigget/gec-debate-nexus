
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturedEvents from '@/components/FeaturedEvents';
import CouncilPreview from '@/components/CouncilPreview';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsUpdates from '@/components/NewsUpdates';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedEvents />
      <CouncilPreview />
      <TestimonialsSection />
      <NewsUpdates />
      <CallToAction />
    </Layout>
  );
};

export default Index;
