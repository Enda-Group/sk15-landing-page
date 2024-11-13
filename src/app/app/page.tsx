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
      <FramerMotion />
      <AnimatesSvg/>
      <CounterZoom/>
  
    </div>
  );
} 