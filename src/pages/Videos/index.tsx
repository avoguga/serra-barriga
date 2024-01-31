import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import styled from 'styled-components';
import tiktok from '../../assets/icons/app serra.svg';
import { SelfieContainer } from '../HistorySelfie';
import { Icons } from '../../helpers/icons';

const VideoIcon = Icons['View360'];

const Videos = () => {
  return (
    <WatermarkWrapper>
      <div
        style={{
          backgroundColor: '#8AA61E',
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
        <SelfieContainer>
          <VideoIcon />
          <p>VÍDEOS</p>
        </SelfieContainer>
      </div>
    </WatermarkWrapper>
  );
};

export default Videos;
