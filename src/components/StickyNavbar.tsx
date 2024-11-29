'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function StickyNavbar() {
  const rect = useRef<HTMLDivElement>(null); // Specify HTMLDivElement type
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (rect.current) {
        const logo = rect.current.getBoundingClientRect();
        setSticky(logo.top < 5); // Adjust threshold as needed
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{top: 0,position: 'sticky', zIndex: 9999, }}>
      <header
        ref={rect}
        className={`top-0 w-[430px] transition-shadow duration-600 ${
          isSticky ? 'bg-[#faf3e0d7]' : 'bg-transparent' }`}
        style={{ zIndex: 600 }}>
        <nav className="flex items-center h-16 px-4 w-[430px]">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/images/logoSK.png"
              alt="logo"
              width={200}
              height={90}
              className="object-contain"
            />
          </div>
        </nav>
      </header>
    </div>
  );
}
