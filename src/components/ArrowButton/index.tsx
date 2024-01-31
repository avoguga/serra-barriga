// Arrow.tsx
import React from 'react';
import styled from 'styled-components';
import RightArrowSvg from '../../assets/icons/seta direita.svg';
import LeftArrowSvg from '../../assets/icons/seta esquerda.svg';

interface ArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
  isActive: boolean;
}

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Arrow: React.FC<ArrowProps> = ({ direction, onClick, isActive }) => {
  const imgSrc = direction === 'left' ? LeftArrowSvg : RightArrowSvg;
  return (
    <ArrowButton onClick={onClick}>
      <img
        src={imgSrc}
        alt={`Seta ${direction}`}
        style={{ width: '40px', height: '45px', opacity: isActive ? 1 : 0.2 }}
      />
    </ArrowButton>
  );
};

export default Arrow;
