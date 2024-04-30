import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import infoIcon from '../../../assets/icons/i_info texto.png';
import { EspacoData, getEspacoData } from '../../../helpers/Espacos';
import Sidebar from '../Sidebar/index';
import LowArrow from '../../../components/LowArrowButton';

import * as C from './styles'
import SpaceHeader from '../../../components/SpaceHeader';

const InfoView = () => {
  const { figureName } = useParams<{ figureName: string }>();
  const figureData: EspacoData | undefined = getEspacoData(figureName ?? '');
  const navigate = useNavigate();

  return (
    <C.View>
      <C.Nav>
        <LowArrow onClick={() => navigate(`/historical-figure/${figureName}`)} isActive={true} />
      </C.Nav>
      <C.NavFotter>
        
     <Sidebar   activeSection='infoView' />
      </C.NavFotter>
      <C.Content>
        {figureData ? (
          <>
          <SpaceHeader/>
            <C.InfoText>
              <img
                src={infoIcon}
                alt="ícone de informação"
                style={{
                  width: '35px',
                  height: '35px',
                  marginLeft:'px'
                }}
              />
              <h2>Informações</h2>
            </C.InfoText>
            <C.AgroupText>
              <p>{figureData.description.pt}</p>
              <C.SpanText>{figureData.description.italic} </C.SpanText>
              <p>{figureData.description.en}</p>

            </C.AgroupText>
          </>
        ) : (
          <p>Figura histórica não encontrada.</p>
        )}
      </C.Content>
    </C.View>
  );
};

export default InfoView;
