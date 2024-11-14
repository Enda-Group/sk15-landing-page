'use client'
import { Navbar } from "@/components/Navbar";
import ZoomParallax from "@/components/ZoomParallax";
import Image from "next/image";
import "@/styles.css";
import FramerMotion from '../components/hero';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import StickyNavbar from "@/components/StickyNavbar";
import AnimatesSvg from "@/components/AnimatesSvg";
import Index from "@/components/ZoomParallax";
import CounterZoom from "@/components/CounterZoom";
import AwardScroll from "@/components/AwardScroll";
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
      <div className="p-8">
      </div>
      
      <FramerMotion />
      <div className="p-8">
      </div>
      <History data={[{
        year: '2009',
        description: 'The Siti Khadijah brand was first established at Wisma Zelan in Permaisuri, but it was a temporary location without a permanent store. Later, they moved to the Bangi area near Wong Solo, where they set up an office and boutique.',
        images: ['/images/2009-1.png', 
          '/images/2009-2.png', 
          '/images/2009-3.png']
      }, {
        year: '2010',
        description: 'We started our journey',
        images: ['https://via.placeholder.com/150', 
          'https://via.placeholder.com/150', 
          'https://via.placeholder.com/150']
      }, {
        year: '2012',
        description: 'After a few years of producing garments from home, due to increasing demand and a growing staff, Siti Khadijah had to move to a more suitable premise.',
        images: ['https://via.placeholder.com/150', 
          'https://via.placeholder.com/150', 
          'https://via.placeholder.com/150']
      }, {
        year: '2015',
        description: 'Siti Khadijah held its first international fashion show in London, marking its presence on the global stage.',
        images: ['https://via.placeholder.com/150', 
          'https://via.placeholder.com/150', 
          'https://via.placeholder.com/150']
      }, {
        year: '2016',
        description: 'We started our journey',
        images: ['https://via.placeholder.com/150', 
          'https://via.placeholder.com/150', 
          'https://via.placeholder.com/150']
      }, {
        year: '2018',
        description: "The first Siti Khadijah billboard was displayed. It became widely recognized and memorable, fulfilling the founder's wish to see it publicly showcased.",
        images: ['https://via.placeholder.com/150', 
          'https://via.placeholder.com/150', 
          'https://via.placeholder.com/150']
      }, {
        year: '2020',
        description: 'Opened a boutique in the prestigious KLCC, further establishing the brand’s presence in high-profile locations.',
        images: ['https://via.placeholder.com/150', 
          'https://via.placeholder.com/150', 
          'https://via.placeholder.com/150']
      }, {
        year: '2025',
        description: 'We started our journey',
        images: ['https://via.placeholder.com/150', 
          'https://via.placeholder.com/150', 
          'https://via.placeholder.com/150']
      }]}/>

      <CounterZoom/>
      <div>
      <AwardScroll/></div>
  
    </div>
  );
} 