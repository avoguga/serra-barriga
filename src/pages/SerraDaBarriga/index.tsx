import './style.css/';
import logo from '../../assets/logo.png';
import footer from '../../assets/icons/logo parque - vermelho-roxo.svg';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import FloatingButtonBar from '../../components/FloatingContainer';
import React, { useState, useRef } from 'react';
import OpenImage from '../../components/OpenImage';
import Arrow from '../../components/ArrowButton';

import foto1 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova (1).webp';
import foto2 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova (2).webp';
import foto3 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova (3).webp';
import foto4 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova (4).webp';
import foto5 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova.webp';
import foto6 from '../../assets/images/serra fotos/Serra da Barriga (3).webp';
import foto7 from '../../assets/images/serra fotos/Serra da Barriga.webp';
import foto8 from '../../assets/images/serra fotos/Mapa da Capitania de Pernambuco - atual Alagoas, com representação do Quilombo dos Palmares na direita. Obra do Holandês Caspar Barlaeus, 1642.webp';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #c60d1c;
  padding: 0;
  width: 100%;
`;

const TextContainer = styled.div<{ isExpanded: boolean }>`
  border-radius: 0px 0px 90px 90px;
  background-color: #c60d1c;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ isExpanded }) => (isExpanded ? 'auto' : '30rem')};
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
  padding: 25px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: height 0.3s ease;
`;

const Image = styled.img`
  width: 200px;
  height: 70px;
  margin-top: 0;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  margin: 10px 0;
  font-size: 16px;
  line-height: 1.5;
  color: #FFF;
  text-align: justify;
  font-family: 'FuturaPT', sans-serif;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #E5DFAE;
  cursor: pointer;
  text-align: end;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  text-decoration: underline;
`;

const CarrosselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  margin: 20px 0;
  padding: 0 10px;
  width: 100%;
  cursor: pointer;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`;

const ImageThumbnail = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  cursor: pointer;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

const VideoContainer = styled.div`
  display: flex;
  overflow-x: auto;
  background: #c60d1c;
  padding: 20px;
  gap: 10px;
  width: 100%;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`;

const Video = styled.iframe`
  width: 320px;
  height: 180px;
  border: none;
`;

const Footer = styled.img`
  width: 60%;
  height: auto;
  margin-top: 20px;
`;

