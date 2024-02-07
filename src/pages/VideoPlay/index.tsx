import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import tiktok from '../../assets/icons/app serra.svg';
import { SelfieContainer } from '../HistorySelfie';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import { useNavigate } from 'react-router-dom';
import Video from '../../assets/icons/video.svg';
import './style.css';

const Videos = () => {
  const navigate = useNavigate();
  return (
    <WatermarkWrapper>
      <div className="background">
        <button
          className="back"
          onClick={() => {
            navigate('/takehome/videos');
          }}
        >
          <img src={seta} alt="" />
        </button>

        <img src={tiktok} alt="tiktok" className="appImg" />

        <SelfieContainer
          style={{
            backgroundColor: '#B75C01',
          }}
        >
          <img src={Video} className="video-icon" />
          <p className="text-video">VÍDEOS</p>
        </SelfieContainer>

        <div className="video-container">
          <p className="video-title">Título do vídeo 1</p>
          <iframe
            width="1263"
            height="502"
            src="https://www.youtube.com/embed/4tXwTVfsnvg"
            title="Azul (Djavan)"
            // @ts-ignore
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="video-player"
          ></iframe>
        </div>

        <div className="video-info">
          <p>Interpretação: Nome aqui</p>
          <p>Texto: Nome aqui</p>
          <p>Trilha: Nome aqui</p>
        </div>
      </div>
    </WatermarkWrapper>
  );
};

export default Videos;
