import { Outlet, useNavigate } from 'react-router-dom';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import HomeButton from '../../components/HomeButton';
import styled from 'styled-components';
import tiktok from '../../assets/icons/app serra + tiktok.svg';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import WatermarkImageBottom from '../../assets/marcamontanhaparafundoclao.png';

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  margin: 0 10px;
`;

const TakeHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <Outlet />
      <WatermarkWrapper watermark watermarkImage={WatermarkImage}>
        <div
          style={{
            backgroundColor: '#8AA61E',
            height: '100%',
          }}
        >
          <img
            onClick={() => {
              navigate('/');
            }}
            src={tiktok}
            alt="tiktok"
            style={{
              width: '100%',
              height: '102px',
              marginTop: '118px',
              marginBottom: '67px',
            }}
          />

          <ButtonContainer>
            <h2
              style={{
                font: 'normal normal 500 22px/30px',
                fontFamily: 'FuturaPTHeavy',
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
              iconType="Img"
              onClick={() => {
                navigate('/takehome/images');
              }}
            >
              IMAGENS
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
              iconType="Expo"
              onClick={() => {
                navigate('/takehome/virtual-expo');
              }}
            >
              EXPOSIÇÃO VIRTUAL
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
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </ButtonContainer>
        </div>
      </WatermarkWrapper>
    </>
  );
};

export default TakeHome;
