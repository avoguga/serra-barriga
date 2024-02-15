import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
// import AppCanvas from './Teste/AppCanvas';
// import Video from './Teste/Video';
import tiktok from '../../assets/icons/app serra.svg';
import { Icons } from '../../helpers/icons';
import styled from 'styled-components';
import Iansa from '../../assets/iansã.png';
import { useNavigate } from 'react-router-dom';
import FloatingButtonBar from '../../components/FloatingContainer';
import AppCanvas from './Teste/AppCanvas';

const Selfiee = Icons['Selfie'];

export const SelfieContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #768e19 0% 0% no-repeat padding-box;
  width: 180px;
  height: 70px;
  border-radius: 35px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  svg {
    width: 45px;
    height: 45px;
  }

  p {
    text-align: center;
    font: normal normal normal 18px/23px FuturaPTHeavy;
    letter-spacing: 0px;
    color: #ffffff;
  }
`;

const ImageContainer = styled.div`
  width: 320px;
  height: 380px;
  border: 3px solid #ffffff;
  margin: 15px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const HistorySelfie = () => {
  return (
    <WatermarkWrapper>
      <FloatingButtonBar />

      <div
        style={{
          backgroundColor: '#8AA61E',
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
            width: '100%',
            height: '102px',
            marginTop: '110px',
            marginBottom: '30px',
          }}
        />
        <SelfieContainer>
          <Selfiee />
          <p>SELFIE HISTÓRICA</p>
        </SelfieContainer>
        <br />
        <p
          style={{
            width: '300px',
            textAlign: 'justify',
            font: 'normal normal normal 18px/25px FuturaPTHeavy',
            letterSpacing: '0px',
            color: '#FFFFFF',
          }}
        >
          Escolha um personagem da história e tire uma selfie na serra da
          barriga
        </p>
        <ImageContainer>
          <img src={Iansa} alt="Iansã" width={300} height={350} />
        </ImageContainer>
        <ImageContainer>
          <img src={Iansa} alt="Iansã;" width={300} height={350} />
        </ImageContainer>
        {/* <AppCanvas /> */}
      </div>
    </WatermarkWrapper>
  );
};

export default HistorySelfie;
