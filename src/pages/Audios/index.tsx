import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import styled from 'styled-components';
import imagem from '../../assets/icons/audio.svg';
import { useNavigate } from 'react-router-dom';
import tiktok from '../../assets/icons/app serra.svg';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import './styles.css';

const Audios = () => {
  const navigate = useNavigate();
  return (
    <WatermarkWrapper>
      <div className='fundo'>
        <button className='back' 
        onClick={() => {
          navigate('/takehome');
        }}>
            <img src={seta} alt="" />
        </button>
        <img
          src={tiktok}
          alt="tiktok"
          style={{
            width: '100%',
            height: '102px',
            marginTop: '140px',
            marginBottom: '30px',
          }}
        />
        <div className='galeria'>
          <img src={imagem} alt="" />
          <h2>
            GALERIA DE AUDIOS
         </h2>
        </div>
        <section id='audios' className='audios'>
          <div id='title' className='title'>
            <h2>Título do Audio</h2>
          </div>
          <audio controls className='audio'>
          <source src="https://www.computerhope.com/jargon/m/example.mp3" />
          </audio>
          
        </section>
      </div>
    </WatermarkWrapper>
  );
};

export default Audios;
