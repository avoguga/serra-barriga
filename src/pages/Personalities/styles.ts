import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  background: #b21522;
  justify-content: center;
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
  gap: 10px;
  padding: 10px;
`;

export const PersonalityCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Kumbh Sans', sans-serif;
  color: #ffffff;
  font-size: 14px;
  height: auto;
  overflow: hidden;
  margin-bottom: 2px;

  img {
    width: 180px;
    height: 180px;
    object-fit: contain;
    object-position: center;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0 16px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px; // 64px é o tamanho do header
`;
