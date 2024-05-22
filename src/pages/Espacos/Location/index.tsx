import { useNavigate, useParams } from 'react-router-dom';

import loc from '../../../assets/icons/i_localização pagina.png';
import maps from '../../../assets/images/Mapa Memorial Serra da Barriga - novo-03 (1).webp';
import Sidebar from '../Sidebar';

import LowArrow from '../../../components/LowArrowButton';

import * as C from './styles'

import { EspacoData, getEspacoData } from '../../../helpers/Espacos';


const LocView = () => {
    const navigate = useNavigate();
    const { figureName } = useParams<{ figureName: string }>();
    
   
   const figureData: EspacoData | undefined = getEspacoData(figureName ?? ''); 

  
  if (!figureData) {
      return <p>Espaço não encontrado.</p>;
  }


  return (
    <C.View>
      <C.Nav>
      <LowArrow onClick={() => navigate(`/historical-figure/${figureName}`)} isActive={true} />
      </C.Nav>

      <C.Content> 
     <h1>{figureData.title} </h1>
     <p>{figureData.subtitle} </p>
        <C.InfoText>
          <img
          loading='lazy'
            src={loc}
            alt="ícone de Localização"
            style={{
              width: '35px',
              height: '35px',
            }}
          />
          <h3>Localização</h3>
          <div></div>
        </C.InfoText>
        <C.ImageContent>

        <C.MapContainer>
    <img
      src={maps}
      alt="Mapa do Atalaia de Acaiuaba"
      loading='lazy'
    />
 
    <C.Marker 
    posX="10%"
    posY="38%" 
        >
          ATALAIA DO ACAIUBA
        </C.Marker>

  </C.MapContainer>
          </C.ImageContent>
        
      </C.Content>
      <C.NavFotter>
        
        <Sidebar activeSection='LocView'  />
      </C.NavFotter>
    </C.View>
  );
};

export default LocView;
