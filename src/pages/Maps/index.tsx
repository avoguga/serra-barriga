import { Outlet, useNavigate } from 'react-router-dom';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import styled from 'styled-components';
import tiktok from '../../assets/logo.png';
import mapa from '../../assets/mapa.png';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
//import { Icons } from '../../helpers/icons';
import LocIcon from '../../assets/icons/localização.svg';
import Pointer from '../../assets/icons/dedo clicando - branco.svg';
import BtnDownArrow from '../../components/ScrollButton';

//const HomeIcon = Icons['Arqueologia'];

const ButtonContainer = styled.div`
  display: flex;
  background-color: #67781b;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 0 10px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--square-color);
  border-radius: 50%;
  width: 55px;
  height: 55px;
  position: fixed; // Alterado de absolute para fixed
  top: 7%;
  left: 5%;
  z-index: 10;
  cursor: pointer;
`;

const Item = styled.p<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  color: white;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  margin: 0;
`;

const items = [
  'ENTRADA',
  'OXILE DAS ERVAS',
  'ONJÓ CRUZAMBÊ',
  'ESPAÇO ACOTIRENE',
  'MUXIMA DE PALMARES',
  'ESPAÇO QUILOMBO',
  'ATALAIA DE ACAIENE',
  'ESPAÇO GANGA-ZUMBA',
  'LAGOA ENCANTADA DOS NEGROS',
  'ESPAÇO AQUALTUNE',
  'OCAS INDÍGENAS',
  'ESPAÇO CAÁ-PUÊRA',
  'BATUCAJÉ',
  'ATALAIA DO ACAIUBA',
  'ONJÓ DE FARINHA',
  'ESPAÇO ZUMBI',
  'ATALAIA DO TOCULO',
  'RESTAURANTE KÚUKU-WAANA',
];

const Maps = () => {
  const navigate = useNavigate();

  const getBackgroundColor = (index) => {
    const colors = ['#586617', '#67781B'];
    return colors[index % colors.length];
  };

  return (
    <>
      <Outlet />
      <WatermarkWrapper watermarkImage={WatermarkImage}>
        <div
          style={{
            backgroundColor: '#67781B',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <BackButton
            onClick={() => {
              navigate('/takehome/serra-da-barriga');
            }}
          >
            <img src={seta} alt="" />
          </BackButton>
          <img
            onClick={() => {
              navigate('/');
            }}
            src={tiktok}
            alt="tiktok"
            style={{
              width: '200px',
              height: '70px',
              marginTop: '50px',
              marginBottom: '60px',
            }}
          />

          <ButtonContainer>
            <img
              src ={LocIcon}
              style={{
                width: '30px',
                height: '30px',
                marginRight: '-10px',
                marginTop: '2px',

              }}
            />
            <h2
              style={{
                font: 'normal normal 500 22px/30px ',
                letterSpacing: '0px',
                color: '#FFFFFF',
                fontSize: '30px'
              }}
            >
              Mapa
            </h2>

            <img
              onClick={() => {
                navigate('/');
              }}
              src={mapa}
              alt="mapa"
              style={{
                width: '500px',
                height: '520px',
                marginTop: '-60px',
                marginBottom: '50px',
              }}
            />
            <img
              src={Pointer}
              style={{
                width: '65px',
                height: '65px',
                marginTop: '-140px',
                marginBottom: '-10px'
              }}
            />
            <BtnDownArrow/>
          </ButtonContainer>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              backgroundColor: '#67781B',
              marginTop: '-30px'
            }}
          >
            {items.map((item, index) => (
              <Item key={index} bgColor={getBackgroundColor(index)}>
                {index + 1} - {item}
              </Item>
            ))}
          </div>
        </div>
      </WatermarkWrapper>
    </>
  );
};

export default Maps;
