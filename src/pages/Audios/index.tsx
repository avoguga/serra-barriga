import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import styled from 'styled-components';
import imagem from '../../assets/icons/audio.svg';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import './styles.css';

const Audios = () => {
  const navigate = useNavigate();
  return (
    <WatermarkWrapper>
      <div className="fundo">
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
            <h2>Título do Audio</h2>
          </div>
          <audio controls className="audio">
            <source src="https://www.computerhope.com/jargon/m/example.mp3" />
          </audio>
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
            <h3 className="aaaaa">Interpretação: Nome aqui</h3>
            <h3 className="aaaaa">Texto: Nome aqui</h3>
            <h3 className="aaaaa">Trilha: Nome aqui</h3>
          </div>
        </section>
        <section
          style={{
            marginBottom: '20px',
          }}
          id="audios"
          className="audios"
        >
          <div id="title" className="title">
            <h2>Título do Audio</h2>
          </div>
          <audio controls className="audio">
            <source src="https://www.computerhope.com/jargon/m/example.mp3" />
          </audio>
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
            <h3 className="aaaaa">Interpretação: Nome aqui</h3>
            <h3 className="aaaaa">Texto: Nome aqui</h3>
            <h3 className="aaaaa">Trilha: Nome aqui</h3>
          </div>
        </section>
        <section
          style={{
            marginBottom: '20px',
          }}
          id="audios"
          className="audios"
        >
          <div id="title" className="title">
            <h2>Título do Audio</h2>
          </div>
          <audio controls className="audio">
            <source src="https://www.computerhope.com/jargon/m/example.mp3" />
          </audio>
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
            <h3 className="aaaaa">Interpretação: Nome aqui</h3>
            <h3 className="aaaaa">Texto: Nome aqui</h3>
            <h3 className="aaaaa">Trilha: Nome aqui</h3>
          </div>
        </section>
      </div>
    </WatermarkWrapper>
  );
};

export default Audios;
