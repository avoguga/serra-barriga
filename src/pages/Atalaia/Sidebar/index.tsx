import styled from 'styled-components';
import HomeButton from '../../../components/HomeButton';
import { useNavigate, useParams } from 'react-router-dom';
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
`;

const Sidebar = () => {
  const { figureName } = useParams<{ figureName: string }>();
  const figureData: EspacoData | undefined = getEspacoData(figureName ?? ''); 
  const navigate = useNavigate();
  return (
    <Background>
      {figureData ? (
        <>
      <HomeButton
        iconType="InfoEspacos"
        onClick={() => {
          navigate(`/historical-figure/${figureName}/infoView`);
        }}
        />
      <HomeButton
        iconType="Location"
        
        onClick={() => {
          navigate(`/historical-figure/${figureName}/LocView`);
        }}
        />
      <HomeButton
        iconType="VideoEspaco"
        onClick={() => {
          navigate(`/historical-figure/${figureName}/VideosView`);
        }}
        />
      <HomeButton
        iconType="ImgEspacos"
        onClick={() => {
          navigate(`/historical-figure/${figureName}/ImageView`);
        }}
        />
      <HomeButton
        iconType="AudioEspaco"
        onClick={() => {
          navigate(`/historical-figure/${figureName}/AudiosView`);
        }}
        />
      <HomeButton
        iconType="SelfieEspaco"
        onClick={() => {
          navigate('/#');
        }}
        />

        </>
    ) : (
      <p>Figura histórica não encontrada.</p>
    )}
    </Background>
  );
};

export default Sidebar;
