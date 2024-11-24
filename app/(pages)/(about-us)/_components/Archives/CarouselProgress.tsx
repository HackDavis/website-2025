'use client';
import { useRef, useEffect } from 'react';
import { useCarouselContext } from '@pages/(about-us)/_hooks/useCarouselContext';
import styles from './CarouselProgress.module.scss';

export default function CarouselProgress() {
  const isDragging = useRef(false);
  const dragStart = useRef(0);
  const dragStartScroll = useRef(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const { windowWidth, scroll, contentWidth, windowRef } = useCarouselContext();

  const handleStyles = {
    width: `${(windowWidth / contentWidth) * 100}%`,
    left: `${(scroll / contentWidth) * 100}%`,
  };

  const startDrag = (event: React.MouseEvent | React.TouchEvent) => {
    if ('touches' in event && event.touches.length !== 1) return;
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'pointer';
    const e = 'touches' in event ? event.touches[0] : event;
    isDragging.current = true;
    dragStart.current = e.clientX;
    dragStartScroll.current = scroll;
  };

  const stopDrag = () => {
    document.body.style.userSelect = 'auto';
    document.body.style.cursor = 'auto';
    isDragging.current = false;
    dragStart.current = 0;
    dragStartScroll.current = 0;
  };

  const handleMove = (event: MouseEvent | TouchEvent) => {
    event.preventDefault();
    if (!isDragging.current || !windowRef.current || !progressRef.current)
      return;
    if ('touches' in event && event.touches.length !== 1) return;

    const e = 'touches' in event ? event.touches[0] : event;
    windowRef.current?.scrollTo({
      left:
        dragStartScroll.current +
        ((e.clientX - dragStart.current) * contentWidth) /
          progressRef.current.getBoundingClientRect().width,
    });
  };

  useEffect(() => {
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchend', stopDrag);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);

    return () => {
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchend', stopDrag);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  });

  return (
    <div className={styles.full_bar} ref={progressRef}>
      <div
        className={styles.handle}
        style={handleStyles}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      />
    </div>
  );
}
