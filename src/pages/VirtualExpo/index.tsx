import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';

import styled from 'styled-components';
import tiktok from '../../assets/logo.png';
import { Icons } from '../../helpers/icons';
import '@google/model-viewer';
import Astro from '../../assets/Astronaut.glb';

import obj1 from '../../assets/Objeto_01-b.glb';
import obj2 from '../../assets/Objeto_02-b.glb';
import obj3 from '../../assets/Objeto_03-b.glb';

import Teste from '../../assets/teste...png';

import { BackButton } from '../TakeHome';
import { useNavigate } from 'react-router-dom';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import { useEffect } from 'react';

const ExpoContainer = styled.div`
  font-family: 'FuturaPTHeavy';
  font-size: 12px;
  color: var(--text-color);
  background: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 310px;
  height: 80px;

  svg {
    width: 40px;
    height: 40px;
    margin-right: 24px;
  }
`;

const ExpoInfoContainer = styled.div`
  font-family: 'FuturaPTHeavy';
  font-size: 10px;
  color: var(--text-color);
  background: #753d00;
  padding-bottom: 1rem;
  border-radius: 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 337px;
  height: 296px;

  div > svg {
    width: 100px;
    height: 54px;
    margin-right: 24px;
  }
`;

const ExpoText = styled.p`
  font-size: 14px;
  color: #ffffff;
`;

const ModelsContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  margin: 25px 0; // Adiciona margem acima e abaixo do contêiner, se necessário
  -ms-overflow-style: none; // Esconde scrollbar no IE e Edge
  scrollbar-width: none; // Esconde scrollbar no Firefox

  &::-webkit-scrollbar {
    display: none; // Esconde scrollbar no WebKit (Safari, Chrome, etc)
  }
`;

const VirtualExpo = () => {
  const ExpoIcon = Icons['Expo'];
  const ArqIcon = Icons['Arqueologia'];
  const navigate = useNavigate();

  const LazyLoadPoster = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url(${Teste});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `;

  const ButtonLoad = styled.div`
    background-color: transparent;
    color: white;
    cursor: pointer;
    border-radius: 6px;
    display: flex;
    align-items: center;

    padding: 10px 15px;
    font-weight: 500;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 100;

    svg {
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }

    white-space: nowrap;
  `;

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

  const Download = Icons['DownloadWhite'];

  return (
    <WatermarkWrapper>
      <div
        style={{
          backgroundColor: '#D66B00',
          height: '100vh',
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
        <ExpoContainer>
          <ExpoIcon />
          <h2>EXPOSIÇÃO VIRTUAL</h2>
        </ExpoContainer>

        <ExpoInfoContainer>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0 3rem',
              marginBottom: '1rem',
            }}
          >
            <ArqIcon />
            <h2>ARQUEOLOGIA DA SERRA DA BARRIGA</h2>
          </div>
          <ExpoText>
            Arqueologia é a ciência que estuda as culturas e os modos de vida
            das diferentes sociedades humanas - tanto do passado como do
            presente - a partir da análise de objetos materiais.
          </ExpoText>
        </ExpoInfoContainer>

        <ModelsContainer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
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
                width: '166px',
                height: '146px',
                backgroundColor: '#EB7400',
                borderRadius: '50%',
              }}
            >
              <LazyLoadPoster
                id="lazy-load-poster"
                slot="poster"
              ></LazyLoadPoster>
              <ButtonLoad id="button-load" slot="poster">
                <Download />
                Load 3d
              </ButtonLoad>
            </model-viewer>
            <model-viewer
              ar
              // ar-modes="webxr"
              // ar-placement="wall"
              camera-controls
              touch-action="pan-y"
              src={obj2}
              alt="A 3D model of an astronaut"
              style={{
                width: '166px',
                height: '146px',
                backgroundColor: '#EB7400',
                borderRadius: '50%',
              }}
            ></model-viewer>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <model-viewer
              ar
              // ar-modes="webxr"
              // ar-placement="wall"
              camera-controls
              src={obj3}
              alt="A 3D model of an astronaut"
              touch-action="pan-y"
              style={{
                width: '166px',
                height: '146px',
                backgroundColor: '#EB7400',
                borderRadius: '50%',
              }}
            ></model-viewer>
            <model-viewer
              ar
              // ar-modes="webxr"
              // ar-placement="wall"
              camera-controls
              touch-action="pan-y"
              src={Astro}
              alt="A 3D model of an astronaut"
              style={{
                width: '166px',
                height: '146px',
                backgroundColor: '#EB7400',
                borderRadius: '50%',
              }}
            ></model-viewer>
          </div>
        </ModelsContainer>
      </div>
    </WatermarkWrapper>
  );
};

export default VirtualExpo;
