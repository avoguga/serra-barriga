import React from 'react';
import * as C from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import logo from '../../assets/logo.png'; 
import Video from '../../assets/icons/i_video pagina.png';

const VideoScreenHome: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { videoSrc, title, interpretation, text } = location.state as {
    videoSrc: string;
    title: string;
    interpretation: string;
    text: string;
    trilha: string;
  }

  return (
    <C.VideoScreenContainer>
      <C.BackButton onClick={() => navigate(-1)}>
        <img src={seta} alt="Go back" />
      </C.BackButton>
      <C.LogoImage src={logo} alt="logo" />
      <C.TabContainer>
        <C.SelfieContainer>
          <C.Icon src={Video} alt="video" />
          <C.Text>VÍDEOS</C.Text> 
        </C.SelfieContainer>
      </C.TabContainer>

      <C.VideoTitle>{title}</C.VideoTitle>
      <iframe
        width="100%"
        height="315"
        src={videoSrc}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <C.VideoDetails>
        <p>Interpretação: {interpretation}</p>
        <p>Texto: {text}</p>
        
      </C.VideoDetails>
    </C.VideoScreenContainer>
  );
};

export default VideoScreenHome;
