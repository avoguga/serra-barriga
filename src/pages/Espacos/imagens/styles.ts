import styled from 'styled-components';
export const View = styled.div`
  background-color: #8aa61e;
  color: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const AgroupImgs = styled.div`
  margin: 20px 0 30px 0;
  text-align: center;
`;

export const ImgText = styled.div`
  background: #8d094a;
  width: 290px;
  height: 29px;
  margin: 0 0 30px;
  border-radius: 58px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  > h3 {
    font-family: 'FuturaPTDemi', sans-serif;
    letter-spacing: 1px;
    margin-right: 70px;
  }
`;

export const AgroupImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;

  margin: 0 0 300px 0;
  img {
    margin: 5px;
    width: 133px;
    height: 148px;
    background: #ffffff;
    cursor: pointer;
  }
`;
