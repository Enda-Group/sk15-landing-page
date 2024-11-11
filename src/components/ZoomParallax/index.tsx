'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles.module.scss';
import Picture1 from '../../../public/images/monogrammaroon.png';

import Image from 'next/image';


export default function Index() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });


    // Reverse the scaling to go from big to small
    const scale4 = useTransform(scrollYProgress, [0, 1], [5, 0.6]);

    // Create a dynamic blur transform
    const blurAmount = useTransform(scrollYProgress, [0, 1], ["blur(5px)", "blur(0px)"]);

    // Add rotation in 3D
    const rotateY = useTransform(scrollYProgress, [0.7, 1], [0, 45]);
    const rotateX = useTransform(scrollYProgress, [0.7, 1], [0, -5]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4,
        }
    ];

    return (
    
      
<div className='overflow-x-clip' >
<div ref={container} className={styles.container}>
    <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => (
            <motion.div 
                key={index} 
                style={{scale, filter: blurAmount, rotateY, rotateX }} 
                className={`${styles.el} ${styles.monogramContainer}`}
            >
                <div className={styles.imageContainer}>
                    {/*monogram*/} 
                    <Image
                        src={src}
                        fill
                        alt="monogram"
                        placeholder="blur"
                        className='rounded-lg'
                        
                    />
                </div>
            </motion.div>
        ))}
    </div>
   
</div>{/*HQ*/}  
<Image 
    style={{ 
        position: "relative", 
        top: "-380px", 
        zIndex: -999, 
        transform: "scale(3.5)" // Adjust the scale factor as needed
    }} 
    src='/images/HQ.svg' 
    width={8000} // Reduced width to create a zoomed-in effect
    height={8000} // Reduced height to match the scale
    alt='hq'
    
/>
</div>

      
    );
}

