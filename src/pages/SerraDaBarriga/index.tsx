import './style.css/';
import logo from '../../assets/logo.png';
import footer from '../../assets/icons/logo parque - verde.svg';
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
  const [leftArrowActive, setLeftArrowActive] = useState(false);
  const [rightArrowActive, setRightArrowActive] = useState(false);

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

  const handleVideoLeftClick = () => {
    if (videoContainerRef.current) {
      videoContainerRef.current.scrollLeft -= 100;
      setLeftArrowActive(true);
      setRightArrowActive(false);
    }
  };

  const handleVideoRightClick = () => {
    if (videoContainerRef.current) {
      videoContainerRef.current.scrollLeft += 100;
      setLeftArrowActive(false);
      setRightArrowActive(true);
    }
  };

  return (
    <WatermarkWrapper watermark watermarkImage={WatermarkImage}>
      <FloatingButtonBar backgroundColor="#8C111B" backBgColor='#560007' />
      <div className="container">
        <div className="text-container">
          <img
            src={logo}
            alt="logo serra da barriga"
            style={{
              width: '200px',
              height: '70px',
              marginTop: '100px',
            }}
          />
          <div className="text">
            {textToShow.map((paragraph, index) => (
              <p className="paragraph" key={index}>
                {paragraph}
              </p>
            ))}
            <button className="btnReadMore" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'LER MENOS' : 'LER MAIS'}
            </button>
          </div>
        </div>

        <h4>FOTOS</h4>

        <div className="carrosel-container"  ref={scrollContainerRef}>
          <div className="carrosel">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                className="image"
                onClick={() => openFullScreenImage(index)}
                alt={image.description}
              />
            ))}
          </div>
        </div>

        <div className="arrow-container">
          <Arrow direction="left" onClick={handleLeftClick} isActive={leftArrowActive} />
          <Arrow direction="right" onClick={handleRightClick} isActive={rightArrowActive} />
        </div>

        <h4>VÍDEOS</h4>

        <div className="video-container" style={{background:'#C60D1C'}} ref={videoContainerRef}>
          {videos.map((video, index) => (
            <iframe
              key={index}
              src={video.src}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="video"
            />
          ))}
        </div>

        <div className="arrow-container">
          <Arrow direction="left" onClick={handleVideoLeftClick} isActive={leftArrowActive} />
          <Arrow direction="right" onClick={handleVideoRightClick} isActive={rightArrowActive} />
        </div>

        <img className="footer" src={footer} alt="footer" />

        {fullScreenImage && (
          <OpenImage
            images={fullScreenImage.images}
            alt={fullScreenImage.description}
            background={fullScreenImage.background}
            onClose={closeFullScreenImage}
            initialIndex={fullScreenImage.initialIndex}
          />
        )}
      </div>
    </WatermarkWrapper>
  );
};

export default SerraDaBarriga;
