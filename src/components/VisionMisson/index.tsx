'use client';
import { useRef } from "react";
import styles from '../../app/page.module.scss';
import Picture1 from '../../../public/images/VM1.png';
import Picture2 from '../../../public/images/VM2.png';
import Picture3 from '../../../public/images/VM3.png';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import Paragraph from "../Word/Word";

const word = "Vision and Mission";
const paragraph1 = `To be the preferred international brand that advocates comfort, practicality and modesty in its lifestyle products`;
const paragraph2 = `Expressing love based on Lambang Cinta Abadi elements through creating thoughtful product and cherish meaningful relationship`;

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
        <div>
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
            <div className={styles.word} style={{fontSize:'2rem',
                 fontFamily:"Poppins",
                 color:"#721824", marginBottom:'30px'}}>
                    <div className="font-bold text-[#721824]">{word}</div>
                </div>
            </div>

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

           
        </div> <div className={styles.textSection}>
    
            <div className="text-gray-700 font-poppins font-semibold  text-[1.5rem]"> Vision</div>
                <Paragraph  paragraph={paragraph1} />
            </div>
            <div className={styles.textSection}>
       
            <div className="text-gray-700 font-poppins font-semibold  text-[1.5rem]">Mission</div>
                <Paragraph  paragraph={paragraph2} />
            </div>
            </div>
    );
}
