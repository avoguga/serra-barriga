import React from 'react';
import { useNavigate } from 'react-router-dom';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import tiktok from '../../assets/icons/app serra.svg';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import Video from '../../assets/icons/video.svg';
import * as C from './styles';

const Videos = () => {
  const navigate = useNavigate();

  return (
    <WatermarkWrapper>
      <C.Background>
        <C.BackButton onClick={() => navigate('/takehome/videos')}>
          <C.BackButtonImage src={seta} alt="" />
        </C.BackButton>

        <C.AppImg src={tiktok} alt="tiktok" />

        <C.StyledSelfieContainer>
          <C.VideoIcon src={Video} alt="video" />
          <C.TextVideo>VÍDEOS</C.TextVideo>
        </C.StyledSelfieContainer>

        <C.VideoContainer>
          <C.VideoTitle>Título do vídeo 1</C.VideoTitle>
          <C.VideoPlayer
            width="1263"
            height="502"
            src="https://www.youtube.com/embed/4tXwTVfsnvg"
            title="Azul (Djavan)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></C.VideoPlayer>
        </C.VideoContainer>

        <C.VideoInfo>
          <p>Interpretação: Nome aqui</p>
          <p>Texto: Nome aqui</p>
          <p>Trilha: Nome aqui</p>
        </C.VideoInfo>
      </C.Background>
    </WatermarkWrapper>
  );
};

export default Videos;
