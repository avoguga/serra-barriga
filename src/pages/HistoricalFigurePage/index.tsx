import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEspacoData, EspacoData } from '../../helpers/Espacos'; // Importe os tipos de dados corretos
import * as C from './styles'; // Importe os estilos corretamente
import FloatingButtonBar from '../../components/FloatingContainer';
import HomeButton from '../../components/HomeButton';

const HistoricalFigurePage: React.FC = () => {
  const { figureName } = useParams<{ figureName: string }>();
  const figureData: EspacoData | undefined = getEspacoData(figureName ?? ''); 
  const navigate = useNavigate();

  return (
    <>
      <FloatingButtonBar backgroundColor="#586617"  backBgColor='#313A0A'/>
      <C.PersonalityContainer>
        {figureData ? (
          <>  
         
          

         <C.ContentHeader>
              <C.PersonalityImage
                src={figureData.icon}
                alt={figureData.title}
                
              />
              <C.PersonalityTitle>{figureData.title}</C.PersonalityTitle>
              <C.Subtitle> {figureData.subtitle} </C.Subtitle>


      

              </C.ContentHeader> 
              <C.AgroupButtons>
          <HomeButton
            iconType="Info"
            onClick={() => {
              navigate('/#');
            }}
          >
            INFORMAÇÕES
          </HomeButton>
          <HomeButton
            iconType="Location"
            onClick={() => {
              navigate('/#');
            }}
          >
            LOCALIZAÇÃO
          </HomeButton>
          <HomeButton
            iconType="Video"
            onClick={() => {
              navigate('/#');
            }}
          >
            VÍDEOS
          </HomeButton>
          <HomeButton
            iconType="Img"
            onClick={() => {
              navigate('/#');
            }}
          >
            IMAGENS
          </HomeButton>
          <HomeButton
            iconType="Audio"
            onClick={() => {
              navigate('/#');
            }}
          >
            ÁUDIOS
          </HomeButton>
          <HomeButton
            iconType="Selfie"
            onClick={() => {
              navigate('/#');
            }}
          >
            SELFIE HISTÓRICA
          </HomeButton>
        </C.AgroupButtons>
          
           
         
           
          </>
        ) : (
          <p>Figura histórica não encontrada.</p>
        )}
      </C.PersonalityContainer>
    </>
  );
};

export default HistoricalFigurePage;
