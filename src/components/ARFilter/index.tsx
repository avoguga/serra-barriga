import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import * as C from './styles.ts';
import characterImg from '../../assets/zumbi final.png'; // Adicione sua imagem de personagem aqui

const ARFilterComponent: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);

  return (
    <C.WebcamContainer>
     
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/png"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />
      <C.CharacterImage src={characterImg} alt="Character" />
    </C.WebcamContainer>
  );
};

export default ARFilterComponent;
