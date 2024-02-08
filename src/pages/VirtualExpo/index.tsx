import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import styled from 'styled-components';
import tiktok from '../../assets/logo.png';
import { Icons } from '../../helpers/icons';
import '@google/model-viewer';
import Astro from '../../assets/Astronaut.glb';
import Horse from '../../assets/Horse.glb';
import Robot from '../../assets/RobotExpressive.glb';
import Coffe from '../../assets/ToyCar.glb';
import { BackButton } from '../TakeHome';
import { useNavigate } from 'react-router-dom';
import seta from '../../assets/seta voltar e abaixo - branco.svg';

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
  width: 377px;
  height: 236px;

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
  display: flex; // Itens dispostos em linha
  gap: 50px; // Espaço entre os itens
  overflow-x: auto; // Habilita o scroll horizontal
  padding: 1rem;
  margin: 20px 0; // Adiciona margem acima e abaixo do contêiner, se necessário
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
            navigate('/');
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
          <model-viewer
            ar
            // ar-modes="webxr"
            // ar-placement="wall"
            camera-controls
            touch-action="pan-y"
            src={Astro}
            alt="A 3D model of an astronaut"
            style={{
              width: '146px',
              height: '146px',
              backgroundColor: '#EB7400',
              borderRadius: '50%',
            }}
          ></model-viewer>

          {/* <model-viewer
            style={{
              width: '146px',
              height: '146px',
              backgroundColor: '#EB7400',
              borderRadius: '50%',
            }}
            ar
            camera-controls
            touch-action="pan-y"
            src={Horse}
            alt="A 3D model of an astronaut"
          ></model-viewer> */}

          {/* <model-viewer
            style={{
              width: '146px',
              height: '146px',
              backgroundColor: '#EB7400',
              borderRadius: '50%',
            }}
            ar
            camera-controls
            touch-action="pan-y"
            src={Coffe}
            alt="A 3D model of an astronaut"
          ></model-viewer> */}

          <model-viewer
            // ar-modes="scene-viewer"
            style={{
              width: '146px',
              height: '146px',
              backgroundColor: '#EB7400',
              borderRadius: '50%',
            }}
            ar
            camera-controls
            touch-action="pan-y"
            src={Robot}
            alt="A 3D model of an astronaut"
          ></model-viewer>
        </ModelsContainer>
      </div>
    </WatermarkWrapper>
  );
};

export default VirtualExpo;
