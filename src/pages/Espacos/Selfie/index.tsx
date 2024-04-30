
import { useParams } from 'react-router-dom';

import selfie from '../../../assets/icons/i_selfie.png';

import WatermarkWrapper from '../../../components/WatermarkWrapper/WatermarkWrapper';
import logo from '../../../assets/logo.png';
import FloatingButtonBar from '../../../components/FloatingContainer';
import BtnDownArrow from '../../../components/ScrollButton';
import { EspacoData, getEspacoData } from '../../../helpers/Espacos';

// Styled components
import * as C from './styles';

import Sidebar from '../Sidebar';


const SelfieView = () => {
    const { figureName } = useParams<{ figureName: string }>();
    const figureData: EspacoData | undefined = getEspacoData(figureName ?? ''); 
    
    if (!figureData) {
        return <p>Espaço não encontrado.</p>;
    }
    
    const handleImageClick = (imageUrl: string) => {
        window.location.href = imageUrl;
    };

  return (
    <WatermarkWrapper>
      <FloatingButtonBar backBgColor='#313A0A' />
      <BtnDownArrow/>
      <C.Container style={{ backgroundColor: '#8AA61E', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'end',height:'100vh' }}>
        <img src={logo} alt="logo serra da barriga" style={{ width: '200px', height: '70px', marginTop: '100px', marginBottom: '30px' }} />
        
        <C.SelfieContainer as="div">
        <img
            src={selfie}
            alt="ícone de videos"
            style={{
              width: '35px',
              height: '35px',
              marginLeft:'20px'
            }}
          />
          <p>SELFIE HISTÓRICA</p>
        </C.SelfieContainer>
        
        <C.Text style={{ width: '280px', textAlign: 'center', fontSize: '16px', fontWeight: 'normal', letterSpacing: '0.8px', color: 'rgba(255, 255, 255, 0.6)' }}>
          Escolha um <span style={{ color: '#FFFFFF'}}> personagem da história e tire uma selfie </span> na serra da barriga
        </C.Text>
        
        <C.ImageContainer>
          {figureData.selfie ? (
            figureData.selfie.map((imageSrc, index) => (
              <img
                key={index}
                src={imageSrc}
                alt={`Imagem do espaço ${figureData.title}`}
                style={{ cursor: 'pointer' }}
                onClick={() => handleImageClick(imageSrc)} 
                width="280" height="350"

              />
            ))
          ) : (
            <p>Nenhuma imagem disponível.</p>
          )}
        </C.ImageContainer>
    
        
        <Sidebar activeSection='SelfieView'/>
      </C.Container>
    </WatermarkWrapper>
  );
};

export default SelfieView;
