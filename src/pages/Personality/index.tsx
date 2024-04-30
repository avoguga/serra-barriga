import React, { useState,  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import logo from '../../assets/logo.png';
import PersonalitiesSvg from '../../assets/personalidade - branco.svg';
import { personalities,  } from '../../helpers/personalitiesData';
import Arrow from '../../components/ArrowButton';
import OpenImage from '../../components/OpenImage';
import seta from '../../assets/seta voltar e abaixo - branco.svg';


import * as C from './styles'
import { FullScreenImage } from '../../helpers/OpenImage';



const PersonalityPage = () => {
  const navigate = useNavigate();

  
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


  const openFullScreenImage = (images: string[], description: string, background: string, photoId: number) => {
    console.log("Opening image at index:", photoId); 
    setFullScreenImage({
      images,
      description,
      background,
      initialIndex: photoId // Asegure-se que este é o índice correto da foto clicada
    });
  };
  const closeFullScreenImage = () => {
    setFullScreenImage(null);
  };





  return (
    <C.Container>
<C.BackButton
            onClick={() => {
              navigate('/takehome/personalities');
            }}
          >
            <img src={seta} alt="" />
          </C.BackButton>

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
  onClick={() => {
    if (personality && personality.photos) {
      // Se você quer incluir esta imagem principal como parte das fotos em tela cheia:
      const allImages = [personality.image, ...personality.photos.map(p => p.src)];
      openFullScreenImage(allImages, personality.name, '#8C111B', 0);
    } else {
      // Se não há outras fotos ou se só deseja abrir a imagem principal:
      openFullScreenImage([personality.image], personality.name, '#8C111B', 0);
    }
  }}
/>
            
            <C.Description onClick={toggleIsExpanded}>
            <C.Title>{personality.name}</C.Title>

              
              {isExpanded
                ? personality.description.pt
                : `${personality.description.pt.substring(0, 400)}...`} <br />
                <C.ButtonContainer>
                <C.ReadMoreButton onClick={toggleIsExpanded}>
              {isExpanded ? 'LEIA MENOS' : 'LEIA MAIS'}
            </C.ReadMoreButton>
                </C.ButtonContainer>
                
                
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
  <C.PhotoBox
    key={photo.id}
    onClick={() => {
      const images = personality.photos?.map(p => p.src) || [];
      openFullScreenImage(images, personality.name, '#8C111B', index);
    }}
  >
    <img src={photo.src} alt={`Foto de ${personality.name}`} />
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
  
    <OpenImage 
    key={fullScreenImage.initialIndex}
      images={fullScreenImage.images} 
      alt={fullScreenImage.description} 
      background='#8C111B' 
      description={fullScreenImage.description}
      onClose={closeFullScreenImage}
      initialIndex={fullScreenImage.initialIndex}

     
    />

)}
    </C.Container>
  );
};

export default PersonalityPage;