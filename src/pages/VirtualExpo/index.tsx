import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';

import tiktok from '../../assets/logo.png';
import { Icons } from '../../helpers/icons';
import '@google/model-viewer';

import obj1 from '../../assets/modelosOtimizados/Objeto_01-b.glb';
import obj2 from '../../assets/modelosOtimizados/Objeto_02-b (2).glb';
import obj3 from '../../assets/modelosOtimizados/Objeto_03-b.glb';
import obj4 from '../../assets/modelosOtimizados/Objeto_04_4k-c.glb';
import obj5 from '../../assets/modelosOtimizados/Objeto_05_4k-b.glb';
import obj6 from '../../assets/modelosOtimizados/Objeto_06_4k-b.glb';
import obj7 from '../../assets/modelosOtimizados/Objeto_07_4k-b.glb';
import obj8 from '../../assets/modelosOtimizados/Objeto_08_4k-c.glb';
import obj9 from '../../assets/modelosOtimizados/Objeto_09_4k-b.glb';
import obj10 from '../../assets/modelosOtimizados/Objeto_11_4k-b.glb';
import obj11 from '../../assets/modelosOtimizados/Objeto_12_4k-b.glb';
import obj12 from '../../assets/modelosOtimizados/Objeto_13_4k-b.glb';
import obj13 from '../../assets/modelosOtimizados/Objeto_15_4k-b.glb';

import { BackButton } from '../TakeHome';
import { useNavigate } from 'react-router-dom';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import { useState } from 'react';

import * as C from './styles';

type Modelo3D = {
  id: number;
  src: string;
  alt: string;
  isVisible: boolean;
};

const VirtualExpo = () => {
  const ExpoIcon = Icons['Expo'];
  const ArqIcon = Icons['Arqueologia'];
  const navigate = useNavigate();


   
  const [isExpanded, setIsExpanded] = useState(false);
  const [modelos, setModelos] = useState<Modelo3D[]>([
    {
      id: 1,
isVisible:false,
      src: obj1,
      alt: 'Modelo',
    },
    {
      id: 2,
      isVisible:false,

      src: obj2,
      alt: 'Modelo',
    },
    {
      id: 3,
      isVisible:false,

      src: obj3,
      alt: 'Modelo',
    },
    {
      id: 4,
      isVisible:false,

      src: obj4,
      alt: 'Modelo',
    },
    {
      id: 5,
      isVisible:false,

      src: obj5,
      alt: 'Modelo',
    },
    {
      id: 6,
      isVisible:false,

      src: obj6,
      alt: 'Modelo',
    },
    {
      id: 7,
      isVisible:false,

      src: obj7,
      alt: 'Modelo',
    },
    {
      id: 8,
      isVisible:false,

      src: obj8,
      alt: 'Modelo',
    },
    {
      id: 9,
      isVisible:false,

      src: obj9,
      alt: 'Modelo',
    },
    {
      id: 10,
      isVisible:false,

      src: obj10,
      alt: 'Modelo',
    },
    {
      id: 11,
      isVisible:false,

      src: obj11,
      alt: 'Modelo',
    },
    {
      id: 12,
      isVisible:false,

      src: obj12,
      alt: 'Modelo',
    },
    {
      id: 13,
      isVisible:false,

      src: obj13,
      alt: 'Modelo',
    },
  ]);

  const fullText = `A Serra da Barriga possui um patrimônio arqueológico que conta a história de diversos povos que aqui habitavam em tempos passados. A sua passagem por essas terras foi preservada através de diversos vestígios que resistiram ao tempo. \n\n
   Estudos arqueológicos realizados pelo Núcleo de Ensino e Pesquisa Arqueológico da Universidade Federal de Alagoas, revelaram cachimbos, panelas de barro, ferramentas de pedra lascada e polida, marcas dos pisos de moradias e muito mais. Essas evidências permitem que se aprenda muito sobre a vida cotidiana desses grupos.`;

  const paragraphs = fullText.split('\n\n');

  // Define o número de parágrafos a serem mostrados na prévia
  const previewParagraphCount = 1; // Ajuste conforme necessário

  // Determina quais parágrafos mostrar com base no estado de expansão
  const textToShow = isExpanded
    ? paragraphs
    : paragraphs.slice(0, previewParagraphCount);

 

  const handleLoadModel =  (id:number) => {
    setModelos(modelos.map(modelo => {
      if(modelo.id === id) {
        return{...modelo, isVisible: !modelo.isVisible};
      }
      return modelo;
    }))

  }
  

  return (
    <WatermarkWrapper>
      <div
        style={{
          backgroundColor: '#D66B00',
          height: '100%',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={tiktok}
          alt="tiktok"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '50px',
            marginBottom: '60px',
          }}
        />
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={seta} alt="" />
        </BackButton>
        <C.ExpoContainer>
          <ExpoIcon />
          <h2>EXPOSIÇÃO VIRTUAL</h2>
        </C.ExpoContainer>

        <C.ExpoInfoContainer>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '2rem',
              padding: '0 2rem',
              marginBottom: '1rem',
            }}
          >
            <ArqIcon />
            <h2>ARQUEOLOGIA DA SERRA DA BARRIGA</h2>
          </div>
          {textToShow.map((paragraph, index) => (
            <C.ExpoText key={index}>{paragraph}</C.ExpoText>
          ))}

          <C.ReadMoreButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'LER MENOS' : 'LER MAIS'}
          </C.ReadMoreButton>
        </C.ExpoInfoContainer>

        <C.ModelsContainer>
          {modelos.map((modelo) => (
            <div key={modelo.id}>
              <model-viewer
                ar
                camera-controls
                reveal="interaction"
                touch-action="pan-y"
                src={modelo.src}
                alt={modelo.alt}
                style={{
                  width: '146px',
                  height: '146px',
                  backgroundColor: '#EB7400',

                  borderRadius: '50%',
                }}
              >
               
              </model-viewer>
            </div>
          ))}
        </C.ModelsContainer>
      </div>
    </WatermarkWrapper>
  );
};

export default VirtualExpo;
