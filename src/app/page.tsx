'use client'
import ZoomParallax from "@/components/ZoomParallax";
import "@/styles.css";
import FramerMotion from '../components/hero';
import VisionMission from '../components/VisionMisson';
import Lenis from 'lenis';
import { useEffect } from 'react';
import StickyNavbar from "@/components/StickyNavbar";
import CounterZoom from "@/components/CounterZoom";
import AwardScroll from "@/components/AwardScroll";
import History from "@/components/History";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
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
      <div style={{
        height: '450px',
        
      }}></div>
      <h1 style={{ color:'#721824', fontFamily:'poppins', zIndex:'90000',fontSize:'1.6rem', fontWeight:'600'}}>
        The Home Of</h1>
      <StickyNavbar/>
      
      <ZoomParallax   />
      
      <FramerMotion />
      <div className="p-8">
      </div>
      
      <VisionMission />
      <div className="p-8"> 
         <h1 style={{ color:'#721824', fontFamily:'poppins',fontSize:'2rem', fontWeight:'800'}}>
      The Road <br/> We`ve Travelled</h1>
      </div>
      <History data={[{
        year: '2009',
        description: 'The Siti Khadijah brand was first established at Wisma Zelan in Permaisuri, but it was a temporary location without a permanent store. Later, they moved to the Bangi area near Wong Solo, where they set up an office and boutique.',
        images: ['/images/2009.png']
      }, 
       {
        year: '2012',
        description: 'After a few years of producing garments from home, due to increasing demand and a growing staff, Siti Khadijah had to move to a more suitable premise.',
        images: ['/images/2012.png']
      }, {
        year: '2015',
        description: 'Siti Khadijah held its first international fashion show in London, marking its presence on the global stage.',
        images: ['/images/2015.png']
       },
       {
        year: '2018',
        description: "The first Siti Khadijah billboard was displayed. It became widely recognized and memorable, fulfilling the founder's wish to see it publicly showcased.",
        images: ['/images/2018.png']
      }, {
        year: '2020',
        description: 'Opened a boutique in the prestigious KLCC, further establishing the brand`s presence in high-profile locations.',
        images: ['/images/2020.png']
      },{
        year: '2024',
        description: 'A historic moment was created at the SK factory this year with the grand opening of the vibrant Laman Khadijah. From the opening speeches to the fashion showcase within the SK factory, the event was made even more special by the presence of many esteemed guests and the full support of the SK Team. Let`s create more meaningful moments together in SK`s new home!',
        images: ['/images/2024.png']
      }
      ]}/>

      <CounterZoom/>
      <div>
      <AwardScroll/>
      <Footer/>
      </div>
  
    </div>
  );
} 