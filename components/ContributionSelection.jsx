'use client';

import { useState } from 'react';
import Link from 'next/link';

const ContributionSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 'existing',
      title: 'Contribute to Existing Projects',
      description: 'Join our community of contributors and help improve open-source projects. Share your skills and make a difference.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      ),
      formLink: 'https://your-google-form-link-1',
      terminal: '$ git clone project\n$ cd project\n$ git checkout -b feature'
    },
    {
      id: 'new',
      title: 'Submit Your Project',
      description: 'Have an innovative project? Share it with our community and get contributors to help you build something amazing.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      formLink: 'https://your-google-form-link-2',
      terminal: '$ mkdir new-project\n$ cd new-project\n$ git init'
    }
  ];

  return (
    <div className="w-full relative">
      {/* Ubuntu orange borders */}
      <div className="w-full h-[2px] bg-[#E95420] absolute top-0 z-10" />
      <div className="w-full h-[2px] bg-[#E95420] absolute bottom-0 z-10" />

      <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="bg-black/80 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-[#E95420]/30 mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono text-[#E95420] text-center font-bold">
            Get Involved
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#E95420]/20 to-[#E95420]/0 rounded-lg transform 
                transition-all duration-300 group-hover:scale-105 group-hover:from-[#E95420]/30" />
              
              <div className="relative bg-black/80 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-[#E95420]/30 
                transform transition-all duration-300 hover:border-[#E95420]">
                <div className="flex flex-col h-full">
                  <div className="text-[#E95420] mb-6">{card.icon}</div>
                  
                  <h3 className="text-2xl font-mono text-[#E95420] mb-4">{card.title}</h3>
                  <p className="text-white/80 mb-6">{card.description}</p>

                  {/* Terminal Effect */}
                  <div className="bg-black/90 backdrop-blur-md rounded-lg p-4 mb-6 font-mono text-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56] mr-2" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] mr-2" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    <pre className="text-white/70">
                      {card.terminal}
                    </pre>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={card.formLink}
                      className="inline-flex items-center justify-center w-full px-6 py-3 
                        bg-[#E95420] text-white font-mono rounded-lg transform transition-all duration-300 
                        hover:bg-[#E95420]/90 hover:scale-[1.02] focus:outline-none focus:ring-2 
                        focus:ring-[#E95420] focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Get Started
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributionSection;
