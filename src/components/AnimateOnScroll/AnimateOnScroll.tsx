'use client';
import { useRef } from "react";
import styles from '../../app/page.module.scss';
import Picture1 from '../../../public/images/telekung.png';
import Picture2 from '../../../public/images/telekung2.png';
import Picture3 from '../../../public/images/telekung3.png';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';

const word = "with framer-motion";

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
        {
            src: Picture1,
            y: 0
        },
        {
            src: Picture2,
            y: lg
        },
        {
            src: Picture3,
            y: md
        }
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
                <motion.h1 style={{y: sm}}>Parallax</motion.h1>
                <h1>Scroll</h1>
               
            </div>
            <div className={styles.images}>
                {
                    images.map( ({src, y}, i) => {
                        return <motion.div style={{y}} key={`i_${i}`} className={styles.imageContainer}>
                            <Image 
                                src={src}
                                placeholder="blur"
                                alt="image"
                                height={150} // Set custom height
                                width={100}
                            />
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}