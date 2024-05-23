import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import styled from 'styled-components';
import mapa from '../../assets/Mapa Serra da Barriga -  novo-03.webp';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import LocIcon from '../../assets/icons/localização mapa.svg';
import BtnDownArrow from '../../components/ScrollButton';
import logo from '../../assets/logo.png';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

import zoomIn from '../../assets/icons/botao +.svg';
import zoomOut from '../../assets/icons/botao -.svg';
import pinca from '../../assets/icons/pinça.svg';
import * as C from './styles';
import FloatingButtonBar from '../../components/FloatingContainer';
import { getEspacoData } from '../../helpers/Espacos';

const ButtonContainer = styled.div`
  display: flex;
  background-color: #67781b;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 10px; /* Ajusta o espaço entre os botões e o mapa */
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
  width: 45px;
  height: 45px;
  border-radius: 50%;
  z-index: 10;
`;

interface TooltipProps {
  x: string;
  y: string;
}

const Tooltip = styled.div<TooltipProps>`
  position: absolute;
  left: calc(${(props) => props.x});
  top: calc(${(props) => props.y} - 4%);
  transform: translate(-50%, -50%);
  padding: 8px 16px;
  background: #ffffff;
  color: #67781b;
  font-family: 'FuturaPTDemi', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  z-index: 20;
  cursor: pointer; /* Adiciona o cursor pointer para indicar que é clicável */
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    border-width: 5px;
    border-style: solid;
    border-color: #ffffff;
    z-index: -1; 
  }
`;

const MapaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px; /* Ajusta o espaço entre os botões e o mapa */

  img {
    color: #ffbf00;
  }
