'use client';

import { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  padding: 5%;
  height: 100%;
  margin: 0;
  display: grid;
  grid-template-rows: 500px 100px;
  grid-template-columns: 1fr 30px 30px 30px 30px 30px 1fr;
  align-items: center;
  justify-items: center;
`;

const Carousel = styled.main<{ position: number }>`
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  --items: 5;
  --middle: 3;
  --position: ${(props) => props.position};
  pointer-events: none;
`;

const Item = styled.div<{ offset: number }>`
  position: absolute;
  width: 90%;
  height: 80%;
  --offset: ${(props) => props.offset};
  --r: calc(var(--position) - var(--offset));
  --abs: max(calc(var(--r) * -1), var(--r));
  transition: all 0.25s linear;
  transform: rotateY(calc(-10deg * var(--r)))
    translateX(calc(-300px * var(--r)));
  z-index: calc((var(--position) - var(--abs)));
`;

const RadioInput = styled.input`
  margin-top: -100px;
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
      className="w-full h-full rounded-xl border-2 border-[#9EE7E5]"
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
    <CarouselContainer>
      {[1, 2, 3, 4, 5].map((num) => (
        <RadioInput
          key={num}
          type="radio"
          name="position"
          checked={position === num}
          onChange={() => setPosition(num)}
        />
      ))}

      <Carousel id="carousel" position={position}>
        {colors.map((color, index) => (
          <Item key={index} offset={index + 1}>
            <ImageCard color={color}>{index}</ImageCard>
          </Item>
        ))}
      </Carousel>
    </CarouselContainer>
  );
}
