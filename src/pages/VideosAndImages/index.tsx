// VideosAndImages.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles'; // Ajuste o caminho do import conforme necessário
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import logo from '../../assets/logo.png';
import Video from '../../assets/icons/i_video pagina.png';
import imagem from '../../assets/icons/i_imagem pagina.png';
import Images from '../Images';
import VideoList from '../../components/VideoList';



// Seu componente React aqui
const VideosAndImages: React.FC = () => {
  const [tab, setTab] = useState<'images' | 'videos'>('videos');

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

        <C.SelfieContainer onClick={() => handleTabSwitch('videos')} selected={tab === 'videos'}>
          <C.Icon src={Video} alt="video" />
        

          <C.Text>VÍDEOS</C.Text> 
        
        </C.SelfieContainer>
        <C.SelfieContainer onClick={() => handleTabSwitch('images')} selected={tab === 'images'}>
          <C.Icon src={imagem} alt="imagem" />
        

          <C.Text>FOTOS</C.Text> 
     
        </C.SelfieContainer>
</C.TabContainer>

      
        {tab === 'videos' ? (
          <div style={{
            marginTop:'25px',
       
          }}>
            
            
            
            
             <VideoList/> </div>
        ) : (
          <div style={{
            marginTop:'25px'
          }}>  <Images/> </div>
        )}


    </C.PageWrapper>
  );
};

export default VideosAndImages;
