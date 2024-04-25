import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  color: #ffff;
`;

export const WelcomeContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;

  max-height: 85vh;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  background: #67781b;
`;

export const WelcomeText = styled.p`
  font-size: 24px;
  font-family: 'FuturaPTBook', sans-serif;
  color: #ffffff;
  background: #8aa61e;
  padding: 5px;
  margin-bottom: 10px;
`;

export const WelcomeButton = styled.button`
  color: white;
  fill: #fff;
  border: none;

  cursor: pointer;
`;

export const IconButton = styled.div`
  display: flex;
  align-items: end;
`;
