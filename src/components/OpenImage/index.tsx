import logo from '../../assets/logo.png';
import * as C from './styles'
import iconX from '../../assets/icons/X - Branco.svg'

interface OpenImageProps {
    src: string;
    alt: string;
    background: string;
    description: string;
    onClose?: () => void; 
  }

const OpenImage: React.FC <OpenImageProps> = ({src,alt,background,description, onClose}) => {
    return (
        <C.FullScreenWrapper background={background}>
        <C.LogoContainer>
        <img
        onClick={onClose}
              src={iconX}
              alt="iconX"
              loading='lazy'
              style={{
                width: '28px',
                height: 'auto',
               marginTop: '100px',
               marginRight:'50px',
               marginLeft:'30px',
               cursor:'pointer'
              }}
            />

         <img
          src={logo}
          alt="logo serra da barriga"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '100px',
            marginBottom: '30px',
            marginRight:'40px',
        
            
        
          }}
        />
       
        </C.LogoContainer>

        <C.ImageContainer  onClick={(e) => e.stopPropagation()}>
          <C.StyledImage src={src} alt={alt} />
          <C.Description>{description}</C.Description>
        </C.ImageContainer>
        </C.FullScreenWrapper>

      );
      
    };

export default OpenImage;