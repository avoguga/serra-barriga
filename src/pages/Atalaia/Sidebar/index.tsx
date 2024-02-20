import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 68px;
  background: #394404;
  border-radius: 46px 46px 0px 0px;
`;

const Sidebar = () => {
  return (
    <Background>
      <p>Sidebar</p>
    </Background>
  );
};

export default Sidebar;
