'use client';
import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import CarouselIMG1 from '@/public/aboutUs/Recap/carousel1.png';
import CarouselIMG2 from '@/public/aboutUs/Recap/carousel2.png';
import CarouselIMG3 from '@/public/aboutUs/Recap/carousel3.png';

export function RecapCarousel() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  const images = [CarouselIMG1, CarouselIMG2, CarouselIMG3];

  React.useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-xs">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <Card className="rounded-3xl overflow-hidden border-2 border-transparent">
                <div className="bg-white rounded-3xl h-full w-full overflow-hidden">
                  <CardContent className="relative flex aspect-square items-center justify-center">
                    <Image
                      src={img}
                      alt={`Carousel image ${index + 1}`}
                      className="object-cover w-full h-full"
                      fill
                    />
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Indicators */}
      <div className="flex gap-2 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              current === index ? 'bg-primary w-4' : 'bg-primary/50'
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
