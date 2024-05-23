import styled from 'styled-components';

export const Container = styled.div`
  background-color: #b21522;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: end;
  max-height: 300vh;
`;

export const Title = styled.h4`
  font-size: 15px;
  color: #fff;
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  border-radius: 0px 0px 90px 90px;
  background-color: #c60d1c;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  padding: 25px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
`;

export const Text = styled.div`
  color: #fff;
  padding: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: 'FuturaPTBook', sans-serif;
  text-align: justify;
  line-height: 2.1;
  font-size: 13px;
  font-weight: 100;
`;

export const BtnReadMore = styled.button`
  color: #e5dfae;
  border: none;
  padding: 15px;
  margin-top: 18px;
  font-family: 'FuturaPTBold', sans-serif;
  text-decoration: underline;
  background-color: transparent;
`;

export const Paragraph = styled.p`
  margin-bottom: 10px;
  line-height: 1.6;
  text-align: justify;
  font-family: 'FuturaPTBook', sans-serif;
  opacity: 0.9;
`;

export const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
`;

export const Video = styled.iframe`
  height: 25vh;
  width: 100%;
`;

export const CarroselContainer = styled.div`
  width: 100%;
  height: 15vh;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const Carrosel = styled.div`
  display: flex;
`;

export const Footer = styled.img`
  width: 15rem;
  opacity: 0.69;
`;

export const Image = styled.img`
  margin: 0 10px;
  width: 140px;
  height: 140px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 200px;
  justify-content: space-around;
  width: 100%;
  color: #fff;
`;

export const BtnSeta = styled.div`
  display: flex;
  gap: 280px;
  background-color: #b21522;
`;
