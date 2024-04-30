// Arrow.tsx
import React from 'react';
import styled from 'styled-components';
import LowLeftArrowSvg from '../../assets/icons/icon-low-left-arrow.svg';

interface ArrowProps {
  onClick: () => void;
  isActive: boolean;
}

const ArrowButton = styled.button`
  background: #8D094A;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LowArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <ArrowButton onClick={onClick}>
      <img
        src={LowLeftArrowSvg}
        alt={'Seta para voltar a página anterior.'}
        style={{ width: '50px', height: '50px', margin: '10px 5px 0 0'}}
      />
    </ArrowButton>
  );
};

export default LowArrow;
