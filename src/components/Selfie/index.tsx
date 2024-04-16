/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';

interface SelfieProps {
  imageSrc: string;
}

const Selfie = ({ imageSrc }: SelfieProps) => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawImageOnCanvas = (ctx: any, img: any) => {
    // Defina as dimensões e a posição da sua imagem estática
    const x = 0; // A posição no eixo X do canto superior esquerdo da imagem
    const y = 0; // A posição no eixo Y do canto superior esquerdo da imagem
    const width = 200; // A largura da imagem
    const height = 200; // A altura da imagem

    // Desenha a imagem no canvas
    ctx.drawImage(img, x, y, width, height);
  };

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      const interval = setInterval(() => {
        const videoElement = webcamRef.current?.video;
        const canvasElement = canvasRef.current;

        if (videoElement && canvasElement && videoElement.readyState === 4) {
          const ctx = canvasElement.getContext('2d');
          if (ctx) {
            canvasElement.width = videoElement.videoWidth;
            canvasElement.height = videoElement.videoHeight;

            // Primeiro, desenha o frame do vídeo no canvas
            ctx.drawImage(
              videoElement,
              0,
              0,
              canvasElement.width,
              canvasElement.height
            );

            // Em seguida, desenha a imagem estática no canvas
            drawImageOnCanvas(ctx, img);
          }
        }
      }, 100); // Atualizar a sobreposição em intervalos

      return () => clearInterval(interval);
    };
  }, [imageSrc]);

  return (
    <div style={{ position: 'relative' }}>
      <Webcam ref={webcamRef} style={{ position: 'absolute' }} />
      <canvas ref={canvasRef} style={{ position: 'absolute' }} />
    </div>
  );
};

export default Selfie;
