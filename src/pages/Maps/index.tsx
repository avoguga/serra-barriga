import { Outlet, useNavigate,  } from 'react-router-dom';
import { useState } from 'react';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import styled from 'styled-components';
import tiktok from '../../assets/logo.png';
import mapa from '../../assets/Mapa Serra da Barriga -  novo-03.webp';
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
  position: fixed;
  transform: translate(-50%, -50%); // Centraliza o botão em suas coordenadas
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  background-color: transparent; // Cor vermelha semi-transparente para visibilidade
  border: none;
  cursor: pointer;
  width: 20px; // Largura do marcador
  height: 20px; // Altura do marcador
  border-radius: 50%;
  z-index: 10;
`;

const Tooltip = styled.div <{ x: number; y: number }> `
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  transform: translate(-50%, -150%); // Isso vai posicionar o tooltip acima do marcador
  padding: 8px 16px;
  background: #FFFFFF; // Fundo amarelo claro como na imagem
  color: #67781B; // Cor do texto verde-escuro
  font-family: 'FuturaPTDemi', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 10px; // Borda arredondada
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); // Sombra leve para destacar
  white-space: nowrap; // Evitar quebra de linha
  z-index: 20;
  
  &:after { // Criar um triângulo na parte de baixo do tooltip
    content: '';
    position: absolute;
    bottom: -5px; // Posicionar logo abaixo do tooltip
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
  'ENTRADA': { x: 155, y: 460 },
  'ONJÓ CRUZAMBÊ': { x: 315, y: 461 },
  'OXILE DAS ERVAS': { x: 350, y: 448 },
  'ESPAÇO ACOTIRENE': { x: 370, y: 405 },
  'MUXIMA DE PALMARES': { x: 312, y: 373 },
  'ESPAÇO QUILOMBO': { x: 257, y: 403 },
  'ESPAÇO GANGA-ZUMBA': { x: 314, y: 292 },
  'ATALAIA DE ACAIENE': { x: 350, y: 234 },
  'OCAS INDÍGENAS': { x: 285, y: 254 },
  'ESPAÇO CAÁ-PUÊRA': { x: 245, y: 204 },
  'BATUCAJÉ': { x: 195, y: 201 },
  'ESTÁTUA GANGA-ZUMBA E ZUMBI': { x: 220, y: 315 },
  'BANHEIROS': { x: 145, y: 257 },
  'ATALAIA DO ACAIUBA': { x: 92, y: 263 },
  'ONJÓ DE FARINHA': { x: 151, y: 306 },
  'LAGOAS ENCATADA DOS NEGROS': { x: 180, y: 108 },
  'RESTAURANTE KÚUKU-WAANA': { x: 140, y: 380 },

  'ESPAÇO AQUALTUNE': { x: 207, y: 100 },
  'ATALAIA DO TOCULO': { x: 97, y: 458 },
  'ESPAÇO ZUMBI': { x: 97, y: 395 },

  
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
                <div style={{ position: 'relative', width:'100vw', display:'flex', alignItems:'center', justifyContent:'center', marginRight:'30px' }}>
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
                    <Tooltip  x={selectedLocation.coordinates.x} y={selectedLocation.coordinates.y}>
                      {selectedLocation.name}
                    </Tooltip>
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
