'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import carousel1 from '@public/images/recap/carousel/carousel1.jpeg';
import carousel2 from '@public/images/recap/carousel/carousel2.jpeg';
import carousel3 from '@public/images/recap/carousel/carousel3.jpeg';
import carousel4 from '@public/images/recap/carousel/carousel4.jpeg';
import carousel5 from '@public/images/recap/carousel/carousel5.jpeg';
import carousel6 from '@public/images/recap/carousel/carousel6.jpeg';
import carousel7 from '@public/images/recap/carousel/carousel7.jpeg';
import carousel8 from '@public/images/recap/carousel/carousel8.jpeg';
import carousel9 from '@public/images/recap/carousel/carousel9.jpeg';

interface ImageCardProps {
  children: React.ReactNode;
}

function ImageCard({ children }: ImageCardProps) {
  return <div className="h-full w-full rounded-xl">{children}</div>;
}

const images = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
  carousel7,
  carousel8,
  carousel9,
];

export default function RecapCarousel() {
  const [position, setPosition] = useState(2);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 5000); // Increased to 5 seconds for slower rotation

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      setPosition((prev) => (prev >= 5 ? 1 : prev + 1));
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      setPosition((prev) => (prev <= 1 ? 5 : prev - 1));
    }
  };

  return (
    <div className="flex h-[350px] w-full flex-col items-center justify-center gap-4">
      <div
        className="relative flex h-full w-full items-start justify-center overflow-hidden md:w-5/6"
        style={{ perspective: '1000px' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => {
          const offset = index + 1;
          const r = position - offset;
          const absR = Math.max(Math.abs(r), r);
          const zIndex = position - absR;

          return (
            <motion.div
              key={index}
              className="absolute aspect-video h-full w-full max-w-[90%] border-[#9EE7E5] md:rounded-[35px] md:border-4"
              animate={{
                rotateY: -20 * r,
                x: -250 * r,
                zIndex,
                scale: r === 0 ? 1 : 0.8,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <ImageCard>
                <Image
                  src={image}
                  alt="carousel"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '30px' }}
                />
              </ImageCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
