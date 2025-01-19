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

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" }
  ];

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4'}`}>
      <div className="w-full flex justify-center px-4">
        <nav className={`w-full max-w-8xl bg-black rounded-lg relative overflow-hidden
          shadow-[0_0_15px_rgba(233,84,32,0.15)] 
          hover:shadow-[0_0_20px_rgba(233,84,32,0.25)] transition-all duration-300 
          border border-zinc-800 hover:border-[#E95420]/30
          ${scrolled ? 'py-2' : 'py-4'}`}>
          
{/* Background parallelograms - hidden on mobile */}
<div className="hidden md:block">
  {/* Left parallelogram */}
  <div className="absolute left-0 top-0 h-full w-[250px] bg-[#E95420]/90 
    transform skew-x-[30deg] -translate-x-8" />
  
  {/* Right parallelogram */}
  <div className="absolute right-0 top-0 h-full w-[250px] bg-[#E95420]/90 
    transform skew-x-[30deg] translate-x-8" />
    
{/* Concentric circles in middle */}
<div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <div className="absolute w-[240px] h-[240px] border-4 border-[#E95420]/20 rounded-full 
    -translate-x-[120px] -translate-y-[120px]" />
  <div className="absolute w-[180px] h-[180px] border-4 border-[#E95420]/30 rounded-full 
    -translate-x-[90px] -translate-y-[90px]" />
  <div className="absolute w-[120px] h-[120px] border-4 border-[#E95420]/50 rounded-full 
    -translate-x-[60px] -translate-y-[60px]" />
  <div className="absolute w-[60px] h-[60px] border-4 border-[#E95420]/70 rounded-full 
    -translate-x-[30px] -translate-y-[30px]" />
</div>

</div>

          <div className="relative px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="font-mono text-lg sm:text-xl font-bold text-[#E95420] hover:text-[#E95420]/80 
                    transition-colors duration-300">
                    <Image
                      src="/Lunux.ico"
                      alt="LUG Logo"
                      width={64}
                      height={64}
                      priority
                    />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-4 lg:space-x-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.path}
                      className="font-mono text-sm lg:text-base text-white/80 hover:text-black relative 
                        after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black 
                        after:left-0 after:-bottom-1 after:transition-all after:duration-300 
                        hover:after:w-full"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white/80 
                    hover:text-[#E95420] focus:outline-none transition-colors duration-300"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
              <div className="md:hidden mt-2">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.path}
                      className="block font-mono text-white/80 hover:text-[#E95420] py-2 
                        transition-colors duration-300 text-sm border-b border-zinc-800 
                        last:border-none"
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
