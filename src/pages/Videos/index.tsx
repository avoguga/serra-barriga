import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import tiktok from '../../assets/icons/app serra.svg';
import { SelfieContainer } from '../HistorySelfie';
import { Icons } from '../../helpers/icons';
import './style.css';

const VideoIcon = Icons['View360'];

const Videos = () => {
  return (
    <WatermarkWrapper>
      <div className="background">
        <img
          src={tiktok}
          alt="tiktok"
          className='appImg'
        />
        <SelfieContainer>
          <VideoIcon />
          <p>VÍDEOS</p>
        </SelfieContainer>
      </div>
    </WatermarkWrapper>
  );
};

export default Videos;
