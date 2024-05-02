import React from 'react';
import * as C from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import logo from '../../assets/logo.png'; 
import Video from '../../assets/icons/i_video pagina.png';
//
const VideoScreen: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { videoSrc, title, interpretation, text, trilha } = location.state as {
      videoSrc: string;
      title: string;
      interpretation: string;
      text: string;
      trilha: string;
    }
  return (
    <C.VideoScreenContainer>

<C.BackButton onClick={() =>navigate(-1)}>
          <img src={seta} alt="Go back" />
        </C.BackButton>
        <C.LogoImage src={logo} alt="logo" />
<C.TabContainer>

        <C.SelfieContainer>
          <C.Icon src={Video} alt="video" />
    

          <C.Text>VÍDEOS</C.Text> 
  
        </C.SelfieContainer>


        </C.TabContainer>



      <C.VideoTitle>{title} </C.VideoTitle>
      <video width="100%" controls>
        <source src={videoSrc} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <C.PlayButton onClick={() => {
        // Aqui você implementaria a lógica para reproduzir o vídeo, se não estiver usando os controles padrões do HTML
      }}>
        {/* Ícone do botão de play (se necessário, já que o <video> tem controles próprios) */}
      </C.PlayButton>
      <C.VideoDetails>
        <p>Interpretação: {interpretation}</p>
        <p>Texto: {text}</p>
        <p>Trilha: {trilha}</p>
      </C.VideoDetails>
    </C.VideoScreenContainer>
  );
};

export default VideoScreen;
