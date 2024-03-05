import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as tmImage from '@teachablemachine/image';
import logo from '../../assets/logo.png';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import { CameraContainer, Container, HeaderContainer } from './styles';
import { BackButton } from '../TakeHome';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import { getEspacoData, } from '../../helpers/Espacos';


export interface EspacoData {
   path: string;
   title: string;
   icon: string;
   description: { pt: string; en: string; };
   }
interface Prediction {
  className: string;
  probability: number;
}

interface TeachableMachineModel {
  predict: (input: HTMLImageElement) => Promise<Prediction[]>;
}
 
const QRCode: React.FC = () => {
  const navigate = useNavigate();
  const webcamRef = useRef<HTMLDivElement>(null);
  const [model, setModel] = useState<TeachableMachineModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadModelAndCamera = async () => {
      const modelURL = 'https://teachablemachine.withgoogle.com/models/mtOLTcvXQ/model.json';
      const metadataURL = 'https://teachablemachine.withgoogle.com/models/mtOLTcvXQ/metadata.json';
      try {
        const loadedModel = await tmImage.load(modelURL, metadataURL) as TeachableMachineModel;
        setModel(loadedModel);
        setIsLoading(false);

        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        const videoElement = document.createElement('video');
        videoElement.srcObject = stream;
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.setAttribute('playsinline', '');
        videoElement.style.width = '100%';
        videoElement.style.height = '100%';
        videoElement.style.objectFit = 'cover';

        if (webcamRef.current) {
          webcamRef.current.appendChild(videoElement);
        }
      } catch (error) {
        console.error('Error loading model or camera:', error);
        setIsLoading(false);
      }
    };

    loadModelAndCamera();
  }, []);

  useEffect(() => {
    const predict = async () => {
      if (!model || isLoading) return;
  
      const interval = setInterval(async () => {
        if (!webcamRef.current) return;
        const videoElement = webcamRef.current.querySelector('video');
        if (!videoElement) return;
  
        const image = await captureImage(videoElement as HTMLVideoElement);
        const prediction = await model.predict(image);
        const highProbPrediction = prediction.sort((a, b) => b.probability - a.probability)[0];
  
        if (highProbPrediction.probability > 0.9) {
          const espacoData = getEspacoData(highProbPrediction.className);
          if (espacoData) {
            clearInterval(interval); // Interrompe o intervalo de previsão
            // Interrompe as faixas do stream de mídia
            const stream = (videoElement as HTMLVideoElement).srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
            navigate(espacoData.path);
          }
        }
      }, 700);
  
      return () => {
        clearInterval(interval); // Garante que o intervalo seja limpo se o componente for desmontado
        // Interrompe as faixas do stream de mídia ao sair
        if (webcamRef.current) {
          const videoElement = webcamRef.current.querySelector('video');
          if (videoElement && videoElement.srcObject) {
            const stream = videoElement.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
          }
        }
      };
    };
  
    predict();
  }, [model, isLoading, navigate]);

  const captureImage = async (videoElement: HTMLVideoElement): Promise<HTMLImageElement> => {
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Não foi possível obter o contexto do canvas');
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const image = new Image();
    image.src = canvas.toDataURL('image/png');
    await new Promise((resolve) => (image.onload = resolve));
    return image;
  };


  return (
    <WatermarkWrapper watermarkImage={WatermarkImage}>
      <Container>
        <HeaderContainer>
          <BackButton onClick={() => navigate('/')}>
            <img src={seta} alt="Seta voltar" />
          </BackButton>
          <img src={logo} alt="Logo" style={{ width: '200px', height: '70px', marginTop: '50px', marginBottom: '30px' }} />
        </HeaderContainer>
        {isLoading && <div style={{ textAlign: 'center', fontSize: '18px' }}>Carregando a câmera, aguarde um momento...</div>}
        <CameraContainer ref={webcamRef}></CameraContainer>
      </Container>
    </WatermarkWrapper>
  );
};

export default QRCode;
