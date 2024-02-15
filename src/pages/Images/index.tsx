import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import tiktok from '../../assets/logo.png';
import imagem from '../../assets/icons/imagem - branco.svg';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import seta from '../../assets/seta voltar e abaixo - branco.svg';

const Images = () => {
  const navigate = useNavigate();
  return (
    <WatermarkWrapper>
      <div
        style={{
          backgroundColor: '#D66B00',
          height: '100vh',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <button
          className="back"
          onClick={() => {
            navigate('/takehome');
          }}
        >
          <img src={seta} alt="" />
        </button>
        <img
          src={tiktok}
          alt="tiktok"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '100px',
            marginBottom: '30px',
          }}
        />
        <div className="galeria">
          <img src={imagem} alt="" />
          <h2>GALERIA DE IMAGENS</h2>
        </div>

        <div className="fotos">
          <div
            className="foto"
            style={{
              background: '#F48306',
            }}
          ></div>
          <div
            className="foto"
            style={{
              background: '#009289',
            }}
          ></div>
          <div
            className="foto"
            style={{
              background: '#FFBF00',
            }}
          ></div>
          <div
            className="foto"
            style={{
              background: '#3D4B09',
            }}
          ></div>
          <div
            className="foto"
            style={{
              background: '#009289',
            }}
          ></div>
          <div
            className="foto"
            style={{
              background: '#F48306',
            }}
          ></div>
          <div
            className="foto"
            style={{
              background: '#3D4B09',
            }}
          ></div>
          <div
            className="foto"
            style={{
              background: '#FFBF00',
            }}
          ></div>
        </div>
      </div>
    </WatermarkWrapper>
  );
};

export default Images;
