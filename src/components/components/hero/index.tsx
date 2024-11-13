'use client';
import { useRef } from "react";
import styles from '../../app/page.module.scss';
import Picture1 from '../../../public/images/telekung.png';
import Picture2 from '../../../public/images/telekung2.png';
import Picture3 from '../../../public/images/telekung3.png';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import Paragraph from "../Word/Word";

const word = "Our Story";
const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

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
                <div className={styles.word}>
                    <p>{word}</p>
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
