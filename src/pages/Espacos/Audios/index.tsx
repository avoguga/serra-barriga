import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as C from './styles';

import AudioPlayer from '../../../components/AudioPlayer';
import imagem from '../../../assets/icons/audio.svg';
import LowArrow from '../../../components/LowArrowButton';
import Sidebar from '../../Atalaia/Sidebar';
import { EspacoData, getEspacoData } from '../../../helpers/Espacos';
import SpaceHeader from '../../../components/SpaceHeader';
import { getEspacoAudios } from '../../../helpers/espacoAudios';

const AudiosView = () => {
  const navigate = useNavigate();
  const { figureName } = useParams<{ figureName: string }>();
  const figureData: EspacoData | undefined = getEspacoData(figureName ?? '');
  const audioData = getEspacoAudios(figureName ?? ''); 



  if (!figureData || !audioData || audioData.length === 0) {
    return <p>Espaço ou áudios não encontrados.</p>;
  }

  return (
    <C.Background>
      <C.Nav>
        <LowArrow onClick={() => navigate(`/historical-figure/${figureName}`)} isActive={true} />
      </C.Nav>
      <C.NavFooter>
        <Sidebar />
      </C.NavFooter>
      <SpaceHeader />
      <C.AudioContainer>
        <img
          src={imagem} 
          alt="ícone de audio"
          style={{ width: '25px', height: '25px' }}
        />
        <h3>Áudio</h3>
      </C.AudioContainer>
      <C.Section id="audios">
        {audioData.map((audio, index) => (
          <React.Fragment key={index}>
            <C.Title><p>{audio.title}</p></C.Title>
            {audio.audio.map((audioUrl, idx) => (
              <AudioPlayer key={idx} src={audioUrl}   colorTheme="green" styles={{
                wrapper: {backgroundColor: '#7A9600'},  
               
                progressBarActive: { backgroundColor: '#485600' },  
                

              }} /> 
            ))}
            <C.AudioDetails>
              <C.AudioText>Interpretação: {audio.interpretacao}</C.AudioText>
              <C.AudioText>Texto: {audio.texto}</C.AudioText>
              <C.AudioText>Trilha: {audio.trilha}</C.AudioText>
            </C.AudioDetails>
          </React.Fragment>
        ))}
      </C.Section>
    </C.Background>
  );
};

export default AudiosView;
