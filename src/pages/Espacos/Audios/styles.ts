import styled from 'styled-components';

export const Background = styled.div`
  background: #8aa61e;
  height: 110vh;
  align-items: center;

  display: flex;
  flex-direction: column;
  color: #ffff;

  @media only screen and (device-width: 360px) and (device-height: 640px) {
    height: 125vh;
    width: 100%;
  }
  @media only screen and (device-width: 360px) and (device-height: 658px) {
    height: 125vh;
  }
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
    text-transform: uppercase;
    white-space: nowrap;
  }
  background: #7a9600;
  color: #e7ebe0;

  width: 100%;
  border-radius: 30px;
  padding: 0.8rem;
  padding-left: rem;
  opacity: 0.8;
  margin-bottom: 20px;
  @media only screen and (device-width: 360px) and (device-height: 658px) {
    width: 80%;
  }
`;

export const AudioDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 5px;
  margin-top: 20px;
  margin-left: 20px;
  width: 100%;
`;

export const AudioText = styled.p`
  font-family: 'FuturaPtBook', sans-serif;
  color: #e7ebe0;
  font-size: 13px;
  color: #e7ebe0;
  white-space: nowrap;
  text-transform: uppercase;
`;
export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  margin: 50px 25px;
`;

export const NavFooter = styled.nav`
  position: fixed;
  z-index: 10;
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
  justify-content: baseline;

  > h3 {
    font-family: 'FuturaPTDemi', sans-serif;
    letter-spacing: 1px;
    margin-left: 75px;
  }
`;
