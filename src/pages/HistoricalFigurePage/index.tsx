import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEspacoData, EspacoData } from '../../helpers/Espacos';
import * as C from './styles';
import FloatingButtonBar from '../../components/FloatingContainer';
import HomeButton from '../../components/HomeButton';

const HistoricalFigurePage: React.FC = () => {
  const { figureName } = useParams<{ figureName: string }>();
  const [figureData, setFigureData] = useState<EspacoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      if (!figureName) {
        setError('Nome da figura histórica não fornecido.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await getEspacoData(figureName);
        if (!data) {
          setError('Dados não encontrados.');
          setLoading(false);
          return;
        }
        setFigureData(data);
        setError(null);
      } catch (e) {
        setError('Erro ao carregar dados.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [figureName]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!figureData) {
    return <p>Figura histórica não encontrada.</p>;
  }

  return (
    <>
      <FloatingButtonBar backgroundColor="#586617" backBgColor="#313A0A" />
      <C.PersonalityContainer>
        <C.ContentHeader>
          <C.PersonalityImage
            src={figureData.icon}
            alt={figureData.title}
            loading="lazy"
          />
          <C.PersonalityTitle>{figureData.title}</C.PersonalityTitle>
          <C.Subtitle>{figureData.subtitle}</C.Subtitle>
        </C.ContentHeader>
        <C.AgroupButtons>
          <HomeButton
            iconType="Info"
            onClick={() =>
              navigate(`/historical-figure/${figureName}/infoView`)
            }
          >
            INFORMAÇÕES
          </HomeButton>
          <HomeButton
            iconType="LocationEspaco"
            onClick={() => navigate(`/historical-figure/${figureName}/LocView`)}
          >
            LOCALIZAÇÃO
          </HomeButton>
          <HomeButton
            iconType="Video"
            onClick={() =>
              navigate(`/historical-figure/${figureName}/VideosView`)
            }
          >
            VÍDEOS
          </HomeButton>
          <HomeButton
            iconType="Img"
            onClick={() =>
              navigate(`/historical-figure/${figureName}/ImageView`)
            }
          >
            IMAGENS
          </HomeButton>
          <HomeButton
            iconType="Audio"
            onClick={() =>
              navigate(`/historical-figure/${figureName}/AudiosView`)
            }
          >
            ÁUDIOS
          </HomeButton>
          <HomeButton
            iconType="Selfie"
            onClick={() =>
              navigate(`/historical-figure/${figureName}/SelfieView`)
            }
          >
            SELFIE HISTÓRICA
          </HomeButton>
        </C.AgroupButtons>
      </C.PersonalityContainer>
    </>
  );
};

export default HistoricalFigurePage;
