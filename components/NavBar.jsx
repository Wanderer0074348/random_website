'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks = [
    { title: "About", path: "/about" },
    { title: "Events", path: "/events" }
  ];

  const rightNavLinks = [
    { title: "Join", path: "/join" },
    { title: "Contact", path: "/contact" }
  ];

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4'}`}>
      <div className="w-full flex justify-center px-4">
        <nav className={`w-full max-w-8xl bg-black rounded-lg relative overflow-hidden
          shadow-[0_0_15px_rgba(233,84,32,0.15)] 
          hover:shadow-[0_0_20px_rgba(233,84,32,0.25)] transition-all duration-300 
          border border-zinc-800 hover:border-[#E95420]/30
          ${scrolled ? 'py-3' : 'py-4'}`}>
          
          {/* Background shapes */}
          <div className="hidden md:block">
            {/* Left orange shape */}
            <div className="absolute left-0 top-0 h-full w-[300px] bg-[#E95420] 
              transform -skew-x-[30deg] -translate-x-10" />
            
            {/* Right orange shape */}
            <div className="absolute right-0 top-0 h-full w-[300px] bg-[#E95420] 
              transform -skew-x-[30deg] translate-x-10" />
          </div>

          <div className="relative px-4 sm:px-6 lg:px-8 z-10">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between h-16">
              {/* Left Links */}
              <div className="flex items-center space-x-8 w-1/3 justify-start pl-8">
                {leftNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.path}
                    className="font-mono text-base text-white hover:text-black 
                      transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              {/* Centered Logo */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Link href="/" className="block">
                  <Image
                    src="/Lunux.ico"
                    alt="LUG Logo"
                    width={70}
                    height={70}
                    priority
                    className="rounded-full"
                  />
                </Link>
              </div>

              {/* Right Links */}
              <div className="flex items-center space-x-8 w-1/3 justify-end pr-8">
                {rightNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.path}
                    className="font-mono text-base text-white hover:text-black 
                      transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex justify-between items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white/80 hover:text-[#E95420]"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Mobile Logo */}
              <Link href="/" className="block">
                <Image
                  src="/Lunux.ico"
                  alt="LUG Logo"
                  width={48}
                  height={48}
                  priority
                  className="rounded-full"
                />
              </Link>
              <div className="w-8" />
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden mt-2">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {[...leftNavLinks, ...rightNavLinks].map((link) => (
                    <Link
                      key={link.title}
                      href={link.path}
                      className="block font-mono text-white hover:text-[#E95420] py-2 
                        text-sm border-b border-zinc-800 last:border-none"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
