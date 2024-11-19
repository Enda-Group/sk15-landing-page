// src/components/AwardScroll/index.tsx
import { motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles.module.scss';

export default function AwardScroll() {
    const containerRef = useRef(null);

    // Awards data separated by row
    const row1Awards = [
        "Malaysia Franchise Awards 2024",
        "Sunway Mall Retail Awards 2024",
        "Anugerah Usahawan Gempak SIDEC 2023",
        "MINDA Awards 2023 (Compassionate Faith Apparel)"
    ];

    const row2Awards = [
        "Anugerah Jenama Terbaik 2021/2022",
        "Best Regional Enterprise Award by Europe Business Assembly",
        "Mid-Tier Companies (MTCs) CEO Summit 2021"
    ];

    const row3Awards = [
        "Top Brand (Bronze) for 'Apparel & Accessories' Category by 4A's Malaysia",
        "Best Marketer in Retail & promotions Marketing",
        "Women Entrepreneur Award by SME Corp Malaysia"
    ];

    // Duplicate arrays for seamless looping
    const loopedRow1 = [...row1Awards, ...row1Awards];
    const loopedRow2 = [...row2Awards, ...row2Awards];
    const loopedRow3 = [...row3Awards, ...row3Awards];

    // Define unique scroll animations for each row
    const scrollAnimationRow1 = {
        x: [-1000, 0],
        transition: {
            repeat: Infinity,
            repeatType: "loop" as const,
            duration: 15,
            ease: "linear"
        }
    };

    const scrollAnimationRow2 = {
        x: [0, -1000],
        transition: {
            repeat: Infinity,
            repeatType: "loop" as const,
            duration: 20,
            ease: "linear"
        }
    };

    const scrollAnimationRow3 = {
        x: [-1000, 0],
        transition: {
            repeat: Infinity,
            repeatType: "loop" as const,
            duration: 15,
            ease: "linear"
        }
    };
    const scrollAnimationRow4 = {
        x: [0, -1000],
        transition: {
            repeat: Infinity,
            repeatType: "loop" as const,
            duration: 20,
            ease: "linear"
        }
    };

    const scrollAnimationRow5 = {
        x: [-1000, 0],
        transition: {
            repeat: Infinity,
            repeatType: "loop" as const,
            duration: 15,
            ease: "linear"
        }
    };


    return (<div>
        <div className='text-[#721824] text-[1.5rem] mb-8 font-poppins'> We've won a few things </div>
        <div ref={containerRef} className={styles.container}>
            {/* Row 1 */}
            <motion.div className={styles.row} animate={scrollAnimationRow1}>
                {loopedRow1.map((award, index) => (
                    <motion.h2 key={`row1-${index}`} className={styles.awardText}>
                        {award}
                    </motion.h2>
                ))}
            </motion.div>

            {/* Row 2 */}
            <motion.div className={styles.row} animate={scrollAnimationRow2}>
                {loopedRow2.map((award, index) => (
                    <motion.h2 key={`row2-${index}`} className={styles.awardText}>
                        {award}
                    </motion.h2>
                ))}
            </motion.div>

            {/* Row 3 */}
            <motion.div className={styles.row} animate={scrollAnimationRow3}>
                {loopedRow3.map((award, index) => (
                    <motion.h2 key={`row3-${index}`} className={styles.awardText}>
                        {award}
                    </motion.h2>
                ))}
            </motion.div>
            <motion.div className={styles.row} animate={scrollAnimationRow4}>
                {loopedRow1.map((award, index) => (
                    <motion.h2 key={`row1-${index}`} className={styles.awardText}>
                        {award}
                    </motion.h2>
                ))}
            </motion.div>

            {/* Row 2 */}
            <motion.div className={styles.row} animate={scrollAnimationRow5}>
                {loopedRow2.map((award, index) => (
                    <motion.h2 key={`row2-${index}`} className={styles.awardText}>
                        {award}
                    </motion.h2>
                ))}
            </motion.div>
        </div></div>
    );
}
