import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/logo.png';
import mapa from '../../assets/icons/i_Mapa.png';

import aaa from '../../assets/icons/mão com celular.png';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import HomeButton from '../../components/HomeButton';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import { useEffect, useState } from 'react';
import AboutButton from '../../components/AboutButton';
import CustomAlert from '../../components/CustomAlert';
import WelcomeScreen from '../../components/WelcomeScreen';
import WatermarkImageBottom from '../../assets/marcamontanhaparafundoclao.png';



const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  background-color: #67781b;
  column-gap: 47px;
  justify-content: center;
  align-items: center;
 
  
    font-family: 'FuturaPTDemi', sans-serif;
    font-size: 17px;


`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  background-color: #20aa9a;
  position: absolute;
  width: 385px;
  height: 124px;
  padding: 10px;
  box-sizing: border-box;
  top: 60%;
  border-radius: 90px;
  margin-top: 15px;

  z-index: 1;
  @media only screen and (width: 360px), (height: 740px) {

    width: 350px;
  margin-top: 0;
  top: 62%;


    


}
`;

const TextContainer = styled.div`
  max-width: 250px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
text-align: left;

  p {
    font-size: 15px;
    letter-spacing: 0px;
    margin-right: 8px;
    font-family: 'FuturaPTDemi', sans-serif;
    font-weight:bold;
  
  }
  span{
    font-family: 'FuturaPTBold', sans-serif;
  }
  @media only screen and (width: 360px), (height: 740px) {

    p {
    font-size: 14px;
    letter-spacing: 0px;
    margin-right: 8px;
    font-family: 'FuturaPTDemi', sans-serif;
    font-weight:bold;
  
  }


}
`;
const FooterContainer = styled.footer `
  background-image: url(${WatermarkImageBottom});
  background-position: bottom center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: end;
  align-items: center;

width: 150vw;
  min-height: 260px;
  max-height: 290px;
margin-right: 35px;

margin-top: 200px;
background-size: 130vw;
  background-color: #67781B;
  
  z-index: 0;
  @media only screen and (width: 360px), (height: 740px) {

    background-position:  center;
margin-top: 200px;




}


@media only screen and (width: 360px), (height: 780px) {
 

}

`
const Main = styled.main`
  background-color: #67781B;

  min-height: 100vh;
  max-height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (width: 360px), (height: 740px) {

    height: 120vh;
    justify-content: space-around;
 
  

   
  }

  
  @media only screen and (width: 390px), (height: 844px) {

height: 110vh


}

@media only screen and (width: 360px), (height: 640px) {

height: 140vh


}
`;
export const LogoContainer = styled.div `
display: flex;
flex-direction: row;
align-items: center;
gap: 15px;

@media only screen and (width: 360px), (height: 740px) {

margin-top:5px;



}



`
const MapaButton = styled.button`
  background: #2fa499;
  border-radius: 50%;
  width: 12vw;
  height: 12vw;
  max-width: 100px;
  max-height: 100px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (max-width: 768px) {
    width: 15vw;
    height: 15vw;
  }

  @media (max-width: 480px) {
    width: 20vw;
    height: 20vw;
  }

  img {
    width: 40%;
    height: 40%;

    @media (max-width: 768px) {
      width: 50%;
      height: 50%;
    }

    @media (max-width: 480px) {
      width: 60%;
      height: 60%;
    }
  }

  h3 {
    font-size: 1.5vw;

    @media (max-width: 768px) {
      font-size: 2vw;
    }

    @media (max-width: 480px) {
      font-size: 2.5vw;
    }
  }
`;
const isSamsungInternet = (): boolean => {
  return /SamsungBrowser/.test(navigator.userAgent);
};


const Home = () => {
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    // Verifica no localStorage
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setShowWelcome(false);
    }
    
    if (isSamsungInternet()) {
      setAlertMessage("Detectamos que você está usando o navegador Samsung Internet. Para uma melhor experiência, recomendamos o uso de outro navegador, como Google Chrome ou Safari.");
      setShowAlert(true);
    }
  }, []);
  
  
  const handleWelcomeClose = () => {
    setShowWelcome(false);
    localStorage.setItem('hasVisited', 'true'); 
  };

  

  return (
<>
{showAlert && (
        <CustomAlert show={showAlert} onClose={() => setShowAlert(false)}>
          {alertMessage}
        </CustomAlert>
      )}
 
 {showWelcome && (
        
          <WelcomeScreen onClose={handleWelcomeClose} /> 
      )}
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark={true}>
          
      <Main
>

      <LogoContainer>

      <img
          src={Logo}
          loading='lazy'

          alt="Logo"
          style={{
            width: '180px',
            height: '70px',
            marginTop: '50px',
            marginBottom:'50px',
            padding:'5px'
          }}
          />
<MapaButton
              onClick={() => {
                navigate('/maps');
              }}
            >
              <img src={mapa} loading="lazy" alt="icone de mapa" />
              <h3> MAPA</h3>
            </MapaButton>
          </LogoContainer>
      
   


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
              iconType="Expo"
              onClick={() => {
                navigate('/virtual-expo');
              }}
            >
              EXPOSIÇÃO VIRTUAL
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
            iconType="Agenda"
            onClick={() => {
              navigate('/agenda');
            }}
          >
            AGENDA
          </HomeButton>

          </ButtonContainer>
          <AboutButton
            iconType="InfoRodape"
            onClick={() => {
              navigate('/about');
              // toggleFullScreen;
            }}
            customStyle={{ marginBottom: '18px' }}
          >
            SOBRE O APP
          </AboutButton>
          <BottomContainer
            onClick={() => {
              navigate('/qrcode');
            }}
          >
            <img src={aaa} alt="aaa" width={140}  height={190} />
            <TextContainer>
              <p>
              Aponte a câmera do celular para o <span>símbolo da placa </span> tenha uma experiência ampliada.

              </p>
            </TextContainer>
          </BottomContainer>

        <FooterContainer/>
      </Main>
    </WatermarkWrapper>
    </>
  );
};

export default Home;
