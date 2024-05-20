import styled from 'styled-components';

export const Container = styled.div`
  background-color: #586617;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 10px 16px 50px 16px;
  flex-direction: column;
  align-items: center;
  flex: 1;
  @media only screen and (width: 360px), (height: 640px) {
    height: 105vh;
    justify-content: baseline;
  }
`;
export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 22%;
  z-index: 3;

  background-color: #20aa9a;

  width: 255px;
  height: 86px;
  padding: 10px;
  box-sizing: border-box;

  border-radius: 90px;
  @media only screen and (width: 360px), (height: 640px) {
    top: 25%;
  }
  @media only screen and (width: 320px), (height: 658px) {
    top: 27%;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333c0c;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  position: fixed; // Alterado de absolute para fixed
  top: 7%;
  left: 5%;
  z-index: 10;
  cursor: pointer;
`;
export const TextContainer = styled.div`
  max-width: 250px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;

  p {
    font-size: 13px;
    letter-spacing: 0px;
    margin-left: 55px;

    font-family: 'FuturaPT', sans-serif;
    font-weight: bold;
  }
`;

export const InfoImage = styled.image`
  width: 90px;
  height: 120px;
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
  position: relative;
  overflow: scroll;
  margin-top: 60px;
  width: 90vw;
  border-radius: 30px;
  height: calc(100vh - 200px);
  @media only screen and (width: 360px), (height: 640px) {
    margin-top: 40px;
  }
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

export const ScannerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScannerImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  width: 100px;
  height: 100px;
`;
