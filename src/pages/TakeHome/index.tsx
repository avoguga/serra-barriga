import { Outlet, useNavigate } from 'react-router-dom';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import HomeButton from '../../components/HomeButton';
import styled from 'styled-components';
import tiktok from '../../assets/logo.png';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import WatermarkImageBottom from '../../assets/-_marca dagua - montanha - para fundo laranja.png';
import seta from '../../assets/seta voltar e abaixo - branco.svg';

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  margin: 0 10px;
  h5{
    font-family: 'FuturaPTBook', sans-serif;
    font-weight: normal;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
background: #753D00;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  position: fixed; // Alterado de absolute para fixed
  top: 7%;
  left: 5%;
  z-index: 10;
  cursor: pointer;
`;

export const BackgroundAbout = styled.div `

 width:200px;

background-color: #D66B00;
background-position: bottom center;
  background-repeat: no-repeat;
  background-size: contain;
position: relative;

`

const Box = styled.div`
  position: absolute; 
  top: 55%; 
  left: 53%;
  transform: translate(-50%, -50%); 
  svg {
    width: 42px;
    height: 42px;
  }
  font-family: 'FuturaPTBook', sans-serif;
  font-weight: normal;

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
            height:'105vh',
            maxHeight: '110vh',
            justifyContent:'end',
            
            

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
              iconType="FotosVideos"
              onClick={() => {
                navigate('/takehome/videosAndImages');
              }}
            >
              VÍDEOS E FOTOS
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
                navigate('/takehome/tour-360');
              }}
            >
              PASSEIO 360º
            </HomeButton>
            <BackgroundAbout>

              <ButtonContainer>
                <Box>

            <HomeButton 
            iconType='InfoRodape'
            onClick={() => {
              navigate('/about');
              // toggleFullScreen;
            }}
            >
              <h5> SOBRE O APP</h5>
              
            </HomeButton>
              </Box>
            <img src={WatermarkImageBottom} alt=""  style={{
              width:'100vw',
              height:'20vh'
            }}/>
              </ButtonContainer>
           
            </BackgroundAbout>
          </ButtonContainer>
        </div>
      </WatermarkWrapper>
    </>
  );
};

export default TakeHome;
