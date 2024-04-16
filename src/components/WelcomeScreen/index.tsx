import * as C from './styles'

import Logo from '../../assets/logo.png';
import parqueLogo from '../../assets/logo parque - verde.svg'

import HomeButton from '../../components/HomeButton';


interface WelcomeScreenProps {
    onClose: () => void; 
  }



const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onClose }) => {
    return (
      <C.WelcomeContainer>
        
        <C.WelcomeContent>
          <div style={{ marginLeft:'335px',paddingRight:'25px',}}>
          <HomeButton iconType='Close'  onClick={onClose} />
          </div>
        <img src={parqueLogo} alt="imagem do parque" style={{ 
          width:"400px",
          height:'220px'
        }} />
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: '200px',
            height: '70px',
           
            marginBottom: '20px',

          }}
        />
          <C.WelcomeText>Bem-vindo ao APP da Serra</C.WelcomeText>
          <p>Acesse o conteúdo</p>
          <HomeButton iconType='PopArrow' onClick={onClose}></HomeButton>
        </C.WelcomeContent>
      </C.WelcomeContainer>
    );
  };
  
  export default WelcomeScreen;