import React from 'react';
import { useNavigate } from 'react-router-dom';
import imagem from '../../assets/icons/i_audio pagina.png';
import logo from '../../assets/logo.png';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import './styles.css';
import AudioPlayer from '../../components/AudioPlayer';
import BtnDownArrow from '../../components/ScrollButton';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import { getEspacoAudios } from '../../helpers/espacoAudios';

const AudiosTakeHome = () => {
  const navigate = useNavigate();
  const audioData = getEspacoAudios();

  if (!audioData || audioData.length === 0) {
    return <p>Espaço ou áudios não encontrados.</p>;
  }

  return (
    <WatermarkWrapper>
      <div className="fundo">
        <BtnDownArrow />
        <button
          className="back"
          onClick={() => {
            navigate('/takehome');
          }}
        >
          <img src={seta} alt="" />
        </button>
        <img
          src={logo}
          alt="logo serra da barriga"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '95px',
            marginBottom: '30px',
          }}
        />
        <div className="galeria">
          <img src={imagem} alt="Ícone de áudio" />
          <h2>GALERIA DE AUDIOS</h2>
        </div>
        <section
          style={{
            marginBottom: '20px',
          }}
          id="audios"
          className="audios"
        >
          {audioData.map((audio, index) => (
            <React.Fragment key={index}>
              {audio.audio && audio.audio.length > 0 && (
                <>
                  <div id="title" className="title">
                    <p>{audio.title}</p>
                  </div>
                  {audio.audio.map((audioUrl, idx) => (
                    <React.Fragment key={idx}>
                      <AudioPlayer
                        src={audioUrl}
                        colorTheme="orange"
                        styles={{
                          progressBarActive: { backgroundColor: '#d66b00' },
                        }}
                      />
                      {idx !== audio.audio.length - 1 && <br />}{' '}
                      {/* Conditionally add a <br /> if not the last audio */}
                    </React.Fragment>
                  ))}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '90vw',
                      alignItems: 'self-start',
                      marginTop: '20px',
                    }}
                  >
                    <p className="aaaaa">Voz: {audio.interpretacao}</p>
                    <p className="aaaaa">Texto: {audio.texto}</p>
                  </div>
                  <br />
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
        </section>
      </div>
    </WatermarkWrapper>
  );
};

export default AudiosTakeHome;
