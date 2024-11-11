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
      className={`fixed top-0 w-full z-999 transition-shadow duration-300 ${
        isSticky ? ' bg-white' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-center items-center p-4 max-w-screen-lg mx-auto">
        <div className="flex items-center space-x-2">
          {title && (
            <div className="flex justify-center items-center">
              <Image src="/images/logoSK.png" alt="logo" width={50} height={50} />
              <span className="ml-2 text-xl font-bold text-gray-800">Siti Khadijah</span>
            </div>
          )}
        </div>
        <ul className="flex justify-center space-x-6">
          <li>
          <Image src='/images/logoSK.png' alt='logo' width={300} height={90} />
          </li>
       
        </ul>
      </nav>
    </header>
  );
}
