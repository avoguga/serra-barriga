
import { useParams,  } from "react-router-dom";

import { EspacoData, getEspacoData } from "../../helpers/Espacos";


import * as C from './styles'




const SpaceHeader = () => {
    
  
   const { figureName } = useParams<{ figureName: string }>();
    
  
  const figureData: EspacoData | undefined = getEspacoData(figureName ?? ''); 
    if (!figureData) {
        return <p>Espaço não encontrado.</p>;
    }
    return (
      <>
       
      
          <C.AgroupImgs>
          <img
              src={figureData.icon } 
              alt={`Ilustração de ${figureData.title}`}
              style={{
                width: '200px',
                height: 'auto',
                margin: '100px 0 0 0',
              }}
            />
            <h1>{figureData.title}</h1>
            <p>{figureData.subtitle}</p>
          </C.AgroupImgs>
  
 
    </>

    );
  };
  
  export default SpaceHeader;