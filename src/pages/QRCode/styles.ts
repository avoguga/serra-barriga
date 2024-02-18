import styled from 'styled-components';

export const Container = styled.div`
  background-color: #586617;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  padding: 10px 16px 50px 16px;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const CameraContainer = styled.div`
  background-color: #fff;
  width: 90vw;
  border-radius: 30px;
  height: 100%;
`;

export const AdviceContainer = styled.div`
  background: blue;
  padding: 16px;
  position: absolute;
  border-radius: 1000px;
`;

export const Advice = styled.span`
  color: white;
  width: 70%;
`;
