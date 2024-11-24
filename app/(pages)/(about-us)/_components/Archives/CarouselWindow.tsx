'use client';
import styles from './CarouselWindow.module.scss';
import { useRef } from 'react';
import { useCarouselContext } from '@pages/(about-us)/_hooks/useCarouselContext';

export default function CarouselWindow({
  children = [],
}: {
  children?: React.ReactNode;
}) {
  const {
    setWindowWitdh,
    setContentWidth,
    setItemBounds,
    windowRef,
    setScroll,
  } = useCarouselContext();

  const contentBeltResizeObserverRef = useRef<ResizeObserver | null>(null);
  const contentBeltRef = useRef<Element | null>(null);
  const contentWindowResizeObserverRef = useRef<ResizeObserver | null>(null);

  const onContentBeltChange = (elem: Element) => {
    if (!elem) return;
    const children = Array.from(elem.children);
    const boundingRects = children.map((child) =>
      (child as HTMLElement).getBoundingClientRect()
    );

    const contentBoundingRect = elem.getBoundingClientRect();
    setContentWidth(contentBoundingRect.width);
    setItemBounds(boundingRects);
  };

  const onContentBeltMount = (node: HTMLElement | null) => {
    if (!node) {
      if (contentBeltRef.current && contentBeltResizeObserverRef.current) {
        contentBeltResizeObserverRef.current.unobserve(contentBeltRef.current);
      }
      return;
    }

    contentBeltResizeObserverRef.current = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || entries.length === 0) {
        return;
      }
      const entry = entries[0];
      onContentBeltChange(entry.target);
    });

    contentBeltRef.current = node;
    contentBeltResizeObserverRef.current.observe(contentBeltRef.current);
  };

  const onContentWindowChange = (elem: Element) => {
    if (!elem) return;
    const contentWindowWidth = elem.getBoundingClientRect().width;
    setWindowWitdh(contentWindowWidth);
  };

  const onContentWindowMount = (node: HTMLElement | null) => {
    if (!node) {
      if (windowRef.current && contentWindowResizeObserverRef.current) {
        contentWindowResizeObserverRef.current.unobserve(windowRef.current);
      }
      return;
    }

    contentWindowResizeObserverRef.current = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || entries.length === 0) {
        return;
      }
      const entry = entries[0];
      onContentWindowChange(entry.target);
    });

    windowRef.current = node;
    contentWindowResizeObserverRef.current.observe(windowRef.current);
  };

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    setScroll(target.scrollLeft);
  };

  return (
    <div
      className={styles.window}
      ref={onContentWindowMount}
      onScroll={handleScroll}
    >
      <div className={styles.content_belt} ref={onContentBeltMount}>
        {children}
      </div>
    </div>
  );
}
