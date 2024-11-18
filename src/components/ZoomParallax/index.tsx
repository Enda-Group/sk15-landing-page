'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles.module.scss';
import Monogram from '../../../public/images/monogramGold.svg';
import Image from 'next/image';


export default function Index() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });


    // Reverse the scaling to go from big to small
    const scale4 = useTransform(scrollYProgress, [0, 1], [5, 0.3]);

    // Create a dynamic blur transform
    const blurAmount = useTransform(scrollYProgress, [0, 1], ["blur(10px)", "blur(0px)"]);

    // Add rotation in 3D
    const rotateY = useTransform(scrollYProgress, [0.7, 1], [0, 35]);
    const rotateX = useTransform(scrollYProgress, [0.7, 1], [0, 10]);

    const pictures = [
        {
            src: Monogram,
            scale: scale4,
        }
    ];

    return (
    
      
<div className='overflow-x-clip h-[200vh]' >
<div ref={container} className={styles.container}>
    <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => (
            <motion.div 
                key={index} 
                style={{scale:scale4, filter: blurAmount, rotateY, rotateX }} 
                className={`${styles.el} ${styles.monogramContainer}`}
            >
                <Monogram style={{ filter: 'drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))' }} />
            </motion.div>
        ))}
    </div>
   
</div>{/*HQ*/}  
<Image 
    style={{ 
        position: "relative", 
        top: "-660px", 
        left:"8.7vh",
        zIndex: -999, 
        transform: "scale(3.5)",
        filter: 'drop-shadow(4px 4px 10px #721824, 0.25)' // Adjust the scale factor as needed
    }} 
    src='/images/HQ-bg-remove.png' 
    width={8000} // Reduced width to create a zoomed-in effect
    height={8000} // Reduced height to match the scale
    alt='hq'
    
/>
</div>

      
    );
}

