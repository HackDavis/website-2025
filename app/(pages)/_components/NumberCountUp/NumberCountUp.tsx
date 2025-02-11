'use client';

import { useState, useEffect, useRef } from 'react';

interface NumberCountUpProps {
  endValue: number;
  startValue?: number;
  duration: number;
  className?: string;
}

export default function NumberCountUp({
  endValue,
  startValue = 0,
  duration,
  className,
}: NumberCountUpProps) {
  const [value, setValue] = useState(startValue);
  const timeStampRef = useRef(-1);
  const elemRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const countUp = (timestamp: number) => {
      if (value !== endValue) {
        const progress = Math.min(
          (timestamp - timeStampRef.current) / duration,
          1.0
        );

        setValue(Math.ceil((endValue - startValue) * progress + startValue));
        requestAnimationFrame(countUp);
      }
    };

    const isNumberInView = () => {
      if (!elemRef.current) return false;
      const elemTop =
        elemRef.current.getBoundingClientRect().top - window.innerHeight;
      return elemTop < -window.innerHeight * 0.3 && timeStampRef.current === -1;
    };

    const handleScroll = () => {
      if (!elemRef.current) return;

      if (isNumberInView()) {
        timeStampRef.current = document.timeline.currentTime as number;
        window.removeEventListener('scroll', handleScroll);
        requestAnimationFrame(countUp);
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    if (isNumberInView()) {
      timeStampRef.current = document.timeline.currentTime as number;
      requestAnimationFrame(countUp);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [duration, endValue, startValue, value]);

  return (
    <span ref={elemRef} className={className}>
      {value}
    </span>
  );
}
