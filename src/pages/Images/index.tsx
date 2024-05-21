import React, { useState } from 'react';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import './styles.css';
import styled from 'styled-components';
import OpenImage from '../../components/OpenImage';

import oxiras1 from '../../assets/images/takeHomeImages/Apresentações artísticas de orixás em evento do VSS. Foto de Aprigio Vilanova (3).webp';
import oxiras2 from '../../assets/images/takeHomeImages/Apresentações artísticas de orixás em evento do VSS. Foto de Aprigio Vilanova (4).webp';
import apresentacao from '../../assets/images/takeHomeImages/Apresentações artísticas em evento do VSS. Foto de Aprigio Vilanova. (2).webp';
import acaiene from '../../assets/images/takeHomeImages/ATALAIA DE ACAIENE.webp';
import acuiaba from '../../assets/images/takeHomeImages/ATALAIA DO ACAIUBA.webp';
import toculo from '../../assets/images/takeHomeImages/ATALAIA DO TOCULO.webp';
import batucaje from '../../assets/images/takeHomeImages/BATUCAJÉ.webp';
import acotirene from '../../assets/images/takeHomeImages/ESPAÇO ACOTIRENE.webp';
import foto01 from '../../assets/images/takeHomeImages/foto 01 Descrição dessa foto no Doc.webp';
import foto02 from '../../assets/images/takeHomeImages/Foto de Aprigio Vilanova (2).webp';
import lagoa from '../../assets/images/takeHomeImages/LAGOA ENCANTADA DOS NEGROS. Foto de Aprigio Vilanova.webp';
import muxima from '../../assets/images/takeHomeImages/MUXIMA DE PALMARES.webp';
import serra1 from '../../assets/images/takeHomeImages/Serra da Barriga.webp';
import serra2 from '../../assets/images/takeHomeImages/Serra da Barriga (2).webp';
import serra3 from '../../assets/images/takeHomeImages/Serra da Barriga (4).webp';
import ocas from '../../assets/images/takeHomeImages/OCAS INDÍGENAS.webp';
import onjo1 from '../../assets/images/takeHomeImages/ONJÓ CRUZAMBÊ. Desenho pedro franca.webp';
import onjo2 from '../../assets/images/takeHomeImages/ONJÓ DE FARINHA.webp';
import oxile from '../../assets/images/takeHomeImages/OXILE DAS ERVAS.webp';
import restaurante from '../../assets/images/takeHomeImages/RESTAURANTE KÚUKU-WAANA.webp';

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--square-color);
  border-radius: 50%;
  width: 55px;
  height: 55px;
  position: fixed;
  top: 7%;
  left: 5%;
  z-index: 10;
  cursor: pointer;
`;

const Images = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; description: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: oxiras1, description:`Apresentações artísticas em evento do VSS. 
    Foto de Aprigio Vilanova.`  },
    { src: oxiras2, description: 'Apresentações artísticas de orixás em evento do VSS. Foto de Aprigio Vilanova ' },
    { src: acaiene, description: 'ATALAIA DO ACAIENE' },
    { src: acotirene, description: 'ESPAÇO ACOTIRENE' },
    { src: apresentacao, description: `Apresentações artísticas em evento do VSS. 
     Foto de Aprigio Vilanova.` },
    { src: foto01, description: ' ' },
    { src: foto02, description: 'Foto de Aprigio Vilanova  ' },
    { src: lagoa, description: 'LAGOA ENCANTADA DOS NEGROS. Foto de Aprigio Vilanova ' },
    { src: muxima, description: 'MUXIMA DE PALMARES' },
    { src: serra1, description: 'Serra da Barriga ' },
    { src: serra2, description: 'Serra da Barriga ' },
    { src: serra3, description: 'Serra da Barriga ' },
    { src: acuiaba, description: 'ATALAIA DO ACAIUBA' },
    { src: toculo, description: 'ATALAIA DO TOCULO' },
    { src: batucaje, description: 'BATUCAJÉ' },
    { src: ocas, description: 'OCAS INDÍGENAS' },
    { src: onjo1, description: 'ONJÓ CRUZAMBÊ' },
    { src: onjo2, description: 'ONJÓ DE FARINHA' },
    { src: oxile, description: 'OXILE DAS ERVAS' },
    { src: restaurante, description: 'RESTAURANTE KÚUKU-WAANA' },
  ];

  const openFullScreenImage = (index: number) => {
    setSelectedImage(images);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage([]);
    return null;
  };

  return (
    <WatermarkWrapper>
      <div
        style={{
          backgroundColor: '#D66B00',
          height: '100vh',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className="fotos">
          {images.map((image, index) => (
            <div key={index} className="foto" onClick={() => openFullScreenImage(index)}>
              <img
                src={image.src}
                alt={`Foto ${index + 1}`}
                loading="lazy"
                style={{ margin: '0px', width: '140px', height: '140px', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        {selectedImage.length > 0 && (
          <OpenImage
            images={selectedImage}
            alt="Imagem selecionada"
            background="#D66B00"
            onClose={handleClose}
            initialIndex={currentIndex}
          /> 
        )}
      </div>
    </WatermarkWrapper>
  );
};

export default Images;
