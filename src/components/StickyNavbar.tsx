'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function StickyNavbar() {
  const [isSticky, setSticky] = useState(false);
  const [logoSize, setLogoSize] = useState(1); // Track logo size

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
      // Calculate the logo scale based on scroll position
      const scale = Math.max(0.7, 1 - window.scrollY / 600); // Adjust the 600 for faster/slower shrinking
      setLogoSize(scale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Centered Logo Before Scroll */}
      {!isSticky && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
          <Image
            src="/images/logoSK.png"
            alt="logo"
            width={200}
            height={90}
            className="object-contain"
            style={{ transform: `scale(${logoSize})`, transition: 'transform 0.3s ease' }} // Apply scaling here
          />
        </div>
      )}

      {/* Sticky Navbar */}
      <header
        className={`fixed top-0 w-[430px] transition-transform duration-500 flex justify-center items-center ${
          isSticky ? 'backdrop-blur-md' : ''
        }`}
        style={{
          zIndex: 100,
          backgroundColor: isSticky ? 'rgba(250, 243, 224, 0.5) backdrop-blur-md' : 'transparent',
        }}
      >
        <nav className="flex items-center justify-center h-16">
          <Image
            src="/images/logoSK.png"
            alt="logo"
            width={200}
            height={90}
            className={`object-contain ${isSticky ? 'transition-all duration-300 flex justify-center items-center' : 'opacity-0'}`}
            style={{
              transform: `scale(${logoSize})`, // Apply scaling here
              transition: 'transform 0.3s ease', // Smooth transition
            }}
          />
        </nav>
      </header>
    </div>
  );
}
