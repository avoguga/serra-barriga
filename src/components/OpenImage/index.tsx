import { useEffect, useState, useRef } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(initialIndex ?? 0);
  const containerRef = useRef<HTMLDivElement>(null);

  

  useEffect(() => {
    // Garantir que o currentIndex seja atualizado corretamente quando initialIndex mudar
    setCurrentIndex(initialIndex ?? 0);
  }, [initialIndex]);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

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
          alt="iconX"
          loading="lazy"
          style={{
            width: '28px',
            height: 'auto',
            marginTop: '100px',
            marginRight: '50px',
            marginLeft: '30px',
            cursor: 'pointer',
          }}
          onClick={onClose}
        />

 <img
          src={logo}
          alt="logo serra da barriga"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '100px',
            marginBottom: '30px',
            marginRight: '40px',
          }}
        />
      </C.LogoContainer>
      <C.ImageContainer ref={containerRef} onClick={(e) => e.stopPropagation()}>
        {images.map((image, index) => (
          <C.StyledImage
            key={index}
            src={image}
            alt={alt}
            onClick={() => handleClick(index)}
            style={{ display: index === currentIndex ? 'flex' : 'block' }}
          />
        ))}
      </C.ImageContainer>
     
      <C.Description>{description}</C.Description>
    </C.FullScreenWrapper>
  );
};

export default OpenImage;
