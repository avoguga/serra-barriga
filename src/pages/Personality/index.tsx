import React, { useState,  } from 'react';
import { useParams } from 'react-router-dom';
import FloatingButtonBar from '../../components/FloatingContainer';
import logo from '../../assets/logo.png';
import PersonalitiesSvg from '../../assets/personalidade - branco.svg';
import { personalities,  } from '../../helpers/personalitiesData';
import Arrow from '../../components/ArrowButton';
import OpenImage from '../../components/OpenImage';

import * as C from './styles'
import { FullScreenImage } from '../../helpers/OpenImage';



const PersonalityPage = () => {
  const { personalityName } = useParams<{ personalityName: string }>();
  const personality = personalities.find((p) => p.name === personalityName);
  const [isExpanded, setIsExpanded] = useState(false);
  const [leftArrowActive, setLeftArrowActive] = useState(false);
const [rightArrowActive, setRightArrowActive] = useState(false);
const [fullScreenImage, setFullScreenImage] = useState<FullScreenImage | null>(null);




  
const scrollContainerRef = React.createRef<HTMLDivElement>();

const handleLeftClick = () => {
  if (scrollContainerRef.current) {
    scrollContainerRef.current.scrollLeft -= 100;
    setLeftArrowActive(true); 
    setRightArrowActive(false)
  }
};

const handleRightClick = () => {
  if (scrollContainerRef.current) {
    scrollContainerRef.current.scrollLeft += 100;
    setLeftArrowActive(false); 
  setRightArrowActive(true);
  }
};

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };


  const openFullScreenImage = (src: string, description = `${personalityName}`, background = '') => {
    setFullScreenImage({ src, description, background });
  };

  const closeFullScreenImage = () => {
    setFullScreenImage(null);
  };


  




  return (
    <C.Container>
      <FloatingButtonBar backgroundColor="#8C111B" />

      <C.MainContainer>
        <img
          src={logo}
          alt="logo serra da barriga"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '100px',
            marginBottom: '30px',
          }}
        />
        <C.PageHeader>
          <C.HeaderContent>
            <img
              src={PersonalitiesSvg}
              alt="personalitieIcon"
              style={{
                width: '38px',
                height: 'auto',
              }}
            />
            <h3>PERSONALIDADES</h3>
          </C.HeaderContent>
        </C.PageHeader>
        {personality ? (
          <>
            <C.PersonalityImage
              src={personality.image}
              alt={personality.name}
              onClick={() => openFullScreenImage(personality.image)}
            />
            
            <C.Description onClick={toggleIsExpanded}>
            <C.Title>{personality.name}</C.Title>

              
              {isExpanded
                ? personality.description.pt
                : `${personality.description.pt.substring(0, 400)}...`} <br />
                <C.ReadMoreButton onClick={toggleIsExpanded}>
              {isExpanded ? 'LEIA MENOS' : 'LEIA MAIS'}
            </C.ReadMoreButton>
                
            </C.Description>
            
            
          </>
        ) : (
          <p>Personalidade não encontrada.</p>
        )}
       
        <C.SubTitleContainer>
          <h2>FOTOS</h2>
        </C.SubTitleContainer>
        <C.ScrollContainer ref={scrollContainerRef}>
  <C.InnerScrollContainer>
    {personality && personality.photos && personality.photos.map((photo, index) => (
      <C.PhotoBox key={index} onClick={() => openFullScreenImage(photo)}>
        <img src={photo} loading='lazy' alt={`Foto ${index + 1} de ${personality.name}`} />
      </C.PhotoBox>
    ))}
  </C.InnerScrollContainer>
</C.ScrollContainer>
        <C.ArrowContainer>
          <Arrow direction="left" onClick={handleLeftClick} isActive={leftArrowActive} />
          <Arrow direction="right" onClick={handleRightClick} isActive={rightArrowActive} />
        </C.ArrowContainer>
        <C.SubTitleContainer>
          <h2>VIDEOS</h2>
        </C.SubTitleContainer>

        <C.VideoBox color="#FFF">{/* Conteúdo do vídeo */}</C.VideoBox>
        <C.ArrowContainer>
          <Arrow direction="left" onClick={() => {}} isActive={false} />
          <Arrow direction="right" onClick={() => {}} isActive={false} />
        </C.ArrowContainer>
      </C.MainContainer>

      {fullScreenImage && (
  <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#7B0A14', zIndex: 1000 }} onClick={closeFullScreenImage}>
    <OpenImage 
      src={fullScreenImage.src} 
      alt={fullScreenImage.description} 
      background={fullScreenImage.background} 
      description={fullScreenImage.description}
     
    />
  </div>
)}
    </C.Container>
  );
};

export default PersonalityPage;
