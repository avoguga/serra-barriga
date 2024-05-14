import React, { useState, useRef, useEffect } from 'react';
import * as C from './styles';
import iconX from '../../assets/icons/X - Branco.svg';
import logo from '../../assets/logo.png';

export interface OpenImageProps {
  images: string[];
  alt: string;
  background: string;
  description: string;
  onClose?: () => void;
  initialIndex?: number;
}

const OpenImage: React.FC<OpenImageProps> = ({
  images,
  alt,
  background,
  description,
  onClose,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const lastTapRef = useRef<number | null>(null);

  const handleTap = (index: number) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - (lastTapRef.current || currentTime);
    
    if (lastTapRef.current && tapLength < 300) {
      setIsZoomed(!isZoomed);  // Toggle zoom
    } else {
      setTimeout(() => {
        if (tapLength >= 300) setCurrentIndex(index);  // Change image if not a double tap
      }, 300);
    }

    lastTapRef.current = currentTime;
  };

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: currentIndex * container.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <C.FullScreenWrapper background={background} onClick={onClose}>
      <C.LogoContainer>
        <img
          src={iconX}
          alt="Close icon"
          style={{ width: '28px', height: 'auto', marginTop: '100px', marginRight: '50px', marginLeft: '30px', cursor: 'pointer' }}
          onClick={onClose}
        />
        <img
          src={logo}
          alt="Logo"
          style={{ width: '200px', height: '70px', marginTop: '100px', marginBottom: '30px', marginRight: '40px' }}
        />
      </C.LogoContainer>
      <C.ImageContainer ref={containerRef} onClick={e => e.stopPropagation()}>
        {images.map((image, index) => (
          <C.StyledImage
            key={index}
            src={image}
            alt={alt}
            isZoomed={isZoomed && currentIndex === index}  // Apply zoom only to the current image
            onClick={() => handleTap(index)}
            style={{ display: 'block',width: isZoomed && currentIndex === index ? '100%' : 'auto', maxHeight: '35vh' }}
          />
        ))}
      </C.ImageContainer>
      <C.Description>{description}</C.Description>
    </C.FullScreenWrapper>
  );
};

export default OpenImage;
