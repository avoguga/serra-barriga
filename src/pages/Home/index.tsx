import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import tiktok from '../../assets/serratiktok.svg';
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

const Home = () => {
  const navigate = useNavigate();

  return (
    <WatermarkWrapper watermark={true}>
      <div
        style={{
          backgroundColor: '#67781B',
          height: '100vh',
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
            iconType="Info"
            onClick={() => {
              navigate('/qrcode');
            }}
          >
            LER QRCODE
          </HomeButton>
          <HomeButton
            iconType="Info"
            onClick={() => {
              navigate('/selfie');
            }}
          >
            SELFIE HISTÓRICA
          </HomeButton>
          <HomeButton
            iconType="Info"
            onClick={() => {
              navigate('/personalities');
            }}
          >
            PERSONALIDADES
          </HomeButton>
          <HomeButton
            iconType="Info"
            onClick={() => {
              navigate('/takehome');
            }}
          >
            LEVE PARA CASA
          </HomeButton>
          <HomeButton
            iconType="Info"
            onClick={() => {
              navigate('/qrcode');
            }}
          >
            SSERRA DA BARRIGA
          </HomeButton>
          <HomeButton
            iconType="Info"
            onClick={() => {
              navigate('/about');
            }}
          >
            SOBRE O APP
          </HomeButton>
        </ButtonContainer>
      </div>
    </WatermarkWrapper>
  );
};

export default Home;
