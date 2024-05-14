import { useNavigate } from 'react-router-dom';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import styled from 'styled-components';
import seta from '../../assets/seta voltar e abaixo - branco.svg';

const BackButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
background: #753D00;
border-radius: 50%;
width: 55px;
height: 55px;
position: fixed; // Alterado de absolute para fixed
top: 7%;
left: 5%;

cursor: pointer;
`;

const Tour360 = () => {
  const navigate = useNavigate();
  return (
    <WatermarkWrapper>
    
              <BackButton
            onClick={() => {
              navigate('/takehome');
            }}> 
            
            <img src={seta} alt="" />
            </BackButton>

            <iframe src="https://kuula.co/share/collection/7cxdN?logo=-1&info=0&fs=1&vr=1&sd=1&gyro=0&thumbs=-1&margin=5&alpha=0.90&inst=0&keys=0" frameBorder={0} style={{ height:'100vh', width:'100%', zIndex:'10'}}></iframe>
  
    
    </WatermarkWrapper>
  );
};

export default Tour360;
