import styled from 'styled-components';

export const ExpoContainer = styled.div`
  font-family: 'FuturaPTHeavy';
  font-size: 12px;
  color: var(--text-color);
  background: #b55a01;
  padding: 1rem;
  border-radius: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 285px;
  height: 70px;

  svg {
    width: 40px;
    height: 40px;
    margin-right: 24px;
  }
`;

export const ExpoInfoContainer = styled.div`
  font-family: 'FuturaPTHeavy';
  font-size: 10px;
  color: var(--text-color);
  background: #753d00;
  padding-bottom: 1rem;
  border-radius: 38px;
  display: flex;

  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  margin-bottom: 25px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 337px;
  min-height: 296px;
  height: auto;

  div > svg {
    width: 100px;
    height: 54px;
    margin-right: 24px;
  }
`;

export const ExpoText = styled.p`
  font-size: 17px;
  color: #ffffff;
  font-family: 'FuturaPTBook', sans-serif;
  margin-top: 15px;

  opacity: 0.85;
`;

export const ModelsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;

  padding: 2rem;
  margin: 25px 0; // Adiciona margem acima e abaixo do contêiner, se necessário
  -ms-overflow-style: none; // Esconde scrollbar no IE e Edge
  scrollbar-width: none; // Esconde scrollbar no Firefox

  &::-webkit-scrollbar {
    display: none; // Esconde scrollbar no WebKit (Safari, Chrome, etc)
  }
`;

export const LazyLoadPoster = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ButtonLoad = styled.div`
  background-color: transparent;
  color: white;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;

  padding: 10px 15px;
  font-weight: 500;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 100;

  svg {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  white-space: nowrap;
`;
export const ReadMoreButton = styled.button`
  background-color: transparent;
  color: #e5dfae;
  border: none;
  cursor: pointer;
  margin-top: 60px;
  margin-bottom: 10px;
  text-decoration: underline;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: 'FuturaPTBold', sans-serif;
`;