'use client'
import { Navbar } from "@/components/Navbar";
import ZoomParallax from "@/components/ZoomParallax";
import Image from "next/image";
import "@/styles.css";
import FramerMotion from '../components/hero';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import StickyNavbar from "@/components/StickyNavbar";
import History from "@/components/History";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) { // Explicitly typing 'time' as a number
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="App">
      <StickyNavbar/>
      <ZoomParallax   />
      <FramerMotion />
      <History data={[{
        year: '2009',
        description: 'We started our journey',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']
      }, {
        year: '2010',
        description: 'We started our journey',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']
      }, {
        year: '2012',
        description: 'We started our journey',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']
      }, {
        year: '2015',
        description: 'We started our journey',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']
      }, {
        year: '2016',
        description: 'We started our journey',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']
      }, {
        year: '2018',
        description: 'We started our journey',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']
      }, {
        year: '2020',
        description: 'We started our journey',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']
      }, {
        year: '2025',
        description: 'We started our journey',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']
      }]}/>

    </div>
  );
}
