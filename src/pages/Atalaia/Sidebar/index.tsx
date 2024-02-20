import styled from 'styled-components';
import HomeButton from '../../../components/HomeButton';
import { useNavigate } from 'react-router-dom';

const Background = styled.div`
  width: 100%;
  height: 68px;
  background: #394404;
  padding: 0 20px 0 20px;
  border-radius: 46px 46px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  button {
    max-width: 32px;
    max-height: 32px;
  }
`;

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Background>
      <HomeButton
        iconType="Info"
        onClick={() => {
          navigate('/atalaia-de-acaiuba/info');
        }}
      />
      <HomeButton
        iconType="Location"
        onClick={() => {
          navigate('/atalaia-de-acaiuba/location');
        }}
      />
      <HomeButton
        iconType="Video"
        onClick={() => {
          navigate('/#');
        }}
      />
      <HomeButton
        iconType="Img"
        onClick={() => {
          navigate('/#');
        }}
      />
      <HomeButton
        iconType="Audio"
        onClick={() => {
          navigate('/#');
        }}
      />
      <HomeButton
        iconType="Selfie"
        onClick={() => {
          navigate('/#');
        }}
      />
    </Background>
  );
};

export default Sidebar;
