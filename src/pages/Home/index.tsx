import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/logo.png';
import aaa from '../../assets/icons/desenho mão segurando celular.svg';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import HomeButton from '../../components/HomeButton';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import { useEffect, useState } from 'react';
import AboutButton from '../../components/AboutButton';
import CustomAlert from '../../components/CustomAlert';

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  background-color: #67781b;
  column-gap: 50px;
  justify-content: center;
  
    font-family: 'FuturaPTDemi', sans-serif;
    font-size: 17px;


`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #20aa9a;
  width: 350px;
  height: 124px;
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
    font: normal normal normal 15px/22px;
    letter-spacing: 0px;
    margin-left: 13px;
    font-family: 'FuturaPTDemi', sans-serif;
    font-weight:bold;
  
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

const isSamsungInternet = (): boolean => {
  return /SamsungBrowser/.test(navigator.userAgent);
};


const Home = () => {
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (isSamsungInternet()) {
      setAlertMessage("Detectamos que você está usando o navegador Samsung Internet. Para uma melhor experiência, recomendamos o uso de outro navegador, como Google Chrome ou Safari.");
      setShowAlert(true);
    }
  }, []);

  return (
<>
{showAlert && (
        <CustomAlert show={showAlert} onClose={() => setShowAlert(false)}>
          {alertMessage}
        </CustomAlert>
      )}
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
          <BottomContainer
            onClick={() => {
              navigate('/qrcode');
            }}
          >
            <img src={aaa} alt="aaa" width={80}  height={190} />
            <TextContainer>
              <p>
                Aponte a câmera do celular para o símbolo e tenha uma
                experiência ampliada.
              </p>
            </TextContainer>
          </BottomContainer>

          <AboutButton
            iconType="InfoRodape"
            onClick={() => {
              navigate('/about');
              // toggleFullScreen;
            }}
            customStyle={{ marginBottom: '25px' }}
          >
            SOBRE O APP
          </AboutButton>
        </ButtonContainer>
      </div>
    </WatermarkWrapper>
    </>
  );
};

export default Home;
