import styled from 'styled-components';

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 4rem;
  background: #026660;
  width: 100%;
  border-radius: 35px;
  opacity: 0.78;
  text-transform: uppercase;
  color: #ffffff;

  padding: 0 20px;
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 170px;

  justify-content: baseline;
  gap: 25px;
  font-family: 'FuturaPTDemi', sans-serif;
  font-size: 14px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
