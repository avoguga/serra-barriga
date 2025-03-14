import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  background: #b21522;
  height: 180vh;
  justify-content: center;
  align-items: baseline;
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 60px;
  background: #8c111b;
  width: 70%;
  border-radius: 35px;

  text-transform: uppercase;
  color: #ffffff;

  margin-top: 8px;

  padding: 0 20px;
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-family: 'FuturaPTDemiOblique', sans-serif;
  font-size: 13px;
  opacity: 1;
`;

export const PersonalitiesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 400px;
  gap: 18px;
  padding: 10px;
`;

export const PersonalityCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'FuturaPT', sans-serif;
  color: #ffffff;
  font-size: 14px;
  height: auto;
  overflow: visible;
  margin-bottom: 2px;

  img {
    width: 150px;

    object-fit: contain;
    object-position: center;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;

  flex-direction: row;

  left: 0;
  justify-content: space-between;
  width: 95%;
  margin-left: 10px;
`;

export const MainContainer = styled.div`
  display: flex;
  background-color: #b21522;
  flex-direction: column;
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
  position: fixed; // Alterado de absolute para fixed
  top: 7%;
  left: 5%;
  z-index: 10;
  cursor: pointer;
`;
