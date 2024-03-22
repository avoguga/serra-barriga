import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #b21522;
  height: 235vh;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
  max-width: 485px;
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60px;
  background: #8c111b;
  width: auto;
  border-radius: 35px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 18px;
  padding: 0 20px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-family: 'FuturaPTDemi', sans-serif;
  font-size: 13px;
  opacity: 1;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PersonalityImage = styled.img`
  width: 80%;

  margin-top: 30px;
  cursor: pointer;
`;

export const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  font-family: 'FuturaPTBold', sans-serif;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  background-color: #c7222f;
  color: #ffffff;
  text-align: center;
  font-family: 'FuturaPT', sans-serif;
  font-size: 15px;
  max-width: 80%;
  opacity: 1;
  text-align: left;

  width: 125vw;
  height: 360px;
  cursor: pointer;
  justify-content: center;
  border-radius: 0px 0px 90px 90px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  padding: 20px; /* Added padding for inner spacing */
  margin: 0px 0;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ReadMoreButton = styled.button`
  background-color: transparent;
  color: #e5dfae;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  text-decoration: underline;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: 'FuturaPTBold', sans-serif;
`;

export const ScrollContainer = styled.div`
  overflow-x: auto;
  padding: 20px;
  width: 100vw;
  scroll-behavior: smooth;
  transition: scroll ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InnerScrollContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const PhotoBox = styled.div`
  flex-shrink: 0;
  width: 08.43rem;
  height: 8.5rem;
  background-color: ${(props) => props.color || '#EEE'};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Isso garante que a imagem cubra todo o espaço, mantendo a proporção */
    cursor: pointer;
  }
`;

export const SubTitleContainer = styled.div`
  font-family: 'FuturaPTDemi', sans-serif;
  color: #ffffff;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

export const VideoBox = styled.div`
  width: 18.3rem;
  height: 11rem;
  background-color: ${(props) => props.color || '#EEE'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;
  left: 0;
  justify-content: space-around;
  width: 100%;
  color: #fff;
`;

export const FullScreenImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const FullScreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  display: flex;
`;
