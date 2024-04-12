import imagem from '../../assets/icons/audio.svg';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import './styles.css';
import AudioPlayer from '../../components/AudioPlayer';
import BtnDownArrow from '../../components/ScrollButton';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import audio from '../../assets/nattan.mp3'
const AudiosTakeHome = () => {
 
 
  const navigate = useNavigate();
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
          <div id="title" className="title">
            <p>Título do Audio</p>
          </div>

          <AudioPlayer colorTheme='orange' src={audio} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '5px',
              marginTop: '20px',
              marginRight: '200px',
            }}
          >
            <p className="aaaaa">Interpretação: Nome aqui</p>
            <p className="aaaaa">Texto: Nome aqui</p>
            <p className="aaaaa">Trilha: Nome aqui</p>
          </div> <br />

          <div id="title" className="title">
            <p>Título do Audio</p>
          </div>

          <AudioPlayer colorTheme='orange' src={audio} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '5px',
              marginTop: '20px',
              marginRight: '200px',
            }}
          >
            <p className="aaaaa">Interpretação: Nome aqui</p>
            <p className="aaaaa">Texto: Nome aqui</p>
            <p className="aaaaa">Trilha: Nome aqui</p>
          </div> <br />
          <div id="title" className="title">
            <p>Título do Audio</p>
          </div>

        <AudioPlayer colorTheme='orange' src={audio} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '5px',
              marginTop: '20px',
              marginRight: '200px',
            }}
          >
            <p className="aaaaa">Interpretação: Nome aqui</p>
            <p className="aaaaa">Texto: Nome aqui</p>
            <p className="aaaaa">Trilha: Nome aqui</p>
          </div>
        </section>
      
      </div>
    </WatermarkWrapper>
  );
};

export default AudiosTakeHome;