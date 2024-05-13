import React, { useRef, useState } from 'react';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import styled from 'styled-components';
import mapa from '../../assets/Mapa Serra da Barriga -  novo-03.webp';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import LocIcon from '../../assets/icons/localização mapa.svg';
import BtnDownArrow from '../../components/ScrollButton';
import logo from '../../assets/logo.png'
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
import { useNavigate } from 'react-router-dom';

const ButtonContainer = styled.div`
  display: flex;
  background-color: #67781b;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

 
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--square-color);
  border-radius: 50%;
  width: 55px;
  height: 55px;
  position: fixed;
  top: 7%;
  left: 5%;
  z-index: 10;
  cursor: pointer;
`;

const LocationButton = styled.button<{ x: number; y: number }>`
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${(props) => (props.y / 520) * 100}%;
  left: ${(props) => (props.x / 480) * 100}%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 35px;
  height: 35px; /* Aumentei o tamanho da bolinha */
  border-radius: 50%;
  z-index: 10;
 
  
`;

// Interface atualizada para coordenadas relativas
interface TooltipProps {
  x: string; // Agora é uma string representando um valor percentual
  y: string; // Agora é uma string representando um valor percentual
}

const Tooltip = styled.div<TooltipProps>`
  position: absolute;
  left: calc(${(props) => props.x}  ); /* Alterado para centralizar horizontalmente */
  top: calc(${(props) => props.y} - 6%);
  @media only screen 
  and (device-width: 430px) 
  and (device-height: 932px) 
  and (-webkit-device-pixel-ratio: 3) {
    left: calc(${(props) => props.x}  ); /* Alterado para centralizar horizontalmente */
  top: calc(${(props) => props.y} - 5%);
  }
  transform: translate(-50%, -50%);
  padding: 8px 16px;
  background: #FFFFFF;
  color: #67781B;
  font-family: 'FuturaPTDemi', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  z-index: 20;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    border-width: 5px;
    border-style: solid;
    border-color: #FFFFFF ;
    z-index: -1; 
  }
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
  'ESPAÇO AQUALTUNE',
  'OCAS INDÍGENAS',
  'ESPAÇO CAÁ-PUÊRA',
  'BATUCAJÉ',
  'ATALAIA DO ACAIUBA',
  'ONJÓ DE FARINHA',
  'ESPAÇO ZUMBI',
  'ATALAIA DO TOCULO',
  'RESTAURANTE KÚUKU-WAANA',
  'LAGOAS ENCATADA DOS NEGROS',
  'ESTÁTUA GANGA-ZUMBA E ZUMBI',
  'BANHEIROS'
];

interface LocationInfo {
  id: number;
  name: string;
  coordinates: { x: number; y: number };
}

const locationMappings: { [key: string]: { x: number; y: number } } = {
  'ENTRADA': { x: 208, y: 460 }, //1
  'ONJÓ CRUZAMBÊ': { x: 335, y: 461 },//2
  'OXILE DAS ERVAS': { x: 360, y: 448 },//3
  'ESPAÇO ACOTIRENE': { x: 377, y: 405 },//4
  'MUXIMA DE PALMARES': { x: 332, y: 373 },//5
  'ESPAÇO QUILOMBO': { x: 290, y: 403 },//6
  'ESPAÇO GANGA-ZUMBA': { x: 332, y: 292 },//7
  'ATALAIA DE ACAIENE': { x: 362, y: 234 },//8
  'OCAS INDÍGENAS': { x: 310, y: 254 },//9
  'ESPAÇO CAÁ-PUÊRA': { x: 278, y: 204 },//10
  'BATUCAJÉ': { x: 240, y: 201 },//11
  'ESTÁTUA GANGA-ZUMBA E ZUMBI': { x: 260, y: 315 },//12
  'BANHEIROS': { x: 202, y: 257 },//13
  'ATALAIA DO ACAIUBA': { x: 160, y: 263 },//14
  'ONJÓ DE FARINHA': { x: 205, y: 306 },//17
  'LAGOAS ENCATADA DOS NEGROS': { x: 227, y: 108 },//15
  'RESTAURANTE KÚUKU-WAANA': { x: 200, y: 380 },//18
  'ESPAÇO AQUALTUNE': { x: 250, y: 100 },//16
  'ATALAIA DO TOCULO': { x: 162, y: 458 },//19
  'ESPAÇO ZUMBI': { x: 162, y: 395 },//20
};

const locationInfos: LocationInfo[] = items.map((name, index) => {
  const coordinates = locationMappings[name] || { x: 0, y: 0 };

  return {
    id: index + 1,
    name,
    coordinates,
  };
});

const Maps: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<LocationInfo | null>(null);
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  const handleLocationClick = (locationInfo: LocationInfo) => {
    setSelectedLocation(locationInfo);
  };

 
  return (
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
        <img src={logo} alt="serra da barriga" style={{
          width:'180px',
          height:'66px',
          marginTop:'35px',
          marginBottom:'25px'

          
          

        }} />
        <BackButton onClick={() => navigate(-1)}>
          <img src={seta} alt="Voltar" />
        </BackButton>

        <ButtonContainer>
          <img src={LocIcon} alt="Localização" style={{ width: '30px', height: '30px', marginRight: '-10px', marginTop: '2px',  }} />
          <h2 style={{ fontFamily: 'FuturaPTDemi', letterSpacing: '0px', color: '#FFFFFF', fontSize: '30px' }}>Mapa</h2>

          <TransformWrapper initialScale={1} minScale={0.5} maxScale={4}   ref={transformComponentRef}  >
            <TransformComponent>
              <div style={{ position: 'relative', width:'280vw',display:'flex', alignItems:'center', justifyContent:'center', marginRight:'30px' }}>
                <img src={mapa} alt="mapa" style={{ width: '100vh', height: '95vh' }} />
      
                {locationInfos.map((location) => (
                  <LocationButton
                    key={location.id}
                    x={location.coordinates.x}
                    y={location.coordinates.y}
                    onClick={() => handleLocationClick(location)}
                    aria-label={`Local ${location.name}`}
                  />
                ))}

                {selectedLocation && (
                  <Tooltip x={(selectedLocation.coordinates.x / 480) * 100 + '%'} y={(selectedLocation.coordinates.y / 520) * 100 + '%'}>
                    {selectedLocation.name}
                  </Tooltip>
                )}
              </div>
            </TransformComponent> 
          </TransformWrapper>

          <BtnDownArrow />
        </ButtonContainer>

      </div>
    </WatermarkWrapper>
  );
};

export default Maps;
