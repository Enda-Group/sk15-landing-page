'use client';
import { useRef } from "react";
import styles from '../../app/page.module.scss';
import Picture1 from '../../../public/images/sk15- telekung1.png';
import Picture2 from '../../../public/images/sk15- telekung2.png';
import Picture3 from '../../../public/images/sk15- telekung3.png';

import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import Paragraph from "../Word/Word";

const word = "Our Story";
const paragraph = `It all started when Puan Padzilah Enda Sulaiman, the founder, noticed that women often struggles to find a telekung that fits well and comfortable.
This concern triggered the formation of Siti Khadijah back in 2009 - to ensure that women could opt for a better, more comfortable telekung through innovation as well as to improve user experience during praying activities.`;

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
        { src: Picture1, y: sm },
        { src: Picture2, y: lg },
        { src: Picture3, y: md }
    ];

    return (
        <div style={{
            marginTop: '150vh'
        }}>
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
            <div className={styles.word} style={{fontSize:'2rem',
                 fontFamily:"Poppins",
                 color:"#721824",
                 paddingTop:'15px'}}>
                    <div className="font-bold text-[#721824]">{word}</div>
                </div>
            </div>

            {/* Hero Images Section */}
            <div className={styles.images}>
                {images.map(({ src, y }, i) => (
                    <motion.div style={{ y }} key={`image_${i}`} className={styles.imageContainer}>
                        <Image 
                            src={src}
                            placeholder="blur"
                            alt="image"
                            fill
                            
                        />
                    </motion.div>
                ))}
            </div>

            {/* Text Section Below Hero Images */}
           
        </div> <div className={styles.textSection}>
                <Paragraph paragraph={paragraph} />
            </div></div>
    );
}