const SerraDaBarriga = () => {
  const images = [
    { src: foto1, description: 'Foto de Aprigio Vilanova ' },
    { src: foto2, description: 'Foto de Aprigio Vilanova ' },
    { src: foto3, description: 'Foto de Aprigio Vilanova' },
    { src: foto4, description: 'Foto de Aprigio Vilanova ' },
    { src: foto5, description: 'Foto de Aprigio Vilanova ' },
    { src: foto6, description: 'Serra da Barriga ' },
    { src: foto7, description: 'Serra da Barriga  ' },
    { src: foto8, description: 'Mapa da Capitania de Pernambuco - atual Alagoas, com representação do Quilombo dos Palmares na direita. Obra do Holandês Caspar Barlaeus, 1642' }
  ];

  const videos = [
    { src: "https://www.youtube.com/embed/sesPGr4BYkM", title: "Margareth Menezes Ministra da Cultura do Brasil" },
    { src: "https://www.youtube.com/embed/kEU7XECoaJ4", title: "João Jorge Rodrigues Presidente da Fundação Cultural Palmares" },
    { src: "https://www.youtube.com/embed/Iku2KVqKVb0", title: "Nelson Mendes Diretor" },
    { src: "https://www.youtube.com/embed/H-0heADzD2Q", title: "Flávia Costa - Diretora do DPA" },
    { src: "https://www.youtube.com/embed/VZqUnoEm758", title: "Valdice Gomes" },
    { src: "https://www.youtube.com/embed/2Byj2R0m4n0", title: "Mãe Neide Oya D'Oxum" },
    { src: "https://www.youtube.com/embed/Va6AlND_zCM", title: "Valdice Gomes" },
    { src: "https://www.youtube.com/embed/-5SvbBB64Y0", title: "Mãe Neide Oya D'Oxum" },
  ];

  const [fullScreenImage, setFullScreenImage] = useState<{
    images: { src: string; description: string }[];
    description: string;
    background: string;
    initialIndex: number;
  } | null>(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [leftArrowActive, setLeftArrowActive] = useState(true);
  const [rightArrowActive, setRightArrowActive] = useState(true);

  const fullText = `Serra da Barriga está localizada no atual município de União dos Palmares, no estado de Alagoas. À época do Quilombo dos Palmares, fazia parte da Capitania de Pernambuco.  

  A Serra da Barriga, em União dos Palmares-AL, começou a construir-se em 1630, durante o período de lutas contra os holandeses e a economia canavieira.
  
  Após décadas de militância do Movimento Negro Brasileiro, a Serra da Barriga foi tombada como Patrimônio Histórico, Arqueológico, Etnográfico e Paisagístico em 1996, imortalizando este local como simbolo de resistência e luta pela liberdade. 
  
  Posteriormente, em 21 de março de 1997, Zumbi dos Palmares foi reconhecido pelo Governo Federal como Herói Nacional. 
 
  
  A Serra da Barriga - Patrimônio Cultural Brasileiro inscrito no Livro do Tombo Histórico e no Livro do Tombo Arqueológico, Etnográfico e Paisagístico, desde 1986 - recebeu o título de Patrimônio Cultural do Mercosul em maio de 2017.
  
  A riqueza do patrimônio imaterial afro-brasileiro tem sido preservada através da oralidade e das práticas religiosas, culturais e artesanais, encontradas nas casas religiosas de matriz africana e nas comunidades. 
  Estas são as fontes de criação do conteúdo cultural do Parque Memorial Quilombo dos Palmares.
  
  O cuidado em não apresentar o falso histórico permeia todos os elementos do Parque, principalmente as construções que, inspiradas na arquitetura africana, oferecem uma infraestrutura ambientalmente correta, segura e confortável para os visitantes.
  
  A Serra da Barriga também trata-se de um platô com elevada altimetria territorial, chegando a 485 metros de altitude, com lados íngremes e escarpados.
   Compreende paisagem natural e edificada, observando-se ainda grande quantidade de palmeiras que, segundo historiadores, deram origem ao nome ''Palmares'', além de vegetação e de recursos hídricos compostos de nascentes que alimentam um açude e uma lagoa.
  `;

  const paragraphs = fullText.split('\n');
  const previewParagraphCount = 3;
  const textToShow = isExpanded ? paragraphs : paragraphs.slice(0, previewParagraphCount);

  const openFullScreenImage = (index: number) => {
    setFullScreenImage({
      images,
      description: images[index].description,
      background: '#8C111B',
      initialIndex: index,
    });
  };

  const closeFullScreenImage = () => {
    setFullScreenImage(null);
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const handleLeftClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100;
      setLeftArrowActive(true);
      setRightArrowActive(true);
    }
  };

  const handleRightClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100;
      setLeftArrowActive(true);
      setRightArrowActive(true);
    }
  };

  const handleVideoLeftClick = () => {
    if (videoContainerRef.current) {
      videoContainerRef.current.scrollLeft -= 100;
      setLeftArrowActive(true);
      setRightArrowActive(true);
    }
  };

  const handleVideoRightClick = () => {
    if (videoContainerRef.current) {
      videoContainerRef.current.scrollLeft += 100;
      setLeftArrowActive(true);
      setRightArrowActive(true);
    }
  };

  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark={true}>
      <FloatingButtonBar backgroundColor="#8C111B" backBgColor='#560007' />
      <Container>
        <TextContainer isExpanded={isExpanded}>
          <Image src={logo} alt="logo serra da barriga" />
          <div>
            {textToShow.map((paragraph, index) => (
              <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
            <ReadMoreButton onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'LER MENOS' : 'LER MAIS'}
            </ReadMoreButton>
          </div>
        </TextContainer>

        <h4 style={{ color: '#FFF', fontFamily: 'FuturaPTDemi', marginBottom: '10px' }}>FOTOS</h4>

        <CarrosselContainer ref={scrollContainerRef}>
          {images.map((image, index) => (
            <ImageThumbnail
              key={index}
              src={image.src}
              onClick={() => openFullScreenImage(index)}
              alt={image.description}
            />
          ))}
        </CarrosselContainer>

        <ArrowContainer>
          <Arrow direction="left" onClick={handleLeftClick} isActive={leftArrowActive} />
          <Arrow direction="right" onClick={handleRightClick} isActive={rightArrowActive} />
        </ArrowContainer>

        <h4 style={{ color: '#FFF', fontFamily: 'FuturaPTDemi', marginTop: '20px' }}>VÍDEOS</h4>

        <VideoContainer ref={videoContainerRef}>
          {videos.map((video, index) => (
            <Video
            loading='lazy'
              key={index}
              src={video.src}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ))}
        </VideoContainer>

        <ArrowContainer>
          <Arrow direction="left" onClick={handleVideoLeftClick} isActive={leftArrowActive} />
          <Arrow direction="right" onClick={handleVideoRightClick} isActive={rightArrowActive} />
        </ArrowContainer>

        <Footer src={footer} alt="footer" />

        {fullScreenImage && (
          <OpenImage
            images={fullScreenImage.images}
            alt={fullScreenImage.description}
            background={fullScreenImage.background}
            onClose={closeFullScreenImage}
            initialIndex={fullScreenImage.initialIndex}
          />
        )}
      </Container>
    </WatermarkWrapper>
  );
};

export default SerraDaBarriga;
