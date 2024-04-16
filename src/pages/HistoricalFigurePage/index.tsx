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
            iconType="InfoEspacos"
            onClick={() => {
              navigate(`/historical-figure/${figureName}/infoView`);
            }}
          >
            INFORMAÇÕES
          </HomeButton>
          <HomeButton
            iconType="Location"
            onClick={() => {
              navigate(`/historical-figure/${figureName}/LocView`);
            }}
          >
            LOCALIZAÇÃO
          </HomeButton>
          <HomeButton
            iconType="VideoEspaco"
            onClick={() => {
              navigate(`/historical-figure/${figureName}/VideosView`);
            }}
          >
            VÍDEOS
          </HomeButton>
          <HomeButton
            iconType="ImgEspacos"
            onClick={() => {
              navigate(`/historical-figure/${figureName}/ImageView`);
            }}
          >
            IMAGENS
          </HomeButton>
          <HomeButton
            iconType="AudioEspaco"
            onClick={() => {
              navigate(`/historical-figure/${figureName}/AudiosView`);
            }}
          >
            ÁUDIOS
          </HomeButton>
          <HomeButton
            iconType="SelfieEspaco"
            onClick={() => {
              navigate(`/historical-figure/${figureName}/SelfieView`);
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
