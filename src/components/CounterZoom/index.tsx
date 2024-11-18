import styles from './styles.module.scss';
import Picture1 from '../../../public/images/SK151.jpg';
import Picture2 from '../../../public/images/SK152.jpg';
import Picture3 from '../../../public/images/SK153.jpg';

import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import RandomCountUpCounter from '../RandomCountUpCounter';

export default function CounterZoom() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 2]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    
    // Add opacity for text when Picture 1 is fully zoomed in
    const textOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {pictures.map(({ src, scale }, index) => (
                    <motion.div key={index} style={{ scale }} className={styles.el}>
                        <div className={styles.imageContainer}>
                        <Image
    src={src}
    fill
    alt="image"
    placeholder='blur'
    style={{ objectFit: 'cover' }} // Ensure the image covers the container
/>
{index === 0 && (
    <motion.div style={{ opacity: textOpacity }} className={styles.textOverlay}>
        <div>
        <RandomCountUpCounter/>
        </div>
    </motion.div>
)}

                        </div>
                    </motion.div>
                ))}
            </div>
            
        </div>
    );
}
