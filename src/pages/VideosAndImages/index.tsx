// VideosAndImages.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles'; // Ajuste o caminho do import conforme necessário
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import logo from '../../assets/logo.png';
import Video from '../../assets/icons/video.svg';
import imagem from '../../assets/icons/imagem - branco.svg';
import Images from '../Images';
import VideoList from '../../components/VideoList';



// Seu componente React aqui
const VideosAndImages: React.FC = () => {
  const [tab, setTab] = useState<'images' | 'videos'>('images');
  const navigate = useNavigate();

  const handleTabSwitch = (selectedTab: 'images' | 'videos') => {
    setTab(selectedTab);
  };

  return (
    <C.PageWrapper>
<C.BackButton onClick={() => navigate('/takehome')}>
          <img src={seta} alt="Go back" />
        </C.BackButton>
        <C.LogoImage src={logo} alt="logo"  />
<C.TabContainer>

        <C.SelfieContainer onClick={() => handleTabSwitch('videos')}>
          <C.Icon src={Video} alt="video" />
        

          <C.Text>VÍDEOS</C.Text> 
        
        </C.SelfieContainer>
        <C.SelfieContainer onClick={() => handleTabSwitch('images')}>
          <C.Icon src={imagem} alt="imagem" />
        

          <C.Text>FOTOS</C.Text> 
     
        </C.SelfieContainer>
</C.TabContainer>

      
        {tab === 'videos' ? (
          <div style={{
            marginTop:'25px'
          }}> <VideoList/> </div>
        ) : (
          <div style={{
            marginTop:'25px'
          }}>  <Images/> </div>
        )}

        {/* Example of a button to switch tabs */}
    </C.PageWrapper>
  );
};

export default VideosAndImages;
