import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as C from './styles';

import AudioPlayer from '../../../components/AudioPlayer';
import imagem from '../../../assets/icons/i_audio pagina.png';
import LowArrow from '../../../components/LowArrowButton';
import Sidebar from '../Sidebar';
import { getEspacoAudios } from '../../../helpers/espacoAudios';
import SpaceHeader from '../../../components/SpaceHeader';

const AudiosView = () => {
  const navigate = useNavigate();
  const { figureName } = useParams<{ figureName: string }>();
  const audioData = getEspacoAudios(figureName ?? '');

  return (
    <C.Background>
      <C.Nav>
        <LowArrow
          onClick={() => navigate(`/historical-figure/${figureName}`)}
          isActive={true}
        />
      </C.Nav>
      <C.NavFooter>
        <Sidebar activeSection="AudiosView" />
      </C.NavFooter>
      <SpaceHeader />
      <C.AudioContainer>
        <img
          src={imagem}
          alt="ícone de audio"
          style={{ width: '35px', height: '35px', marginLeft: '5px' }}
        />
        <h3>Áudio</h3>
      </C.AudioContainer>
      <C.Section id="audios">
        {audioData && audioData.length > 0 ? (
          audioData.map((audio, index) => (
            <React.Fragment key={index}>
              <C.Title>
                <p>{audio.title}</p>
              </C.Title>
              {audio.audio.map((audioUrl, idx) => (
                <AudioPlayer
                  key={idx}
                  src={audioUrl}
                  colorTheme="green"
                  styles={{
                    wrapper: { backgroundColor: '#7A9600' },
                    progressBarActive: { backgroundColor: '#485600' },
                  }}
                />
              ))}
              <C.AudioDetails>
                <C.AudioText>Voz: {audio.interpretacao}</C.AudioText>
                <C.AudioText>Texto: {audio.texto}</C.AudioText>
              </C.AudioDetails>
            </React.Fragment>
          ))
        ) : (
          <p>Sem áudio disponível no momento.</p>
        )}
      </C.Section>
    </C.Background>
  );
};

export default AudiosView;
