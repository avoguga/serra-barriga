import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/logo.png';
import aaa from '../../assets/icons/desenho mão segurando celular.svg';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import HomeButton from '../../components/HomeButton';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import { useEffect } from 'react';
import AboutButton from '../../components/AboutButton';

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 50px;
  justify-content: center;
  margin: 0 10px;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #20aa9a;
  width: 360px;
  height: 134px;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 30px;
  border-radius: 90px;
`;

const TextContainer = styled.div`
  max-width: 250px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font: normal normal normal 16px/22px;
    letter-spacing: 0px;
    margin-left: 10px;
  }
`;

// export const enterFullScreen = () => {
//   const doc: any = window.document;
//   const docEl: any = doc.documentElement;

//   const requestFullScreen =
//     docEl.requestFullscreen ||
//     docEl.mozRequestFullScreen ||
//     docEl.webkitRequestFullScreen ||
//     docEl.msRequestFullscreen;

//   if (
//     !doc.fullscreenElement &&
//     !doc.mozFullScreenElement &&
//     !doc.webkitFullscreenElement &&
//     !doc.msFullscreenElement
//   ) {
//     requestFullScreen.call(docEl);
//   }
// };

const Home = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   enterFullScreen();
  // }, []);

  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark={true}>
      <div
        style={{
          backgroundColor: '#67781B',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '50px',
            marginBottom: '60px',
          }}
        />

        <ButtonContainer>
          <HomeButton
            iconType="Scan"
            onClick={() => {
              navigate('/qrcode');
            }}
          >
            LER QRCODE
          </HomeButton>
          <HomeButton
            iconType="Selfie"
            onClick={() => {
              navigate('/selfie');
            }}
          >
            SELFIE HISTÓRICA
          </HomeButton>
          <HomeButton
            iconType="PersonalityIcon"
            onClick={() => {
              navigate('/personalities');
            }}
          >
            PERSONALIDADES
          </HomeButton>
          <HomeButton
            iconType="Home"
            onClick={() => {
              navigate('/takehome');
            }}
          >
            LEVE PARA CASA
          </HomeButton>
          <HomeButton
            iconType="MontanhaSerra"
            onClick={() => {
              navigate('/serra-da-barriga');
            }}
          >
            SERRA DA BARRIGA
          </HomeButton>
          <HomeButton
            iconType="Info"
            onClick={() => {
              navigate('/agenda');
            }}
          >
            AGENDA
          </HomeButton>
          <BottomContainer
            onClick={() => {
              navigate('/qrcode');
            }}
          >
            <img src={aaa} alt="aaa" width={104} height={212} />
            <TextContainer>
              <p>
                Aponte a câmera do celular para o símbolo e tenha uma
                experiência ampliada.
              </p>
            </TextContainer>
          </BottomContainer>

          <AboutButton
            iconType="Info"
            onClick={() => {
              navigate('/about');
              // toggleFullScreen;
            }}
          >
            SOBRE O APP
          </AboutButton>
        </ButtonContainer>
      </div>
    </WatermarkWrapper>
  );
};

export default Home;
