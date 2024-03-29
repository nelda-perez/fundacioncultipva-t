'use client';

import { RefObject, useEffect, useState } from 'react';
import styles from './carouselImages.module.css';
import { forwardRef } from 'react';
import React from 'react';
import { useImperativeHandle } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface Props {
  images: any[];
  autoPlay: any;
  hasWords: any;
}

const CarouselImages = forwardRef(
  ({ images, autoPlay, hasWords }: Props, ref) => {
    const { t } = useTranslation();
    const wordsForImages = [
      'Amamos',
      'Servimos',
      'Vamos donde está la necesidad',
      'Comunicamos el mensaje transformador',
      'Amamos',
      'Servimos',
      'Vamos donde está la necesidad'
    ];
    const imgRef: RefObject<HTMLImageElement | null> = React.createRef();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [word, setWord] = useState(wordsForImages[0]);
    const [loaded, setLoaded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const quantityImgs = images?.length ?? 0;

    const selectNewImage = (images: any, next = true) => {
      setLoaded(false);

      setTimeout(() => {
        const condition = next
          ? selectedIndex < images.length - 1
          : selectedIndex > 0;
        const nextIndex = next
          ? condition
            ? selectedIndex + 1
            : 0
          : condition
          ? selectedIndex - 1
          : quantityImgs - 1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
        if (hasWords) {
          setWord(wordsForImages[nextIndex]);
        }
      }, 500);
    };

    useImperativeHandle(ref, () => ({
      next() {
        selectNewImage(images);
      },
      previous() {
        selectNewImage(images, false);
      }
    }));

    useEffect(() => {
      if (autoPlay) {
        const interval = setInterval(() => {
          selectNewImage(images);
        }, 5000);
        return () => clearInterval(interval);
      }
    });

    return (
      <>
        <div className={styles.overlay}>
          <p>{t(word)}</p>
        </div>
        <Image
          ref={imgRef}
          className={`${styles.image} ${loaded ? styles.loaded : ''}`}
          src={selectedImage}
          alt="fundacion image"
          onLoad={() => setLoaded(true)}
        />
      </>
    );
  }
);

CarouselImages.displayName = 'CarouselImages';
export default CarouselImages;
