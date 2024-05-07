import styled, { keyframes } from 'styled-components';
const shimmerAnimation = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #009289;

  height: 165vh;

  justify-content: baseline;
  align-items: center;
  padding: 10rem 1rem;
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #026660;
  width: 100%;
  border-radius: 35px;

  text-transform: uppercase;
  color: #ffffff;

  padding: 0 20px;
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  font-family: 'Futura PT', sans-serif;
  font-size: 14px;
  opacity: 1;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 215px;
  height: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0;

  gap: 10px;

  > h2 {
    font-family: 'Futura PT', sans-serif;
    color: #ffffff;
    font-size: 18px;
    letter-spacing: 1px;
    margin-top: 2rem;
  }
`;

export const MonthSelector = styled.select`
  width: 100%;
  height: 2.503rem;
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border: 2px solid transparent;
  border-radius: 0;

  color: #026e67;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;

  &:focus {
    border-color: #707070;
  }

  option {
    color: #3f3f3f;
    font-size: 1rem;
    font-weight: bold;
    border-bottom: 1px solid #707070; // Bordas entre as opções
    padding: 0.5rem;
  }
`;

export const MonthContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  margin: 10rem 4rem 0 4rem;
  gap: 25px;
  height: rem;
  overflow-y: visible;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

export const EventCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 240px;
  max-height: 14rem;
  overflow: hidden;
`;

export const EventTitle = styled.h4`
  color: #3f3f3f;
  margin-bottom: 0.5rem;
  font-size: 20px;
  font-weight: bold;
  white-space: normal;
  overflow: visible;
`;
export const EventDateTime = styled.p`
  color: #3f3f3f;
  margin-bottom: 1rem;
  font-family: 'FuturaPTBook', sans-serif;
`;
export const MoreButton = styled.button`
  background-color: transparent;
  color: #3f3f3f;
  border: 2px solid #707070;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  text-align: center;
  width: 130px;
  transition: background-color 0.3s ease;
  justify-content: center;
  white-space: nowrap;
  font-family: 'FuturaPTBook', sans-serif;
`;
export const ButtonCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ArrowContainer = styled.aside`
  display: inline-block;
  align-items: baseline;
  margin-bottom: 55px;
  cursor: pointer;
  margin-left: 18rem;
  color: #035f59;
`;

export const SkeletonGallery = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 12px;
  overflow-y: scroll;
  flex-direction: column;
  width: 170px;
  height: 280px;
`;

export const SkeletonImage = styled.div`
  background: #035f59;
  animation: ${shimmerAnimation} 2s infinite linear;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.1) 20%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.1) 100%
  );
  background-size: 1000px 100%;
  width: 270px;
  height: 280px;
  border-radius: 4px;
`;
