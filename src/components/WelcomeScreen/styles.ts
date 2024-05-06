import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 108vh;

  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  color: #ffff;

  @media only screen and (width: 360px), (height: 740px) {
    position: absolute;
    height: 130%;
    z-index: 3;

    align-items: baseline;
    svg {
      width: 45px;
      height: 45px;
    }
  }
  @media only screen and (width: 390px), (height: 844px) {
    position: absolute;
    height: 110%;
    z-index: 3;

    align-items: center;
    svg {
      width: 45px;
      height: 45px;
    }
  }
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
  @media only screen and (width: 360px), (height: 740px) {
    margin-top: 10rem;
  }
  @media screen and (width: 375px), (height: 667px) {
    height: 75rem;
  }
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
