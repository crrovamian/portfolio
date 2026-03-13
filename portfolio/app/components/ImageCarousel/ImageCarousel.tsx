'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';
import { BASE_PATH } from '@/app/environments';

interface ImageCarouselProps {
  images: string[];
  alt?: string;
}

export function ImageCarousel({ images, alt = 'Project image' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  if (images.length === 0) {
    return null;
  }

  const getImagePath = (path: string) => {
    if (BASE_PATH) {
      return `/${BASE_PATH}${path}`;
    }
    return path;
  };

  return (
    <div
      className={styles.carousel}
      tabIndex={0}
      role="region"
      aria-label="Image carousel"
    >
      <div className={styles.imageContainer}>
        <Image
          src={getImagePath(images[currentIndex])}
          alt={`${alt} ${currentIndex + 1} of ${images.length}`}
          fill
          className={styles.image}
          priority
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className={styles.navButton}
            aria-label="Previous image"
          >
            ←
          </button>

          <button
            onClick={goToNext}
            className={`${styles.navButton} ${styles.navButtonNext}`}
            aria-label="Next image"
          >
            →
          </button>

          <div className={styles.indicators}>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''
                  }`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
