import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Header from '../components/header';
import Hero from '../components/hero';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="bg-white min-h-screen scroll-smooth bg-gradient-to-t from-indigo-50 to-white">
      <Header />
      <Hero />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Ikbal Mohamad Hikmat</title>;
