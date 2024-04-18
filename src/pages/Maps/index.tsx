import React, { useState } from 'react';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import styled from 'styled-components';
import mapa from '../../assets/Mapa Serra da Barriga -  novo-03.webp';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import LocIcon from '../../assets/icons/localização.svg';
import BtnDownArrow from '../../components/ScrollButton';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useNavigate } from 'react-router-dom';

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
  @media only screen 
  and (device-width: 430px) 
  and (device-height: 932px) 
  and (-webkit-device-pixel-ratio: 3) {
    width: 30px;
    height: 30px; /* Ajuste para o iPhone 14 Pro Max */
    left: ${(props) => (props.x / 500) * 100}%;
  }
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
    left: calc(${(props) => props.x} - 3% ); /* Alterado para centralizar horizontalmente */
  top: calc(${(props) => props.y} - 6%);
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
  'ENTRADA': { x: 185, y: 460 },
  'ONJÓ CRUZAMBÊ': { x: 400, y: 461 },
  'OXILE DAS ERVAS': { x: 445, y: 448 },
  'ESPAÇO ACOTIRENE': { x: 470, y: 405 },
  'MUXIMA DE PALMARES': { x: 395, y: 373 },
  'ESPAÇO QUILOMBO': { x: 320, y: 403 },
  'ESPAÇO GANGA-ZUMBA': { x: 395, y: 292 },
  'ATALAIA DE ACAIENE': { x: 445, y: 234 },
  'OCAS INDÍGENAS': { x: 355, y: 254 },
  'ESPAÇO CAÁ-PUÊRA': { x: 305, y: 204 },
  'BATUCAJÉ': { x: 240, y: 201 },
  'ESTÁTUA GANGA-ZUMBA E ZUMBI': { x: 275, y: 315 },
  'BANHEIROS': { x: 175, y: 257 },
  'ATALAIA DO ACAIUBA': { x: 105, y: 263 },
  'ONJÓ DE FARINHA': { x: 185, y: 306 },
  'LAGOAS ENCATADA DOS NEGROS': { x: 220, y: 108 },
  'RESTAURANTE KÚUKU-WAANA': { x: 170, y: 380 },
  'ESPAÇO AQUALTUNE': { x: 257, y: 100 },
  'ATALAIA DO TOCULO': { x: 112, y: 458 },
  'ESPAÇO ZUMBI': { x: 112, y: 395 },
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
        <BackButton onClick={() => navigate('/takehome/serra-da-barriga')}>
          <img src={seta} alt="Voltar" />
        </BackButton>

        <ButtonContainer>
          <img src={LocIcon} alt="Localização" style={{ width: '30px', height: '30px', marginRight: '-10px', marginTop: '2px', fill:'#FFF' }} />
          <h2 style={{ fontFamily: 'FuturaPTDemi', letterSpacing: '0px', color: '#FFFFFF', fontSize: '30px' }}>Mapa</h2>

          <TransformWrapper>
            <TransformComponent>
              <div style={{ position: 'relative', width:'100vw', display:'flex', alignItems:'center', justifyContent:'center', marginRight:'30px' }}>
                <img src={mapa} alt="mapa" style={{ width: '480px', height: '520px' }} />
                
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
