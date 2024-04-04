import { Outlet, useNavigate } from 'react-router-dom';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import HomeButton from '../../components/HomeButton';
import styled from 'styled-components';
import tiktok from '../../assets/logo.png';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import WatermarkImageBottom from '../../assets/marcamontanhaparafundoclao.png';
import seta from '../../assets/seta voltar e abaixo - branco.svg';

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  margin: 0 10px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--square-color);
  border-radius: 50%;
  width: 55px;
  height: 55px;
  position: fixed; // Alterado de absolute para fixed
  top: 7%;
  left: 5%;
  z-index: 10;
  cursor: pointer;
`;

const TakeHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <Outlet />
      <WatermarkWrapper watermark watermarkImage={WatermarkImage}>
        <div
          style={{
            backgroundColor: '#D66B00',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <BackButton
            onClick={() => {
              navigate('/');
            }}
          >
            <img src={seta} alt="" />
          </BackButton>
          <img
            onClick={() => {
              navigate('/');
            }}
            src={tiktok}
            alt="tiktok"
            style={{
              width: '200px',
              height: '70px',
              marginTop: '50px',
              marginBottom: '60px',
            }}
          />

          <ButtonContainer>
            <h2
              style={{
                font: 'normal normal 500 22px/30px ',
                letterSpacing: '0px',
                color: '#FFFFFF',
              }}
            >
              CONTEÚDO EXCLUSIVO
            </h2>

            <HomeButton
              iconType="Info"
              onClick={() => {
                navigate('/takehome/videos');
              }}
            >
              VÍDEOS
            </HomeButton>
            <HomeButton
            iconType="PersonalityIcon"
            onClick={() => {
              navigate('/takehome/personalities');
            }}
          >
            PERSONALIDADES 
          </HomeButton>

            <HomeButton
              iconType="Audio"
              onClick={() => {
                navigate('/takehome/audios');
              }}
            >
              ÁUDIOS
            </HomeButton>
            <HomeButton
              iconType="Img"
              onClick={() => {
                navigate('/takehome/images');
              }}
            >
              IMAGENS
            </HomeButton>

            <HomeButton
              iconType="MontanhaSerra"
              onClick={() => {
                navigate('/takehome/serra-da-barriga');
              }}
            >
              SERRA DA BARRIGA
            </HomeButton>
            <HomeButton
              iconType="Icon360"
              onClick={() => {
                window.location.href =
                  'https://kuula.co/share/collection/79KY4?logo=1&info=1&fs=1&vr=0&zoom=1&gyro=0&thumbs=-1&inst=0&keys=0';
              }}
            >
              PASSEIO 360º
            </HomeButton>
            <img
              src={WatermarkImageBottom}
              style={{
                maxWidth: '100vw',
                height: 'auto',
                backgroundColor: '#D66B00',
              }}
            />
          </ButtonContainer>
        </div>
      </WatermarkWrapper>
    </>
  );
};

export default TakeHome;
