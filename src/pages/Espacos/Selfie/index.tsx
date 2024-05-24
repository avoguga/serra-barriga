import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WatermarkWrapper from '../../../components/WatermarkWrapper/WatermarkWrapper';
import logo from '../../../assets/logo.png';
import FloatingButtonBar from '../../../components/FloatingContainer';
import BtnDownArrow from '../../../components/ScrollButton';
import { EspacoData, getEspacoData } from '../../../helpers/Espacos';
import * as C from './styles';
import Sidebar from '../Sidebar';
import SelfieDestiny from '../../../components/SelfieDestiny';
import selfiee from '../../../assets/icons/i_selfie.png';

const SelfieView = () => {
  const { figureName } = useParams<{ figureName: string }>();
  const figureData: EspacoData | undefined = getEspacoData(figureName ?? '');

  const [content, setContent] = useState<{ [key: string]: JSX.Element | null }>({});

  useEffect(() => {
    if (figureData?.selfie) {
      const initialContent: { [key: string]: JSX.Element } = {};
      figureData.selfie.forEach((imageUrl, index) => {
        initialContent[index] = <img src={imageUrl} alt={figureName} width={290} height={370} />;
      });
      setContent(initialContent);
    }
  }, [figureData, figureName]);

  const handleClick = (index: string) => {
    setContent((prevState) => {
      const isSelfieDestiny = prevState[index]?.type === SelfieDestiny;
      if (isSelfieDestiny) {
        const imageUrl = figureData?.selfie?.[parseInt(index)];
        return {
          ...prevState,
          [index]: <img src={imageUrl} alt={figureName} width={290} height={370} />,
        };
      } else {
        return {
          ...prevState,
          [index]: <SelfieDestiny style={{ width: '290px', height: '370px' }} />,
        };
      }
    });
  };

  if (!figureData) {
    return <p>Espaço não encontrado.</p>;
  }

  return (
    <WatermarkWrapper>
      <FloatingButtonBar backBgColor="#313A0A" />
      <BtnDownArrow />
      <C.Container style={{ backgroundColor: '#8AA61E', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'end', height: 'auto' }}>
        <img src={logo} alt="logo serra da barriga" style={{ width: '200px', height: '70px', marginTop: '100px', marginBottom: '30px' }} />
        <C.SelfieContainer>
          <img src={selfiee} alt="" />
          <h3>SELFIE HISTÓRICA</h3>
        </C.SelfieContainer>
        <C.Text style={{ width: '280px', textAlign: 'center', fontSize: '16px', fontWeight: 'normal', letterSpacing: '0.8px', color: 'rgba(255, 255, 255, 0.6)' }}>
          Escolha um <span style={{ color: '#FFFFFF' }}> personagem da história e tire uma selfie </span> na serra da barriga
        </C.Text>
        <C.ImageContainer>
          {figureData.selfie ? (
            figureData.selfie.map((imageSrc, index) => (
              <div key={index} onClick={() => handleClick(index.toString())} style={{ width: '290px', height: '370px' }}>
                {content[index.toString()] || <img src={imageSrc} alt={`Imagem do espaço ${figureData.title}`} width="290" height="370" />}
              </div>
            ))
          ) : (
            <p>Nenhuma imagem disponível.</p>
          )}
        </C.ImageContainer>
        <Sidebar activeSection="SelfieView" />
      </C.Container>
    </WatermarkWrapper>
  );
};

export default SelfieView;
