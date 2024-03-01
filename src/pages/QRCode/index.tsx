import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as tmImage from '@teachablemachine/image';
import logo from '../../assets/logo.png';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import { CameraContainer, Container, HeaderContainer } from './styles';
import { BackButton } from '../TakeHome';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import { getEspacoData } from '../../helpers/Espacos';

// Interface para as previsões
interface Prediction {
  className: string;
  probability: number;
}

// Definição simplificada do tipo para o modelo da Teachable Machine
interface TeachableMachineModel {
  predict: (input: HTMLImageElement) => Promise<Prediction[]>;
}

const QRCode = () => {
  const navigate = useNavigate();
  const webcamRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  const URL = ' https://teachablemachine.withgoogle.com/models/07fghDy7n/';
  const [model, setModel] = useState<TeachableMachineModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadModel() {
      try {
        const modelURL = URL + 'model.json';
        const metadataURL = URL + 'metadata.json';
        const loadedModel = await tmImage.load(modelURL, metadataURL) as TeachableMachineModel;
        setModel(loadedModel);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao carregar o modelo:', error);
        setIsLoading(false);
      }
    }
    loadModel();
  }, [URL]);

  useEffect(() => {
    (async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.error('Navegador não suporta acesso à câmera');
        setIsLoading(false);
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
        if (webcamRef.current) {
          const videoElement = document.createElement('video');
          videoElement.srcObject = stream;
          videoElement.autoplay = true;
          videoElement.muted = true; // Necessário para reprodução automática
          videoElement.setAttribute('playsinline', 'true'); // Evita interrupções em iOS
          videoElement.style.width = '100%';
          videoElement.style.height = '100%';
          videoElement.style.objectFit = 'cover'; // Garante que o vídeo cubra o espaço disponível
          videoElement.onloadedmetadata = () => {
            videoElement.play();
          };
          webcamRef.current.appendChild(videoElement);
          videoRef.current = videoElement;
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao acessar a câmera:', error);
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    const captureImage = () => {
      if (videoRef.current) {
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const ctx = canvas.getContext('2d');
  
        if (ctx) {
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
          const image = new Image();
          image.src = canvas.toDataURL('image/png');
          return image;
        } else {
          throw new Error('Contexto do canvas não está disponível');
        }
      }
      return null;
    };
  
    const predict = async () => {
      let shouldContinue = true;
      while (shouldContinue) {
        const image = captureImage();
        if (image && model) {
          try {
            const prediction = await model.predict(image);
            const highProbPrediction = prediction.sort((a, b) => b.probability - a.probability)[0];
            if (highProbPrediction.probability > 0.5) {
              const espacoData = getEspacoData(highProbPrediction.className);
              if (espacoData) {
                navigate(espacoData.path);
                shouldContinue = false; // Para interromper o loop
              }
            }
          } catch (error) {
            console.error('Erro ao fazer a predição:', error);
          }
        }
        await new Promise(resolve => setTimeout(resolve, 700));
      }
    };
  
    if (model && videoRef.current) {
      predict().catch(console.error);
    }
  
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [model, navigate]);
  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark>
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
