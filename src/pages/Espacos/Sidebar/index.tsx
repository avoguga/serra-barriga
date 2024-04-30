import styled from 'styled-components';
import HomeButton from '../../../components/HomeButton';
import {  useNavigate, useParams } from 'react-router-dom';
import { EspacoData, getEspacoData } from '../../../helpers/Espacos';

const Background = styled.div`
  width: 100%;
  height: 68px;
  background: #394404;
  padding: 0 20px 0 20px;
  border-radius: 46px 46px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  button {
    max-width: 35px;
    max-height: 35px;
  }

  svg { 
  
  width: 37px;
  height: 57px;


    
  }


`;
interface SidebarProps {
  activeSection: string;
}

const Sidebar = ({activeSection}: SidebarProps) => {
  const { figureName } = useParams<{ figureName: string }>();
  const figureData: EspacoData | undefined = getEspacoData(figureName ?? ''); 
  const navigate = useNavigate();
  

 
  
  return (
    <Background>
      {figureData ? (
        <>
      <HomeButton
            iconType="InfoEspacos"
            onClick={() => navigate(`/historical-figure/${figureName}/infoView`)}
            active={activeSection === 'infoView'}
          />
          <HomeButton
            iconType="Location"
            onClick={() => navigate(`/historical-figure/${figureName}/LocView`)}
            active={activeSection === 'LocView'}
          />
          <HomeButton
            iconType="VideoEspaco"
            onClick={() => navigate(`/historical-figure/${figureName}/VideosView`)}
            active={activeSection === 'VideosView'}
          />
          <HomeButton
            iconType="ImgEspacos"
            onClick={() => navigate(`/historical-figure/${figureName}/ImageView`)}
            active={activeSection === 'ImageView'}
          />
          <HomeButton
            iconType="AudioEspaco"
            onClick={() => navigate(`/historical-figure/${figureName}/AudiosView`)}
            active={activeSection === 'AudiosView'}
          />
          <HomeButton
            iconType="SelfieEspaco"
            onClick={() => navigate(`/historical-figure/${figureName}/SelfieView`)}
            active={activeSection === 'SelfieView'}
          />
        </>
    ) : (
      <p>Figura histórica não encontrada.</p>
    )}
    </Background>
  );
};

export default Sidebar;
