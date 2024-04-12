import styled from 'styled-components';

export const Background = styled.div`
  background: #8aa61e;
  height: 110vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: #ffff;
`;

export const BackButton = styled.button`
  background-size: cover;
  border: none;
  cursor: pointer;
  width: 50px; // Assuming size for button background
  height: 50px; // Adjust size as needed
`;

export const Logo = styled.img`
  width: 200px;
  height: 70px;
  margin-top: 95px;
  margin-bottom: 30px;
`;

export const Gallery = styled.div`
  background-size: cover;
  width: 18px; // Adjust as necessary
  height: 18px; // Adjust as necessary
`;

export const Section = styled.section`
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
`;

export const Title = styled.div`
  display: flex;

  justify-content: left;
  p {
    font-family: 'FuturaPTBook', sans-serif;
    margin-left: 10px;
  }
  background: #7a9600;
  color: #e7ebe0;

  width: 85%;
  border-radius: 30px;
  padding: 0.5rem;
  padding-left: rem;
  opacity: 0.8;
  margin-bottom: 20px;
`;

export const AudioDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  margin-top: 20px;
  margin-left: 20px;

  margin-right: 200px;
`;

export const AudioText = styled.p`
  font-family: 'FuturaPtBook', sans-serif;
  color: #e7ebe0;
  font-size: 13px;
  color: #e7ebe0;
  white-space: nowrap;
`;
export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  margin: 50px 25px;
`;

export const NavFooter = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

export const AudioContainer = styled.div`
  background: #8d094a;
  width: 280px;
  height: 29px;
  margin: 0 0 30px;
  border-radius: 58px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > h3 {
    font-family: 'FuturaPTDemi', sans-serif;
    letter-spacing: 1px;
    margin-right: 85px;
  }
`;
