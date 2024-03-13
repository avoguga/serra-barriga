import './style.css/';
import logo from '../../assets/logo.png';
import setaEsquerda from '../../assets/set_esquerda.svg';
import setaDireita from '../../assets/set_direita.svg';
import foto1 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova (1).webp';
import foto2 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova (2).webp';
import foto3 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova (3).webp';
import foto4 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova (4).webp';
import foto5 from '../../assets/images/serra fotos/Foto de Aprigio Vilanova.webp';
import foto6 from '../../assets/images/serra fotos/Serra da Barriga (3).webp';
import foto7 from '../../assets/images/serra fotos/Serra da Barriga.webp';

import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import FloatingButtonBar from '../../components/FloatingContainer';
import { useState } from 'react';

const SerraDaBarriga = () => {
  const images = [
    { src: foto1 },
    { src: foto2 },
    { src: foto3 },
    { src: foto4 },
    { src: foto5 },
    { src: foto6 },
    { src: foto7 },

  ];
  const [isExpanded, setIsExpanded] = useState(false);
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

  return (
    <WatermarkWrapper watermark watermarkImage={WatermarkImage}>
      <FloatingButtonBar backgroundColor="#8C111B" />
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
            <button
              className="btnReadMore"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'LER MENOS' : 'LER MAIS'}
            </button>
          </div>
        </div>


        <h4>FOTOS</h4>
 

        <div className="carrosel-container">
          <div className="carrosel">
            {images.map((image, index) => (
              <img loading='lazy' key={index} src={image.src} className="image" />
            ))}
          </div>
          <div className='arrow-container'>

        
        <button>
              <img src={setaEsquerda} />
            </button>
            <button>
              <img src={setaDireita} />
            </button>
            </div>
        </div>

        <h4 >VÍDEOS</h4>
        <iframe
          src="https://www.youtube.com/embed/USLC-TsQdnI"
          title="Memórias de luta na Serra da Barriga"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="video"
        >
          
        </iframe>
        <div className='arrow-container'>

        
        <button>
              <img src={setaEsquerda} />
            </button>
            <button>
              <img src={setaDireita} />
            </button>
            </div>
      </div>
    </WatermarkWrapper>
  );
};

export default SerraDaBarriga;
