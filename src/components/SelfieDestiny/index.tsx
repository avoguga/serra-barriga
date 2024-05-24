import React from 'react';
import * as C from './styles';
import tikTok from '../../assets/logo tiktok.svg';
import { useNavigate } from 'react-router-dom';

const SelfieDestiny = (props: { style: React.CSSProperties | undefined; }) => {
  const navigate = useNavigate();

  const handleUseAppClick = () => {
    navigate('/ar-filter');
  };
  return (
    <C.Container style={props.style}>
      <C.ButttonDestiny>
        <C.TikTokImage src={tikTok} alt="" />
      </C.ButttonDestiny> 
      <C.ButttonDestiny onClick={handleUseAppClick}>
        <C.TextButton>USAR DENTRO DO APP</C.TextButton>
      </C.ButttonDestiny>
    </C.Container>
  );
};

export default SelfieDestiny;
