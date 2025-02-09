'use client';

import { useState } from 'react';
import styled from 'styled-components';

const Carousel = styled.main<{ position: number }>`
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: 90%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  --items: 5;
  --middle: 3;
  --position: ${(props) => props.position};
  pointer-events: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Item = styled.div<{ offset: number }>`
  position: absolute;
  width: 100%;
  max-width: 250px;
  height: 100%;
  max-height: 250px;
  --offset: ${(props) => props.offset};
  --r: calc(var(--position) - var(--offset));
  --abs: max(calc(var(--r) * -1), var(--r));
  transition: all 0.25s linear;
  transform: rotateY(calc(-20deg * var(--r)))
    translateX(calc(-250px * var(--r)));
  z-index: calc((var(--position) - var(--abs)));

  @media (max-width: 768px) {
    max-width: 250px;
    max-height: 300px;
    transform: rotateY(calc(-20deg * var(--r)))
      translateX(calc(-200px * var(--r)));
  }
`;

const RadioInput = styled.input`
  border: 1px solid blue;
  // margin-top: -200px;
  &:nth-of-type(1) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  &:nth-of-type(2) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
  &:nth-of-type(3) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }
  &:nth-of-type(4) {
    grid-column: 5 / 6;
    grid-row: 2 / 3;
  }
  &:nth-of-type(5) {
    grid-column: 6 / 7;
    grid-row: 2 / 3;
  }
`;

interface ImageCardProps {
  children: React.ReactNode;
  color: string;
}

function ImageCard({ children, color }: ImageCardProps) {
  return (
    <div
      className="h-full w-full rounded-xl border-2 border-[#9EE7E5]"
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
}

const colors = ['#90f1ef', '#ff70a6', '#ff9770', '#ffd670', '#e9ff70'];

export default function RecapCarousel() {
  const [position, setPosition] = useState(2);

  return (
    <div className="flex h-[30vh] w-full flex-col items-center justify-center gap-4">
      <Carousel id="carousel" position={position}>
        {colors.map((color, index) => (
          <Item key={index} offset={index + 1}>
            <ImageCard color={color}>{index}</ImageCard>
          </Item>
        ))}
      </Carousel>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((num) => (
          <RadioInput
            key={num}
            type="radio"
            name="position"
            checked={position === num}
            onChange={() => setPosition(num)}
          />
        ))}
      </div>
    </div>
  );
}
