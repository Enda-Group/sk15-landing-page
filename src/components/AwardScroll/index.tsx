import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles.module.scss';

export default function AwardScroll() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    // Define horizontal transform effects for each row (different speeds and directions)
    const translateRow1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const translateRow2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const translateRow3 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    const awards = [
        "Malaysia Franchise Awards 2024",
        "Sunway Mall Retail Awards 2024",
        "Anugerah Usahawan Gempak SIDEC 2023",
        "MINDA Awards 2023 (Compassionate Faith Apparel)",
        "Anugerah Jenama Terbaik 2021/2022",
        "Best Regional Enterprise Award by Europe Business Assembly",
        "Mid-Tier Companies (MTCs) CEO Summit 2021",
        "Top Brand (Bronze) for 'Apparel & Accessories' Category by 4A's Malaysia",
        "Best Marketer in Retail & promotions Marketing",
        "Women Entrepreneur Award by SME Corp Malaysia"
    ];

    return (
        <div ref={containerRef} className={styles.container}>
            <motion.div className={styles.row} style={{ x: translateRow1 }}>
                {awards.slice(0, 3).map((award, index) => (
                    <motion.h2 key={index} className={styles.awardText}>
                        {award}
                    </motion.h2>
                ))}
            </motion.div>

            <motion.div className={styles.row} style={{ x: translateRow2 }}>
                {awards.slice(3, 7).map((award, index) => (
                    <motion.h2 key={index} className={styles.awardText}>
                        {award}
                    </motion.h2>
                ))}
            </motion.div>

            <motion.div className={styles.row} style={{ x: translateRow3 }}>
                {awards.slice(7).map((award, index) => (
                    <motion.h2 key={index} className={styles.awardText}>
                        {award}
                    </motion.h2>
                ))}
            </motion.div>
        </div>
    );
}
