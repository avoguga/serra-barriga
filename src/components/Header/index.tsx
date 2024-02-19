import FloatingButtonBar from "../FloatingContainer";
import appSerra from '../../assets/logo.png';
import AgendaSvg from '../../assets/icons/audio.svg';

import * as C from './styles'


const Header = () => {
    return (
<>

<FloatingButtonBar backgroundColor="#026660" />
      <C.MainContainer>
        <img
          src={appSerra}
          alt="app Serra da Barriga"
          style={{
            width: '186px',
            height: '65px',

            marginBottom: '30px',
          }}
        />
        <C.PageHeader>
          <C.HeaderContent>
            <img
              src={AgendaSvg}
              alt="AgendaIcon"
              style={{
                width: '38px',
                height: '55px',
                
              
              }}
            />
            <h3>AGENDA</h3>
          </C.HeaderContent>
        </C.PageHeader>
      </C.MainContainer>

</>


    )

};


export default Header;