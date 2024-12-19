import React from 'react';
import Navigation from './Navigation';
import Content from './Content';
import CTABanner from './CTABanner';

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Content />
      </main>
      <CTABanner />
    </div>
  );
}

export default About;