/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../helpers/icons';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface FloatingButtonBarProps {
  isVisible?: boolean;
  onClickLeftArrow?: () => void;
  onClickScan?: () => void;
  onClickHome?: () => void;
  backgroundColor?: string;
  backBgColor?: string;
}

interface FloatingBarProps {
  backgroundColor?: string;
}

const FloatingBar = styled.div<FloatingBarProps>`
  width: 220px;
  height: 64px;
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background-color: ${(props) => props.backgroundColor || '#586617'};
  border-radius: 0px 0px 57px 0px;
`;

const Button = styled.button`
  margin: 5px;

  svg {
    width: 30px;
    height: 30px;
    margin-right: 25px;
  }
`;
const BackButton = styled(Button)<{ backBgColor?: string }>`
  background-color: ${(props) => props.backBgColor || '#003431'};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;
  margin-left: 25px;
  margin-right: 16px;
  margin-top: 10px;

  svg {
    width: 40px; // Ajuste de acordo com o tamanho do seu ícone.
    height: 40px; // Ajuste de acordo com o tamanho do seu ícone.
    position: absolute; // Se precisar posicionar o ícone precisamente dentro do botão.
    top: 55%;
    left: 45%;
    transform: translate(-50%, -50%); // Centraliza o ícone no botão.
    color: #ffffff; // Ajuste a cor conforme necessário.
  }
`;

const BackArrowIcon = Icons['BackArrowEspaco'];
const ScanIcon = Icons['ScanEspaco'];
const HomeIcon = Icons['HomeEspaco'];

const FloatingButtonBar = ({
  isVisible = true,
  onClickLeftArrow,
  onClickScan,
  onClickHome,
  backgroundColor,
  backBgColor,
}: FloatingButtonBarProps) => {
  const navigate: NavigateFunction = useNavigate();

  if (!isVisible) return null;

  const handleLeftArrowClick = () => {
    if (onClickLeftArrow) {
      onClickLeftArrow();
    } else {
      navigate(-1);
    }
  };
  const handleScanClick = onClickScan ? onClickScan : () => navigate('/qrcode');
  const handleHomeClick = onClickHome ? onClickHome : () => navigate('/');

  return (
    <FloatingBar backgroundColor={backgroundColor}>
      <BackButton backBgColor={backBgColor} onClick={handleLeftArrowClick}>
        <BackArrowIcon />
      </BackButton>
      <Button onClick={handleScanClick}>
        <ScanIcon />
      </Button>
      <Button onClick={handleHomeClick}>
        <HomeIcon />
      </Button>
    </FloatingBar>
  );
};

export default FloatingButtonBar;
