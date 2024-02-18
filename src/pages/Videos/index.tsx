import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import tiktok from '../../assets/icons/app serra.svg';
import { SelfieContainer } from '../HistorySelfie';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import { useNavigate } from 'react-router-dom';
import Video from '../../assets/icons/video.svg';
import './style.css';
import styled from 'styled-components';

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--square-color);
  border-radius: 50%;
  width: 55px;
  height: 55px;
  position: fixed; // Alterado de absolute para fixed
  top: 7%;
  left: 5%;
  z-index: 10;
  cursor: pointer;
`;

const Videos = () => {
  const navigate = useNavigate();
  return (
    <WatermarkWrapper>
      <div className="background">
        <BackButton
          onClick={() => {
            navigate('/takehome');
          }}
        >
          <img src={seta} alt="" />
        </BackButton>

        <img src={tiktok} alt="tiktok" className="appImg" />

        <SelfieContainer
          style={{
            backgroundColor: '#B75C01',
          }}
        >
          <img src={Video} className="video-icon" />
          <p className="text-video">VÍDEOS</p>
        </SelfieContainer>

        <div className="video-containers">
          <button
            className="video1"
            onClick={() => {
              navigate('/takehome/videos/video-play');
            }}
          />
          <p className="text-video-obj">Vídeo 1</p>
          <button
            className="video2"
            onClick={() => {
              navigate('/takehome/videos/video-play');
            }}
          />
          <p className="text-video-obj">Vídeo 2</p>
          <button
            className="video3"
            onClick={() => {
              navigate('/takehome/videos/video-play');
            }}
          />
          <p className="text-video-obj">Vídeo 3</p>
        </div>
      </div>
    </WatermarkWrapper>
  );
};

export default Videos;
