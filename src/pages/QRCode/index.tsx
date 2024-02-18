import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/app_serra.svg';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import HomeButton from '../../components/HomeButton';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import { CameraContainer, Container, HeaderContainer } from './styles';
// import { enterFullScreen } from '../Home';
import { useEffect } from 'react';

const QRCode = () => {
  useEffect(() => {
    // enterFullScreen();
  }, []);

  const navigate = useNavigate();
  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark>
      <Container>
        <HeaderContainer>
          <HomeButton iconType="LeftArrow" onClick={() => navigate('/')} />
          <img
            src={logo}
            alt="logo serra da barriga"
            width={120}
            height={120}
          />
        </HeaderContainer>
        <CameraContainer>
          <QrReader
            onResult={(result: any, error: Error) => {
              if (result) {
                console.log(result.getText());
                window.open(result.getText(), '_blank');
                return;
              }
              console.info(error);
            }}
            constraints={{ facingMode: 'environment' }}
            containerStyle={{
              width: '100%',
              height: '100%',
            }}
            videoContainerStyle={{
              height: '100%',
            }}
            videoStyle={{
              height: '100%',
            }}
          />
        </CameraContainer>
      </Container>
    </WatermarkWrapper>
  );
};
export default QRCode;
