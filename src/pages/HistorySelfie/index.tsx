import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import logo from '../../assets/logo.png';
import { Icons } from '../../helpers/icons';
import styled from 'styled-components';
import Iansa from '../../assets/iansã.png';
import FloatingButtonBar from '../../components/FloatingContainer';
import BtnDownArrow from '../../components/ScrollButton';

import tiktok from '../../assets/icons/logo-tiktok.svg'

const Selfiee = Icons['Selfie'];

export const Container = styled.main`
  background-color: '#8AA61E';
  width: '100vw';
  display: 'flex';
  flex-direction: 'column';
  align-items: 'center';

  p {
    font-family: 'FuturaPT', sans-serif;
  }
`;

export const SelfieContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: baseline;
  background: #586617 0% 0% no-repeat padding-box;
  width: 235px;
  height: 60px;
  border-radius: 35px;
  gap: 15px;

  svg {
    width: 55px;
    height: 55px;
    fill: #ffffff;
    margin-left: 10px;
  }

  h3 {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 0.89;
    font-family: 'FuturaPTDemi', sans-serif;
  }
`;

const ImageContainer = styled.div`
  width: 280px;
  height: 380px;
  border: 3px solid #ffffff;
  margin: 15px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Footer = styled.div`
  background: #313a0a;
  width: 100vw;
  height: 10.5vh;
  display: flex;
  justify-content: center;
  color: #FFFF;
  align-items: center;
  h4 {
    font-family: 'FuturaPT', sans-serif;
    font-size: 15px;
  color: #FFFF;

  }
  opacity: 0.59;
`;

const HistorySelfie = () => {
  return (
    <WatermarkWrapper>
      <FloatingButtonBar backBgColor="#313A0A" />
      <BtnDownArrow />
      <Container
        style={{
          backgroundColor: '#8AA61E',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        <img src={tiktok} alt=""     style={{
            width: '200px',
            height: '70px',
            marginTop: '80px',
           
          }}/>
        <img
          src={logo}
          alt="logo serra da barriga"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '20px',
            marginBottom: '30px',
          }}
        />
        <SelfieContainer>
          <Selfiee />
          <h3>SELFIE HISTÓRICA</h3>
        </SelfieContainer>
        <br /> <br />
        <p
          style={{
            width: '280px',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 'normal',
            letterSpacing: '0.8px',
            color: 'rgba(255, 255, 255, 1)',
            fontFamily: 'FuturaPT',
          }}
        >
          Escolha um{' '}
          <span style={{ color: '#FFFFFF' }}>
            {' '}
            personagem da história e tire uma selfie{' '}
          </span>{' '}
          na serra da barriga
        </p>{' '}
        <br />
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
        <Footer>
          <h4> Imagens meramente ilustrativas</h4>
        </Footer>
      </Container>
    </WatermarkWrapper>
  );
};

export default HistorySelfie;
