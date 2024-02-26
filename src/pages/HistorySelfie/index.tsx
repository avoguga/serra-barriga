import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import logo from '../../assets/logo.png';
import { Icons } from '../../helpers/icons';
import styled from 'styled-components';
import Iansa from '../../assets/iansã.png';
import FloatingButtonBar from '../../components/FloatingContainer';
import BtnDownArrow from '../../components/ScrollButton';

const Selfiee = Icons['Selfie'];

export const SelfieContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #768e19 0% 0% no-repeat padding-box;
  width: 220px;
  height: 60px;
  border-radius: 35px;

  svg {
    width: 45px;
    height: 45px;
  }

  p {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
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
      <BtnDownArrow/>
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
          src={logo}
          alt="logo serra da barriga"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '100px',
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
            fontSize: '18px',
            fontWeight: 'normal',
            letterSpacing: '0px',
            color: '#FFFFFF',
          }}
        >
          Escolha um personagem da história e tire uma selfie na serra da
          barriga
        </p>
        <ImageContainer
          onClick={() =>
            (window.location.href =
              'https://www.instagram.com/ar/966915324853206/?ch=NzZmOWJkMDU5MzJmMTQ4MTI3ZmZhMTIwODNiYTllZDc%3D')
          }
        >
          <img src={Iansa} alt="Iansã" width={300} height={350} />
        </ImageContainer>
        <ImageContainer
          onClick={() =>
            (window.location.href =
              'https://www.instagram.com/ar/966915324853206/?ch=NzZmOWJkMDU5MzJmMTQ4MTI3ZmZhMTIwODNiYTllZDc%3D')
          }
        >
          <img src={Iansa} alt="Iansã;" width={300} height={350} />
        </ImageContainer>
      </div>
    </WatermarkWrapper>
  );
};

export default HistorySelfie;
