'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles.module.scss';
import Monogram from '../../../public/images/monogramGold.svg';
import Image from 'next/image';

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // Reverse the scaling to go from big to small
  const scale4 = useTransform(scrollYProgress, [0, 1], [5, 0.3]);

  // Create a dynamic blur transform
  const blurAmount = useTransform(scrollYProgress, [0, 1], ['blur(10px)', 'blur(0px)']);

  // Add rotation in 3D
  const rotateY = useTransform(scrollYProgress, [0.7, 1], [0, 35]);
  const rotateX = useTransform(scrollYProgress, [0.7, 1], [0, 10]);

  return (
    <div className="top-0 absolute overflow-x-clip h-[2000px]">
      <div ref={container} className={styles.container} >
        <div className={styles.sticky}>
          <motion.div
            style={{
              scale: scale4,
              filter: blurAmount,
              rotateY,
              rotateX,
            }}
            className={`${styles.el} ${styles.monogramContainer}`}
          >
             <Image
              src="/images/monogramGold.png" // Path to your PNG image
              width={400} // Adjust as needed
              height={400} // Adjust as needed
              alt="Monogram Gold"
              style={{
                width: '400px',
                height: '400px',
                objectFit: 'contain', // Ensures the aspect ratio is preserved
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* HQ Image */}
      <Image
        style={{
          position: 'relative',
          top: '-690px',
          left: '85px',
          zIndex: -999,
          transform: 'scale(3.5)',
          width: '430px',
          filter: 'drop-shadow(4px 4px 10px #721824, 0.25)', // Adjust as needed
        }}
        src="/images/HQ-bg-remove.png"
        width={8000}
        height={8000}
        alt="hq"
      />
    </div>
  );
}
