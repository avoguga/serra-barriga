import React from 'react';
import { useParams } from 'react-router-dom';
import { getEspacoData, EspacoData } from '../../helpers/Espacos'; // Importe os tipos de dados corretos
import * as C from './styles'; // Importe os estilos corretamente
import FloatingButtonBar from '../../components/FloatingContainer';

const HistoricalFigurePage: React.FC = () => {
  const { figureName } = useParams<{ figureName: string }>();
  const figureData: EspacoData | undefined = getEspacoData(figureName ?? ''); // Passe o figureName como argumento para getEspacoData

  return (
    <>
      <FloatingButtonBar backgroundColor="#8C111B" />
      <C.PersonalityContainer>
        {figureData ? (
          <>  
          <C.BorderContainer>
            <C.PersonalityDescription>
          

              <div>
              <C.PersonalityTitle>{figureData.title}</C.PersonalityTitle>


              {figureData.description.pt}

              </div>
              <C.PersonalityImage
                src={figureData.icon}
                alt={figureData.title}
                style={{fill: '#ffffff'}}
              />
            </C.PersonalityDescription>{' '}
            <C.DescriptionEn>{figureData.description.en}</C.DescriptionEn>
           
            </C.BorderContainer>
           
          </>
        ) : (
          <p>Figura histórica não encontrada.</p>
        )}
      </C.PersonalityContainer>
    </>
  );
};

export default HistoricalFigurePage;
