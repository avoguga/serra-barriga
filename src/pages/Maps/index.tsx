import { Outlet, useNavigate,  } from 'react-router-dom';
import { useState } from 'react';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import styled from 'styled-components';
import tiktok from '../../assets/logo.png';
import mapa from '../../assets/Mapa Serra da Barriga -  novo-03.png';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
//import { Icons } from '../../helpers/icons';
import LocIcon from '../../assets/icons/localização.svg';
import BtnDownArrow from '../../components/ScrollButton';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

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


const LocationButton = styled.button<{ x: number; y: number }>`
  position: absolute;
  transform: translate(-50%, -50%); // Centraliza o botão em suas coordenadas
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  background-color: rgba(255, 0, 0, 0.5); // Cor vermelha semi-transparente para visibilidade
  border: none;
  cursor: pointer;
  width: 20px; // Largura do marcador
  height: 20px; // Altura do marcador
  border-radius: 50%;
  z-index: 10;
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

interface LocationInfo {
  id: number;
  name: string;
  coordinates: { x: number; y: number };
}

const locationMappings: { [key: string]: { x: number; y: number } } = {
  'ENTRADA': { x: 185, y: 460 },
  'OXILE DAS ERVAS': { x: 345, y: 461 },
  'ONJÓ CRUZAMBÊ': { x: 380, y: 448 },
  'ESPAÇO ACOTIRENE': { x: 400, y: 405 },
  'MUXIMA DE PALMARES': { x: 342, y: 373 },
  'ESPAÇO QUILOMBO': { x: 287, y: 403 },
  'ESPAÇO GANGA-ZUMBA': { x: 344, y: 292 },
  'ATALAIA DE ACAIENE': { x: 380, y: 234 },
  'LAGOA ENCANTADA DOS NEGROS': { x: 315, y: 254 },
  'ESPAÇO AQUALTUNE': { x: 275, y: 204 },
  'OCAS INDÍGENAS': { x: 225, y: 201 },
  'ESPAÇO CAÁ-PUÊRA': { x: 250, y: 315 },
  'BATUCAJÉ': { x: 175, y: 257 },
  'ATALAIA DO ACAIUBA': { x: 122, y: 263 },
  'ONJÓ DE FARINHA': { x: 210, y: 108 },
  'ESPAÇO ZUMBI': { x: 237, y: 100 },
  'ATALAIA DO TOCULO': { x: 181, y: 306 },
  'RESTAURANTE KÚUKU-WAANA': { x: 170, y: 380 },


  
};

const locationInfos: LocationInfo[] = items.map((name, index) => {
  // Use o mapeamento para encontrar as coordenadas, ou use um padrão
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
          {/* Botão de retorno */}
          <BackButton
            onClick={() => {
              navigate('/takehome/serra-da-barriga');
            }}
          >
            <img src={seta} alt="Voltar" />
          </BackButton>

          {/* Logo */}
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

          {/* Container do Mapa */}
          <ButtonContainer>
            {/* Ícone de localização e Título do Mapa */}
            <img src={LocIcon} alt="Localização" style={{
              width: '30px',
              height: '30px',
              marginRight: '-10px',
              marginTop: '2px',
              fill:'#FFF',
            
            }} />
            <h2 style={{
              font: 'normal normal 500 22px/30px ',
              letterSpacing: '0px',
              color: '#FFFFFF',
              fontSize: '30px'
            }}>
              Mapa
            </h2>

            <TransformWrapper>
              <TransformComponent>
                {/* Imagem do Mapa e Botões de Localização */}
                <div style={{ position: 'relative', width:'100vw', display:'flex', alignItems:'center' }}>
                  <img src={mapa} alt="mapa" style={{ width: '450px', height: '520px' }} />
                  
                  {/* Botões dos Locais */}
                  {locationInfos.map((location) => (
                    <LocationButton
                      key={location.id}
                      x={location.coordinates.x}
                      y={location.coordinates.y}
                      onClick={() => handleLocationClick(location)}
                      aria-label={`Local ${location.name}`}
                    >
                      {/* ... */}
                    </LocationButton>
                  ))}

                  {/* Tooltip de informações do local selecionado */}
                  {selectedLocation && (
                    <div style={{
                      position: 'absolute',
                      left: selectedLocation.coordinates.x,
                      top: selectedLocation.coordinates.y,
                      padding: '5px',
                      background: 'white',
                      border: '1px solid black',
                      borderRadius: '4px',
                      zIndex: 20,
                      color:'#000000'
                    }}>
                      {selectedLocation.name}
                    </div>
                  )}
                </div>
              </TransformComponent> 
            </TransformWrapper>

            {/* Ícone de dica e Botão de Rolagem para Baixo */}
           
            <BtnDownArrow/>
          </ButtonContainer>

        
          </div>
        
      </WatermarkWrapper>
    </>
  );
};

export default Maps;
