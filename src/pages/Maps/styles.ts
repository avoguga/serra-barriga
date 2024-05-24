import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  background-color: #67781b;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--square-color);
  border-radius: 50%;
  width: 55px;
  height: 55px;
  position: fixed;
  top: 7%;
  left: 5%;
  z-index: 10;
  cursor: pointer;
`;

export const LocationButton = styled.button<{ x: number; y: number }>`
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${(props) => (props.y / 520) * 100}%;
  left: ${(props) => (props.x / 480) * 100}%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 35px;
  height: 35px; /* Aumentei o tamanho da bolinha */
  border-radius: 50%;
  z-index: 10;
`;

interface TooltipProps {
  x: string;
  y: string;
}

export const Tooltip = styled.div<TooltipProps>`
  position: absolute;
  left: calc(${(props) => props.x});
  top: calc(${(props) => props.y} - 5%);
  transform: translate(-50%, -50%);
  padding: 8px 16px;
  background: #ffffff;
  color: #67781b;
  font-family: 'FuturaPTDemi', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  z-index: 20;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    border-width: 5px;
    border-style: solid;
    border-color: #ffffff;
    z-index: -1;
  }
`;

export const MapaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    color: #ffbf00;
  }
`;

export const MapaWrapper = styled.div`
  position: relative;
  width: 100vh;

  overflow: hidden;
`;

export const ZoomButton = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50%;

  cursor: pointer;
  font-size: 20px;
  padding: 5px;
  margin: 2px;
`;
