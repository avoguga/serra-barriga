import imagem from '../../assets/icons/i_audio pagina.png';
import { useNavigate,  } from 'react-router-dom';
import logo from '../../assets/logo.png';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import './styles.css';
import AudioPlayer from '../../components/AudioPlayer';
import BtnDownArrow from '../../components/ScrollButton';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';


import { getEspacoAudios } from '../../helpers/espacoAudios';

import React from 'react';
const AudiosTakeHome = () => {
 
  
  const navigate = useNavigate();


  const audioData = getEspacoAudios(); // Sem passar 'figureName'


  



  if (  !audioData || audioData.length === 0) {
    return <p>Espaço ou áudios não encontrados.</p>;
  }

  return (
    <WatermarkWrapper>
      <div className="fundo">
        <BtnDownArrow/>
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
          <img src={imagem} alt="" />
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
           <div id="title" className="title">
            <p>{audio.title} </p>
          </div>
            {audio.audio.map((audioUrl, idx) => (
              <AudioPlayer key={idx} src={audioUrl} colorTheme='orange' styles={{
                progressBarActive:{ backgroundColor: '#d66b00' }
              
              }}/>
            ))}
             <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '5px',
              marginTop: '20px',
              marginRight: '100px',
              
            }}
          >
            <p className="aaaaa">voz: {audio.interpretacao} </p>
            <p className="aaaaa">Texto: {audio.texto}</p>
   
          </div> <br /><br />
          </React.Fragment>
        ))}

        

        
        </section>
      
      </div>
    </WatermarkWrapper>
  );
};

export default AudiosTakeHome;