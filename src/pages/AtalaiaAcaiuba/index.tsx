import styled from "styled-components";

import atalaia from '../../assets/images/atalaia-de-acaiuba.png';
import FloatingButtonBar from "../../components/FloatingContainer";

const View = styled.div`
    background-color: #8AA61E;
    font-family: 'Futura PT', sans-serif;
    color: #ffffff;
    h1 {
        font-size: 34px;
      }
    h3 {
        font-size: 18px;
    }
`
const AtalaiaView = () => {
    return (
        <View>
        <FloatingButtonBar />
        <img
            src={atalaia}
            alt="Logo do aplicativo Serra da Barriga"
            style={{
              width: '350px',
              height: '232px',
              margin: '125px 0 0',
            }}
        />
            <h1>Atalaia Acaiuba</h1>
            <h3>Mirante de acaiuba - lider palmarino</h3>
        </View>
    );
}

export default AtalaiaView;