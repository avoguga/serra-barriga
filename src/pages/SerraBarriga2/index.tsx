import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import setaEsquerda from '../../assets/set_esquerda.svg';
import setaDireita from '../../assets/set_direita.svg';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import { BackButton } from '../TakeHome';
import OpenImage from '../../components/OpenImage';

import foto1 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova (1).webp';
import foto2 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova (2).webp';
import foto3 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova (3).webp';
import foto4 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova (4).webp';
import foto5 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova.webp';
import foto6 from '../../assets/images/serra fotos/Serra da Barriga (3).webp';
import foto7 from '../../assets/images/serra fotos/Serra da Barriga.webp';
import foto8 from '../../assets/images/serra fotos/Mapa da Capitania de Pernambuco - atual Alagoas, com representação do Quilombo dos Palmares na direita. Obra do Holandês Caspar Barlaeus, 1642.webp';

const ContainerGeral = styled.div`
  background: #d66b00;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const SetaVoltar = styled.img`
  /* height: 23px;
  width: 23px;
  transform: translateX(-2px); */
`;

const Text = styled.div`
  color: white;
  margin-top: 30%;
  transform: translateY(20px);
  line-height: 2.1;
  font-size: 17px;
  font-weight: 100;
  margin-bottom: 45px;
  text-align: justify;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'FuturaPTDemi', sans-serif;

  @media (min-width: 700px) {
    transform: translateY(20px);
    line-height: 2.1;
    font-size: 20px;
    font-weight: 100;
    font-family: 'FuturaPTDemi', sans-serif;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 10px; /* ou qualquer valor que dê o espaço desejado */
  line-height: 1.6; /* Ajuste para o espaçamento de linha desejado */
`;

const SerraInfo = styled.div`
  border-radius: 0px 0px 90px 90px;
  background-color: #e17406;
  display: flex;
  text-align: justify;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
`;

const ReadMoreButton = styled.button`
  color: #e5dfae; // Cor do texto
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 15px;
  cursor: pointer;
  text-decoration: underline;
`;

const LogoStyle = styled.img`
  width: 200px;
  height: 70px;
  margin-bottom: 20px;
;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 15px;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 14px;

  @media (min-width: 700px) {
    font-size: 22px;
    margin-bottom: 14px;
  }
`;

const Carrossel = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-x: auto;
  margin-left: 30px;
`;

const BtnSeta = styled.div`
  display: flex;
  gap: 280px;

  @media (min-width: 700px) {
    gap: 780px;
  }
`;

const Video = styled.iframe`
  background-color: var(--square-color);
  height: 170px;
  margin-bottom: 5px;

  @media (min-width: 700px) {
    height: 510px;
    width: 80%;
  }
`;

const CarrosselContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100vw;
  &::-webkit-scrollbar {
    display: none; // Isso pode ajudar a esconder a scrollbar em navegadores que suportam
  }
  gap: 10px; /* Espaço entre as imagens */
  padding: 0 20px; /* Ajuste conforme necessário para espaçamento interno */
  margin-right: 20px; /* Espaço extra no final do carrossel */
`;

const SerraDaBarriga2 = () => {
  const images = [
    { src: foto1, description: 'Foto de Aprigio Vilanova ' },
    { src: foto2, description: 'Foto de Aprigio Vilanova ' },
    { src: foto3, description: 'Foto de Aprigio Vilanova' },
    { src: foto4, description: 'Foto de Aprigio Vilanova ' },
    { src: foto5, description: 'Foto de Aprigio Vilanova ' },
    { src: foto6, description: 'Serra da Barriga ' },
    { src: foto7, description: 'Serra da Barriga  ' },
    {
      src: foto8,
      description: `Mapa da Capitania de Pernambuco - atual Alagoas, com representação do Quilombo dos Palmares na direita. Obra do Holandês Caspar Barlaeus, 1642`,
    },
  ];

  const [fullScreenImage, setFullScreenImage] = useState<
    { src: string; description: string }[] | null
  >(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
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
  // Divide o texto em parágrafos
  const paragraphs = fullText.split('\n');

  // A quantidade de parágrafos a serem exibidos quando não expandido
  const previewParagraphCount = 3;

  // Define quais parágrafos mostrar com base no estado de expansão
  const textToShow = isExpanded
    ? paragraphs
    : paragraphs.slice(0, previewParagraphCount);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const openFullScreenImage = (index: number) => {
    setFullScreenImage(images);
    setCurrentIndex(index);
  };

  const closeFullScreenImage = () => {
    setFullScreenImage(null);
  };

  const scrollCarrossel = (direction: string) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      // Pode ajustar este valor conforme necessário
      const scrollAmount = 200; // Valor fixo para teste

      const newScrollPosition =
        direction === 'left'
          ? current.scrollLeft - scrollAmount
          : current.scrollLeft + scrollAmount;
      current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <ContainerGeral>
      <BackButton
        onClick={() => {
          navigate('/takehome');
        }}
      >
        <SetaVoltar src={seta} alt="" />
      </BackButton>
      <SerraInfo>
        <LogoStyle src={logo} className="logoStyle" />
        <Text>
          {textToShow.map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}
          <ReadMoreButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'LER MENOS' : 'LER MAIS'}
          </ReadMoreButton>
        </Text>
      </SerraInfo>
      <br />
      <br />
      <br />

      <Title>FOTOS</Title>
      <Carrossel>
        <CarrosselContainer ref={scrollContainerRef}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              onClick={() => openFullScreenImage(index)}
              alt={image.description}
              style={{ width: '160px', height: '160px' }}
            />
          ))}
        </CarrosselContainer>
      </Carrossel>
      <BtnSeta>
        <button onClick={() => scrollCarrossel('left')}>
          <img src={setaEsquerda} alt="Scroll Left" />
        </button>
        <button onClick={() => scrollCarrossel('right')}>
          <img src={setaDireita} alt="Scroll Right" />
        </button>
      </BtnSeta>
      <Title>VÍDEOS</Title>
      <Video
        src="https://www.youtube.com/embed/USLC-TsQdnI"
        title="Memórias de luta na Serra da Barriga"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></Video>


      {fullScreenImage && (
        <OpenImage
          images={fullScreenImage}
          alt={images[currentIndex].description} // Passe o alt corretamente
          background="#D66B00"
          onClose={closeFullScreenImage}
          initialIndex={currentIndex}
        />
      )}
    </ContainerGeral>
  );
};

export default SerraDaBarriga2;
