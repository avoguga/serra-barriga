import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import tiktok from '../../assets/icons/app serra + tiktok.svg';
import aaa from '../../assets/icons/desenho mão segurando celular.svg';
import HomeButton from '../../components/HomeButton';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
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
  margin-top: 20px;
  border-radius: 90px;
`;

const TextContainer = styled.div`
  max-width: 250px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font: normal normal normal 16px/22px FuturaPTHeavy;
    letter-spacing: 0px;
    margin-left: 10px;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark={true}>
      <div
        style={{
          backgroundColor: '#67781B',
          height: '109vh',
        }}
      >
        <img
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
              navigate('/about');
            }}
          >
            SOBRE O APP
          </HomeButton>
          <BottomContainer>
            <img src={aaa} alt="aaa" width={104} height={212} />
            <TextContainer>
              <p>
                Aponte a câmera do celular para o símbolo e tenha uma
                experiência ampliada.
              </p>
            </TextContainer>
          </BottomContainer>
        </ButtonContainer>
      </div>
    </WatermarkWrapper>
  );
};

export default Home;