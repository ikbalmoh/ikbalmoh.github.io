import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Header from '../components/header';
import Hero from '../components/hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from '../components/about';

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="min-h-screen pb-32">
      <Header />
      <Hero />
      <About />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Ikbal Mohamad Hikmat</title>;