`;

const items = [
  'ENTRADA', 'Espaço Oxile das Ervas', 'Espaço Onjó Cruzambe', 'Espaço Acotirene', 'Espaço Muxima de Palmares',
  'Espaço Quilombo dos Palmares', 'Espaço Atalaia Acaiene', 'Espaço Ganga Zumba', 'Espaço Aqualtune',
  'Espaço Ocas indígenas', 'Espaço Caá-Puera', 'Espaço Batucajé', 'Espaço Atalaia de Acaiuba', 'Espaço Onjó de Farinha',
  'Espaço Lagoa Encantada dos Negros', 'Espaço Restaurante Kúuku-Waana', 'ESTÁTUA GANGA-ZUMBA E ZUMBI', 'BANHEIROS', 'Espaço Atalaia de Toculo', 'Espaço Zumbi'
];

interface LocationInfo {
  id: number;
  name: string;
  coordinates: { x: number; y: number };
}

const locationMappings: { [key: string]: { x: number; y: number } } = {
  'ENTRADA': { x: 185, y: 342 }, 'Espaço Onjó Cruzambe': { x: 360, y: 340 }, 'Espaço Oxile das Ervas': { x: 395, y: 330 },
  'Espaço Acotirene': { x: 415, y: 300 }, 'Espaço Muxima de Palmares': { x: 355, y: 275 }, 'Espaço Quilombo dos Palmares': { x: 295, y: 300 },
  'Espaço Ganga Zumba': { x: 355, y: 215 }, 'Espaço Atalaia Acaiene': { x: 395, y: 175 }, 'Espaço Ocas indígenas': { x: 325, y: 187 },
  'Espaço Caá-Puera': { x: 280, y: 150 }, 'Espaço Batucajé': { x: 230, y: 150 }, 'ESTÁTUA GANGA-ZUMBA E ZUMBI': { x: 255, y: 230 },
  'BANHEIROS': { x: 175, y: 190 }, 'Espaço Atalaia de Acaiuba': { x: 120, y: 195 }, 'Espaço Onjó de Farinha': { x: 185, y: 225 },
  'Espaço Lagoa Encantada dos Negros': { x: 210, y: 80 }, 'Espaço Restaurante Kúuku-Waana': { x: 173, y: 280 },
  'Espaço Aqualtune': { x: 245, y: 75 },'Espaço Atalaia de Toculo': { x: 125, y: 340 },'Espaço Zumbi': { x: 125, y: 295 },
};

const locationInfos: LocationInfo[] = items.map((name, index) => {
  const coordinates = locationMappings[name] || { x: 0, y: 0 };
  return { id: index + 1, name, coordinates };
});

const Maps: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationInfo | null>(null);
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  const navigate = useNavigate();

  const handleLocationClick = (locationInfo: LocationInfo) => {
    console.log('Location clicked:', locationInfo); // Log para depuração
    if (selectedLocation?.id === locationInfo.id) {
      setSelectedLocation(null); 
    } else {
      setSelectedLocation(locationInfo);
      if (transformComponentRef.current) {
        transformComponentRef.current.zoomToElement(`#location-${locationInfo.id}`, 1.5, 2000);
      }
    }
  };

  const handleTooltipClick = () => {
    console.log('Tooltip clicked'); // Log para depuração
    if (selectedLocation) {
      console.log('Selected location:', selectedLocation); // Log para depuração
      const espacoData = getEspacoData(selectedLocation.name);
      if (espacoData) {
        console.log('Navigating to:', espacoData.path); // Log para depuração
        navigate(espacoData.path);
      } else {
        console.log('No espaco data found for:', selectedLocation.name); // Log para depuração
      }
    }
  };

  const handleZoomIn = () => {
    if (transformComponentRef.current) {
      transformComponentRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (transformComponentRef.current) {
      transformComponentRef.current.zoomOut();
    }
  };

  return ( 
    <WatermarkWrapper watermarkImage={WatermarkImage}>
      <FloatingButtonBar backBgColor='#313A0A'/>
      <div
        style={{
          backgroundColor: '#67781B',
          height: '115vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '80px', /* Ajuste o espaço superior */
        }}
      >
        <img src={logo} alt="serra da barriga" style={{ width: '180px', height: '66px', marginBottom: '25px' }} />
      
        <ButtonContainer>
          <MapaContainer>
            <img src={LocIcon} alt="Localização" style={{ width: '30px', height: '30px', marginRight: '-10px', marginTop: '2px' }} />
            <h2 style={{ fontFamily: 'FuturaPTDemi', letterSpacing: '0px', color: '#FFFFFF', fontSize: '30px', margin: '0' }}>Mapa</h2>
            <C.ZoomButton onClick={handleZoomIn}>
              <img src={zoomIn} alt="Zoom In" style={{ width: '20px', height: '20px' }} />
            </C.ZoomButton>
            <C.ZoomButton onClick={handleZoomOut}>
              <img src={zoomOut} alt="Zoom Out" style={{ width: '20px', height: '20px' }} />
            </C.ZoomButton>
          </MapaContainer>
        </ButtonContainer>
        <TransformWrapper
          initialScale={0.5}
          minScale={0.5}
          maxScale={3}
          ref={transformComponentRef}
          centerOnInit={true}
          onZoomStop={({ state }) => {
            if (state.scale > 1) {
              transformComponentRef.current?.centerView(1000);
            }
          }}
        >
          <TransformComponent>
            <div style={{ position: 'relative', width: '105vh', height: '135vh', display: 'flex', justifyContent: 'baseline', alignItems: 'center', flexDirection:'column' }}>
              <img src={mapa} alt="mapa" style={{ width: '100%', height: '100vh', marginRight:'35px' }} />
              {locationInfos.map((location) => (
                <LocationButton
                  key={location.id}
                  id={`location-${location.id}`}
                  x={location.coordinates.x}
                  y={location.coordinates.y}
                  onClick={() => handleLocationClick(location)}
                  aria-label={`Local ${location.name}`}
                />
              ))}
              {selectedLocation && (
                <Tooltip
                  x={(selectedLocation.coordinates.x / 480) * 100 + '%'}
                  y={(selectedLocation.coordinates.y / 520) * 100 + '%'}
                  onClick={handleTooltipClick}
                >
                  {selectedLocation.name}
                </Tooltip>
              )}
            </div>
          </TransformComponent>
        </TransformWrapper> <br />
              <div  style={{ width: '50px', height: '150px', position: 'absolute', top: '92%',  }}>
              <img src={pinca} alt="Pinça" style={{ width: '50px', height: '50px' }} />
              </div>
        <BtnDownArrow />
      </div>
    </WatermarkWrapper>
  );
};

export default Maps;
