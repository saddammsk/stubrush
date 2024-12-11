'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const nav_Links = [
  { name: 'How It Works', url: '/' },
  { name: 'About Us', url: '/' },
  { name: 'Testimonial', url: '/' },
  { name: 'Download The App', url: '/' },
  { name: 'Contact us', url: '/' },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='w-full p-6'>
      <nav className="w-full max-w-[1390px] mx-auto bg-green1 rounded-xl md:p-6 p-4">
        <div className='w-full'>
          <div className="flex items-center justify-between text-white">
            <Link href="/">
              <h3 className="font-poppins text-2xl font-bold">Stub<span className='italic'>Rush</span></h3>
            </Link>

            {/* Mobile Menu Button */}
            <div className=" ml-auto flex items-center justify-center lg:hidden">
              <button onClick={toggleMobileMenu} aria-label="Toggle menu" className="text-white focus:outline-none">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex justify-around gap-[85px]">
              {nav_Links.map((link) => (
                <li key={link.name}>
                  <Link className="lg:text-xl text-sm font-Helvetica hover:text-yellow1" href={link.url}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Button */}
            <Link  href="/list-event">
              <button className="hidden lg:block font-inter text-sm bg-yellow1 h-10 w-[132px] rounded-md">
                List Your Event
              </button>
            </Link>
          </div>

          {/* Mobile Navigation Links */}
          {isMobileMenuOpen && (
            <ul className="flex flex-col items-center absolute w-[calc(100%_-_48px)] left-1/2 -translate-x-1/2 lg:hidden gap-4 bg-green1 p-4">
              {nav_Links.map((link) => (
                <li key={link.name}>
                  <Link className="md:text-xl text-base hover:text-yellow1" href={link.url}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <Link  href="/list-event">
                <button className="font-inter text-sm bg-yellow1 h-10 w-[132px] rounded-md">
                  List Your Event
                </button>
              </Link>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
