import { useNavigate, useParams } from 'react-router-dom';

import loc from '../../../assets/icons/localização.svg';
import maps from '../../../assets/images/mapa-atalaia.png';
import Sidebar from '../../Atalaia/Sidebar';

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
            src={loc}
            alt="ícone de Localização"
            style={{
              width: '25px',
              height: '25px',
            }}
          />
          <h3>Localização</h3>
          <div></div>
        </C.InfoText>
        <img
          src={maps}
          style={{
            maxWidth: '130%',
            width: '568px',
            height: '568px',
          }}
        />
        <C.Here> <p> Você está aqui</p></C.Here>
      </C.Content>
      <C.NavFotter>
        <Sidebar />
      </C.NavFotter>
    </C.View>
  );
};

export default LocView;
