import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import tiktok from '../../assets/serratiktok.svg';

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
            height: '100%',
          }}
        />
      </div>
    </WatermarkWrapper>
  );
};

export default Home;
