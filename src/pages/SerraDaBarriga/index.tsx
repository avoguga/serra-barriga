import './style.css/';
import logo from '../../assets/logo.png';
import setaEsquerda from '../../assets/set_esquerda.svg';
import setaDireita from '../../assets/set_direita.svg';
import teste1 from '../../assets/iansã.png';
import teste2 from '../../assets/iansã.png';
import teste3 from '../../assets/iansã.png';
import teste4 from '../../assets/iansã.png';
import teste5 from '../../assets/iansã.png';
import teste6 from '../../assets/iansã.png';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import FloatingButtonBar from '../../components/FloatingContainer';

const SerraDaBarriga = () => {
  const images = [
    { src: teste1 },
    { src: teste2 },
    { src: teste3 },
    { src: teste4 },
    { src: teste5 },
    { src: teste6 },
  ];

  return (
    <WatermarkWrapper watermark watermarkImage={WatermarkImage}>
      <FloatingButtonBar backgroundColor="#8C111B" />
      <div className="container">
        <img
          src={logo}
          alt="logo serra da barriga"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '100px',
            marginBottom: '30px',
          }}
        />
        <div className="text">
          <strong>Serra da Barriga</strong> está localizada no atual município
          de União dos Palmares, no estado de Alagoas. À época do Quilombo dos
          Palmares, fazia parte da Capitania de Pernambuco. Foi tombada pelo
          Instituto do Patrimônio Histórico e Artístico Nacional em 1986.
        </div>
        <div className="title">FOTOS</div>
        <div className="carrosel">
          {images.map((image, index) => (
            <img key={index} src={image.src} className="image" />
          ))}
        </div>
        <div className="btnSeta">
          <button>
            <img src={setaEsquerda} />
          </button>
          <button>
            <img src={setaDireita} />
          </button>
        </div>
        <div className="title">VÍDEOS</div>
        <iframe
          src="https://www.youtube.com/embed/USLC-TsQdnI"
          title="Memórias de luta na Serra da Barriga"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="video"
        ></iframe>
        <div className="btnSeta">
          <button>
            <img src={setaEsquerda} />
          </button>
          <button>
            <img src={setaDireita} />
          </button>
        </div>
      </div>
    </WatermarkWrapper>
  );
};

export default SerraDaBarriga;
