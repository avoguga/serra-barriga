import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as C from './styles';
import { Modelo3D } from '../VirtualExpo';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import { Icons } from '../../helpers/icons';
import view from '../../assets/icons/i_view 360.png';

const WebcamBackground = ({ children }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const startVideo = async () => {
      try {
        const constraints = {
          video: { facingMode: 'environment' },
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing the webcam', error);
      }
    };

    startVideo();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        // @ts-ignore
        const tracks = videoRef.current.srcObject.getTracks();
        // @ts-ignore
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <C.VideoBackground autoPlay muted ref={videoRef} />
      {children}
    </div>
  );
};

const ExpoDetails = () => {
  const ExpoIcon = Icons['Arqueologia'];
  const location = useLocation();
  const navigate = useNavigate();
  const { modelo, background } = location.state as {
    modelo: Modelo3D;
    background: string;
  };

  return (
    <WebcamBackground>
      <C.Container>
        <C.BackButton onClick={() => navigate(-1)}>
          <img src={seta} alt="" />
        </C.BackButton>
        <C.ExpoContainer style={{ backgroundColor: background }}>
          <ExpoIcon />
          <h2>EXPOSIÇÃO VIRTUAL</h2>
        </C.ExpoContainer>
        <img
          src={view}
          alt="icone de 360 graus"
          style={{
            width: 'auto',
            height: '80px',
            opacity: '0.6',
          }}
        />
        <model-viewer
          src={modelo.src}
          alt={modelo.alt}
          ar
          loading="eager"
          camera-controls
          auto-rotate
          touch-action="pan-y"
          style={{
            width: '300px',
            height: '300px',
          }}
        ></model-viewer>
        <C.ExpoTitle>{modelo.title}</C.ExpoTitle>
        <C.ExpoDescription>{modelo.description}</C.ExpoDescription>
      </C.Container>
    </WebcamBackground>
  );
};

export default ExpoDetails;
