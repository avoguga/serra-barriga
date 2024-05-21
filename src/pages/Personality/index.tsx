import React, { useState,  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../../assets/logo.png';
import PersonalitiesSvg from '../../assets/personalidade - branco.svg';
import { personalities } from '../../helpers/personalitiesData';
import Arrow from '../../components/ArrowButton';
import OpenImage from '../../components/OpenImage';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import * as C from './styles';

const PersonalityPage = () => {
  const navigate = useNavigate();
  const { personalityName } = useParams<{ personalityName: string }>();
  const personality = personalities.find((p) => p.name === personalityName);
  const [isExpanded, setIsExpanded] = useState(false);
  const [leftArrowActive, setLeftArrowActive] = useState(false);
  const [rightArrowActive, setRightArrowActive] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<{ src: string; description: string }[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollContainerRef = React.createRef<HTMLDivElement>();

  const handleLeftClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100;
      setLeftArrowActive(true);
      setRightArrowActive(false);
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

  const openFullScreenImage = (images: { src: string; description: string }[], index: number) => {
    setFullScreenImage(images);
    setCurrentIndex(index);
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
                  const allImages = [
                    { src: personality.image, description: personality.name },
                    ...personality.photos.map((p) => ({ src: p.src, description: personality.name })),
                  ];
                  openFullScreenImage(allImages, 0);
                } else {
                  openFullScreenImage([{ src: personality.image, description: personality.name }], 0);
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
                  const images = personality.photos?.map((p) => ({ src: p.src, description: p.descriptionPhoto })) || [];
                  openFullScreenImage(images, index);
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
      </C.MainContainer>

      {fullScreenImage && (
        <OpenImage
          images={fullScreenImage}
          alt={personality?.name || ""}
          background="#8C111B"
          onClose={closeFullScreenImage}
          initialIndex={currentIndex}
        />
      )}
    </C.Container>
  );
};

export default PersonalityPage;
