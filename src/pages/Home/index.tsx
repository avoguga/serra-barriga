import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import tiktok from '../../assets/serratiktok.svg';
import HomeButton from '../../components/HomeButton';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 62px;
  justify-content: center;
`;

const Home = () => {
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
          <HomeButton>LER QRCODE</HomeButton>
          <HomeButton>LER QRCODE</HomeButton>
          <HomeButton>LER QRCODE</HomeButton>
          <HomeButton>LER QRCODE</HomeButton>
          <HomeButton>LER QRCODE</HomeButton>
          <HomeButton>LER QRCODE</HomeButton>
        </ButtonContainer>
      </div>
    </WatermarkWrapper>
  );
};

export default Home;
