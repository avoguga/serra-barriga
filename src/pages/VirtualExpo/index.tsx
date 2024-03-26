import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';

import tiktok from '../../assets/logo.png';
import { Icons } from '../../helpers/icons';
import '@google/model-viewer';

import obj1 from '../../assets/Objeto_01-b.glb';
import obj2 from '../../assets/Objeto_02-b.glb';
import obj3 from '../../assets/Objeto_03-b.glb';
import obj4 from '../../assets/Objeto_04_4k-c.glb';
import obj5 from '../../assets/Objeto_05_4k-b.glb';
import obj6 from '../../assets/Objeto_06_4k-b.glb';
import obj7 from '../../assets/Objeto_07_4k-b.glb';
import obj8 from '../../assets/Objeto_08_4k-c.glb';
import obj9 from '../../assets/Objeto_09_4k-b.glb';
import obj10 from '../../assets/Objeto_11_4k-b.glb';
import obj11 from '../../assets/Objeto_12_4k-b.glb';
import obj12 from '../../assets/Objeto_13_4k-b.glb';
import obj13 from '../../assets/Objeto_15_4k-b.glb';

import { BackButton } from '../TakeHome';
import { useNavigate } from 'react-router-dom';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import {  useState } from 'react';

import * as C from './styles';


type Modelo3D = {
  id: number;
  src: string;
  alt: string;
  isLoading: boolean;
  progress: number;
  isLoaded: boolean;
};

const LoadingBar = ({ progress }: any) => (
  <div
    style={{
      width: '100%',
      backgroundColor: '#ccc',
      borderRadius: '5px',
    
      
    }}
  >
    <div
      style={{
        height: '10px',
        width: `${progress}%`,
        backgroundColor: '#90caf9',
        transition: 'width 0.5s ease-in-out',
      }}
    />
  </div>
);

const VirtualExpo = () => {
  const ExpoIcon = Icons['Expo'];
  const ArqIcon = Icons['Arqueologia'];
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);
  const [modelos, setModelos] = useState<Modelo3D[]>([
    {
      id: 1,
      isLoading: false,
      progress: 0,
      src: obj1,
      alt: 'Modelo',
      isLoaded: false,
    },
    {
      id: 2,
      isLoading: false,
      progress: 0,
      src: obj2,
      alt: 'Modelo',
      isLoaded: false,
    },
    {
      id: 3,
      isLoading: false,
      progress: 0,
      src: obj3,
      alt: 'Modelo',
      isLoaded: false,
    },
    {
      id: 4,
      isLoading: false,
      progress: 0,
      src: obj4,
      alt: 'Modelo',
      isLoaded: false,
    },
    {
      id: 5,
      isLoading: false,
      progress: 0,
      src: obj5,
      alt: 'Modelo',
      isLoaded: false,
    },
    {
      id: 6,
      isLoading: false,
      progress: 0,
      src: obj6,
      alt: 'Modelo',
      isLoaded: false,
    },
    {
      id: 7,
      isLoading: false,
      progress: 0,
      src: obj7,
      alt: 'Modelo',
      isLoaded: false,
    },
    {
      id: 8,
      isLoading: false,
      progress: 0,
      src: obj8,
      alt: 'Modelo',
      isLoaded: false,
    },
    {
      id: 9,
      isLoading: false,
      progress: 0,
      src: obj9,
      alt: 'Modelo',
      isLoaded: false,
    },
    {
      id: 10,
      isLoading: false,
      progress: 0,
      src: obj10,
      alt: 'Modelo',
      isLoaded: false,
    },
    {
      id: 11,
      isLoading: false,
      progress: 0,
      src: obj11,
      alt: 'Modelo',
      isLoaded: false,
    },
    {
      id: 12,
      isLoading: false,
      progress: 0,
      src: obj12,
      alt: 'Modelo',
      isLoaded: false,
    },
    {
      id: 13,
      isLoading: false,
      progress: 0,
      src: obj13,
      alt: 'Modelo',
      isLoaded: false,
    },
  ]);

  const handleLoadModel = (modelId: number) => {
    setModelos((currentModelos) =>
      currentModelos.map((model) =>
        model.id === modelId ? { ...model, isLoading: true } : model
      )
    );

    // Simulação do carregamento
    let fakeProgress = 0;
    const interval = setInterval(() => {
      fakeProgress += 10;
      if (fakeProgress >= 100) {
        clearInterval(interval);
        setModelos((currentModelos) =>
          currentModelos.map((model) =>
            model.id === modelId
              ? { ...model, isLoading: false, progress: 100, isLoaded: true }
              : model
          )
        );
      } else {
        setModelos((currentModelos) =>
          currentModelos.map((model) =>
            model.id === modelId ? { ...model, progress: fakeProgress } : model
          )
        );
      }
    }, 100);
  };

  const fullText = `A Serra da Barriga possui um patrimônio arqueológico que conta a história de diversos povos que aqui habitavam em tempos passados. A sua passagem por essas terras foi preservada através de diversos vestígios que resistiram ao tempo. \n\n
   Estudos arqueológicos realizados pelo Núcleo de Ensino e Pesquisa Arqueológico da Universidade Federal de Alagoas, revelaram cachimbos, panelas de barro, ferramentas de pedra lascada e polida, marcas dos pisos de moradias e muito mais. Essas evidências permitem que se aprenda muito sobre a vida cotidiana desses grupos.`;

  const paragraphs = fullText.split('\n\n');

  // Define o número de parágrafos a serem mostrados na prévia
  const previewParagraphCount = 1; // Ajuste conforme necessário

  // Determina quais parágrafos mostrar com base no estado de expansão
  const textToShow = isExpanded
    ? paragraphs
    : paragraphs.slice(0, previewParagraphCount);

  const Download = Icons['DownloadWhite'];

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
              {!modelo.isLoaded &&
                !modelo.isLoading &&
                modelo.progress < 100 && (
                  <button
                    onClick={() => handleLoadModel(modelo.id)}
                    
                  >
                    <Download title="Carregar modelo" />
                  </button>
                )}

              {modelo.isLoading && modelo.progress < 100 && (
                <LoadingBar progress={modelo.progress} />
              )}

              {modelo.progress === 100 && (
                <div
                  style={{
                    background: ' #EB7400',
                    width: '100%',
                    height: '100%',
                    borderRadius: '300px',
                    display: 'block',
                  }}
                >
                  <model-viewer
                    ar
                    camera-controls
                    src={modelo.src}
                    alt={modelo.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </C.ModelsContainer>
      </div>
    </WatermarkWrapper>
  );
};

export default VirtualExpo;
