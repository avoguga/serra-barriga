import logo from '../../assets/logo.png';
import * as C from './styles'
import iconX from '../../assets/icons/X - Branco.svg'
import { useEffect, useState } from 'react';

export interface OpenImageProps {
    images: string[];
    alt: string;
    background: string;
    description: string;
    onClose?: () => void; 
    initialIndex?:number ;
  
  }

const OpenImage: React.FC <OpenImageProps> = ({images,alt,background,description, onClose, initialIndex}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    // Garantir que o currentIndex seja atualizado corretamente quando initialIndex mudar
    setCurrentIndex(initialIndex ?? 0);
    }, [initialIndex]);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };
    return (
        <C.FullScreenWrapper background={background}>
        <C.LogoContainer>
        <img
        onClick={onClose}
              src={iconX}
              alt="iconX"
              loading='lazy'
              style={{
                width: '28px',
                height: 'auto',
               marginTop: '100px',
               marginRight:'50px',
               marginLeft:'30px',
               cursor:'pointer'
              }}
            />

         <img
          src={logo}
          alt="logo serra da barriga"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '100px',
            marginBottom: '30px',
            marginRight:'40px',
        
            
        
          }}
        />
       
        </C.LogoContainer>

        <C.ImageContainer onClick={(e) => e.stopPropagation()}>
        {images.map((image, index) => (
  <C.StyledImage key={index} src={image} alt={alt} onClick={() => handleClick(index)} style={{ display: index === currentIndex ? 'flex' : 'block' }} />
))}
  </C.ImageContainer>
    <C.Description>{description}</C.Description>
</C.FullScreenWrapper>
      );
      
    };

export default OpenImage;