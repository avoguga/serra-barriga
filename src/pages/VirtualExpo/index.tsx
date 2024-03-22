import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';

import tiktok from '../../assets/logo.png';
import { Icons } from '../../helpers/icons';
import '@google/model-viewer';

import obj1 from '../../assets/Objeto_01-b.glb';
import obj2 from '../../assets/Objeto_02-b.glb';
import obj3 from '../../assets/Objeto_03-b.glb';
import obj4 from '../../assets/Objeto_01-e-6.glb';

import { BackButton } from '../TakeHome';
import { useNavigate } from 'react-router-dom';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import { useEffect, useState } from 'react';

import * as C from './styles';

const LoadingBar = ({ progress }: any) => (
  <div
    style={{
      width: '100%',
      backgroundColor: '#ccc',
      borderRadius: '5px',
      overflow: 'hidden',
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
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const [progress, setProgress] = useState(0); // Novo estado para o progresso

  const handleLoadClick = () => {
    setIsLoading(true);
    // Substitua este código pelo seu carregamento real e atualização de progresso
    let fakeProgress = 0;
    const interval = setInterval(() => {
      fakeProgress += 10;
      setProgress(fakeProgress);
      if (fakeProgress >= 100) {
        clearInterval(interval);
        setIsLoading(false); // Finaliza o carregamento
      }
    }, 100);
  };

  useEffect(() => {
    const button = document.querySelector('#button-load');
    const handleLoadClick = () => {
      // @ts-ignore
      document.querySelector('#lazy-load').dismissPoster();
    };

    if (button) {
      button.addEventListener('click', handleLoadClick);
    }

    // Cleanup function
    return () => {
      if (button) {
        button.removeEventListener('click', handleLoadClick);
      }
    };
  }, []);

  const fullText = `A Serra da Barriga possui um patrimônio arqueológico que conta a história de diversos povos que aqui habitavam em tempos passados. A sua passagem por essas terras foi preservada através de diversos vestígios que resistiram ao tempo. \n\n
   Estudos arqueológicos realizados pelo Núcleo de Ensino e Pesquisa Arqueológico da Universidade Federal de Alagoas, revelaram cachimbos, panelas de barro, ferramentas de pedra lascada e polida, marcas dos pisos de moradias e muito mais. Essas evidências permitem que se aprenda muito sobre a vida cotidiana desses grupos.`

   const paragraphs = fullText.split('\n\n');

  // Defina o número de parágrafos a serem mostrados na prévia
  const previewParagraphCount = 1; // Ajuste conforme necessário

  // Determina quais parágrafos mostrar com base no estado de expansão
  const textToShow = isExpanded ? paragraphs : paragraphs.slice(0, previewParagraphCount);

  const Download = Icons['DownloadWhite'];

  return (
    <WatermarkWrapper>
      <div
        style={{
          backgroundColor: '#67781B',
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
            <h2>ARQUEOLOGIA  DA  SERRA DA BARRIGA</h2>
          </div>
          {textToShow.map((paragraph, index) => (
            <C.ExpoText key={index}>
             {paragraph} 
            </C.ExpoText>
          ))}

      
<C.ReadMoreButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'LER MENOS' : 'LER MAIS'}
          </C.ReadMoreButton>
      
        </C.ExpoInfoContainer>

        <C.ModelsContainer>
          {/* Modelo 1 */}
          <div>
            <model-viewer
              ar
              // ar-modes="webxr"
              // ar-placement="wall"
              id="lazy-load"
              reveal="manual"
              camera-controls
              touch-action="pan-y"
              src={obj1}
              alt="A 3D model of an astronaut"
              style={{
                width: '146px',
                height: '146px',
                backgroundColor: '#859A27',

                borderRadius: '50%',
              }}
            >
              <C.LazyLoadPoster
                id="lazy-load-poster"
                slot="poster"
              ></C.LazyLoadPoster>
              <C.ButtonLoad
                id="button-load"
                slot="poster"
                onClick={handleLoadClick}
              >
                {isLoading ? (
                  <div
                    style={{
                      position: 'relative',
                      width: '100px',
                      height: '25px',
                    }}
                  >
                    <LoadingBar progress={progress} />
                  </div>
                ) : (
                  <C.ButtonLoad onClick={handleLoadClick}>
                    <Download /> Load 3d
                  </C.ButtonLoad>
                )}
              </C.ButtonLoad>
            </model-viewer>
          </div>

          {/* Modelo 2 */}
          <div>
            <model-viewer
              ar
              camera-controls
              touch-action="pan-y"
              src={obj2}
              alt="Modelo 2"
              style={{
                width: '146px',
                height: '146px',
                backgroundColor: '#859A27',
                borderRadius: '50%',
              }}
            >
              {/* Elementos internos semelhantes ao modelo 1 */}
            </model-viewer>
          </div>

          {/* Modelo 3 */}
          <div>
            <model-viewer
              ar
              camera-controls
              touch-action="pan-y"
              src={obj3}
              alt="Modelo 3"
              style={{
                width: '146px',
                height: '146px',
                backgroundColor: '#859A27',
                borderRadius: '50%',
              }}
            >
              {/* Elementos internos semelhantes ao modelo 1 */}
            </model-viewer>
          </div>

          {/* Modelo 4 */}
          <div>
            <model-viewer
              ar
              camera-controls
              touch-action="pan-y"
              src={obj4}
              alt="Modelo 4"
              style={{
                width: '146px',
                height: '146px',
                backgroundColor: '#859A27',
                borderRadius: '50%',
              }}
            >
              {/* Elementos internos semelhantes ao modelo 1 */}
            </model-viewer>
          </div>

          <div>
            <model-viewer
              ar
              camera-controls
              touch-action="pan-y"
              src={obj3}
              alt="Modelo 3"
              style={{
                width: '146px',
                height: '146px',
                backgroundColor: '#859A27',
                borderRadius: '50%',
              }}
            >
              {/* Elementos internos semelhantes ao modelo 1 */}
            </model-viewer>
          </div>

          {/* Modelo 4 */}
          <div>
            <model-viewer
              ar
              camera-controls
              touch-action="pan-y"
              src={obj4}
              alt="Modelo 4"
              style={{
                width: '146px',
                height: '146px',
                backgroundColor: '#859A27',
                borderRadius: '50%',
              }}
            >
              {/* Elementos internos semelhantes ao modelo 1 */}
            </model-viewer>
          </div>
          <div>
            <model-viewer
              ar
              camera-controls
              touch-action="pan-y"
              src={obj3}
              alt="Modelo 3"
              style={{
                width: '146px',
                height: '146px',
                backgroundColor: '#859A27',
                borderRadius: '50%',
              }}
            >
              {/* Elementos internos semelhantes ao modelo 1 */}
            </model-viewer>
          </div>

          {/* Modelo 4 */}
          <div>
            <model-viewer
              ar
              camera-controls
              touch-action="pan-y"
              src={obj4}
              alt="Modelo 4"
              style={{
                width: '146px',
                height: '146px',
                backgroundColor: '#859A27',
                borderRadius: '50%',
              }}
            >
              {/* Elementos internos semelhantes ao modelo 1 */}
            </model-viewer>
          </div>
        </C.ModelsContainer>
      </div>
    </WatermarkWrapper>
  );
};

export default VirtualExpo;
