//import './style.css/';
import logo from '../../assets/logo.png';
import setaEsquerda from '../../assets/set_esquerda.svg';
import setaDireita from '../../assets/set_direita.svg';
import teste1 from '../../assets/iansã.png';
import teste2 from '../../assets/iansã.png';
import teste3 from '../../assets/iansã.png';
import teste4 from '../../assets/iansã.png';
import teste5 from '../../assets/iansã.png';
import teste6 from '../../assets/iansã.png';
import mapa from '../../assets/mapa - branco.svg';
import { useNavigate } from 'react-router-dom';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import styled from 'styled-components';

const ContainerGeral = styled.div`
    background: #D66B00 ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const BackBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #753D00;
    border-radius: 30px;
    width: 45px;
    height: 45px;
    align-self: self-start;
    margin-top: -40px; /* altura que está do topo */
    top: 50px; /* altura que vai parar antes do topo */
    left: 25px;
    position: sticky;
    margin-bottom: 50px;
`;

const SetaVoltar = styled.img`
    height: 23px;
    width: 23px;
    transform: translateX(-2px);
`

const Text = styled.div`
    color: white;
    margin: 16%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transform: translateY(20px);
    line-height: 2.1;
    font-size: 13px;
    font-weight: 100;
`;

const LogoStyle = styled.img`
    width: 40%;
    transform: translateY(60px);
    margin-bottom: 28px;
`;

const Mapa = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #586617;
    height: 110px;
    width: 110px;
    border-radius: 60px;
    margin-bottom: 30px;
`;

const MapaBtn = styled.button`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #586617;
    height: 110px;
    width: 110px;
    border-radius: 60px;
    margin-bottom: 30px;
`;

const MapaImg = styled.img`
    height: 110px;
    width: 110px;
    padding: 30px;
    transform: translateY(-5px);
`;

const MapaTexto = styled.p`
    color: white;
    transform: translateY(-25px);
    font-size: 15px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 15px;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 14px;
`;

const Carrossel = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
`;

const CarrosselImg = styled.img`
    width: 50%;
    display: block;
`;

const BtnSeta = styled.div`
    display: flex;
    gap: 280px;
`;

const Video = styled.iframe`
    background-color: var(--square-color);
    height: 170px; 
`;

const SerraDaBarriga2 = () => {
  
  const images = [
    { src: teste1 },
    { src: teste2 },
    { src: teste3 },
    { src: teste4 },
    { src: teste5 },
    { src: teste6 },
  ];

  const navigate = useNavigate();

  return (
      <ContainerGeral>
      <BackBtn
          onClick={() => {
            navigate('/takehome');
          }}
        >
        <SetaVoltar src={seta} alt=""/>
      </BackBtn>
        <LogoStyle src={logo} className="logoStyle" />
        <Text>
          <strong>Serra da Barriga</strong> está localizada no atual município
          de União dos Palmares, no estado de Alagoas. À época do Quilombo dos
          Palmares, fazia parte da Capitania de Pernambuco. Foi tombada pelo
          Instituto do Patrimônio Histórico e Artístico Nacional em 1986.
        </Text>
        <Mapa>
          <MapaBtn 
          onClick={() => {
            navigate('/takehome');
          }}
          >
            <MapaImg src={mapa} alt=""/>
            <MapaTexto className='mapa-text'>MAPA</MapaTexto> 
          </MapaBtn>
        </Mapa>
        <Title>FOTOS</Title>
        <Carrossel>
          {images.map((image, index) => (
            <CarrosselImg key={index} src={image.src} />
          ))}
        </Carrossel>
        <BtnSeta>
          <button>
            <img src={setaEsquerda} />
          </button>
          <button>
            <img src={setaDireita} />
          </button>
        </BtnSeta>
        <Title>VÍDEOS</Title>
        <Video
          src="https://www.youtube.com/embed/USLC-TsQdnI"
          title="Memórias de luta na Serra da Barriga"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Video>
        <BtnSeta>
          <button>
            <img src={setaEsquerda} />
          </button>
          <button>
            <img src={setaDireita} />
          </button>
        </BtnSeta>
      </ContainerGeral>
  );
};

export default SerraDaBarriga2;
