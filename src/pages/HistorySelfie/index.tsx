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
  background: #586617 0% 0% no-repeat padding-box;
  width: 235px;
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
    opacity: 0.89;
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
const Footer = styled.div `
background: #313A0A;
width: 100vw;
height: 10.5vh;
display: flex;
justify-content: center;
align-items: center;
h4 {
  font-family: 'FuturaPt', sans-serif;

}
opacity: 0.69;

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
        <br /> <br />
        <p
          style={{
            width: '280px',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 'normal',
            letterSpacing: '0.8px',
            color: 'rgba(255, 255, 255, 0.6)',
            fontFamily:'FuturaPt',
            
          }}
        >
          Escolha um <span style={{ color: '#FFFFFF'}}> personagem da história e tire uma selfie </span> na serra da
          barriga
        </p> <br />
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
      </div>
    </WatermarkWrapper>
  );
};

export default HistorySelfie;
