'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface NavbarProps {
  title?: string | JSX.Element;
}

export default function StickyNavbar({ title }: NavbarProps) {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-[430px] transition-shadow duration-600 ${
        isSticky ? 'bg-[#FAF3E0]' : 'bg-transparent'
      }`} style={{zIndex:600}}
    >
      <nav className="flex items-center h-16 px-4">
        {/* Centering the logo */}
        <div className="flex items-center justify-center w-full">
          <Image src="/images/logoSK.png" alt="logo" width={200} height={90} className="object-contain" />
        </div>
      </nav>
    </header>
  );
}
