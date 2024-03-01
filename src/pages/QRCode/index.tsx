import React, { useCallback, useEffect, useRef, useState } from 'react';
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

const QRCode = () => {
  const navigate = useNavigate();
  const webcamRef = useRef<HTMLDivElement>(null);
  const URL = 'https://teachablemachine.withgoogle.com/models/07fghDy7n/';
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);
  const [webcam, setWebcam] = useState<tmImage.Webcam | null>(null); // Estado para a webcam
  const [isLoading, setIsLoading] = useState(true); // Novo estado para controle de carregamento
  const [cameraActive, setCameraActive] = useState(true); // Estado para controlar a atividade da câmera

  useEffect(() => {
    const constraints = { video: true };
  
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        // Encontrar o elemento de vídeo no DOM
        const videoElement = webcamRef.current?.querySelector('video');
        if (videoElement) {
          videoElement.srcObject = stream;
          videoElement.play();
        }
      })
      .catch((error) => {
        console.error('Erro ao acessar a câmera:', error);
      });
  }, []);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        
        const video = document.querySelector('video');
        if (video) {
          video.srcObject = stream;
        }
      })
      .catch(err => {
        console.error("Erro ao acessar a câmera: ", err);
      });
  }, []);

  useEffect(() => {
    async function loadModel() {
      const modelURL = URL + 'model.json';
      const metadataURL = URL + 'metadata.json';
      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
    }

    loadModel();
  }, [URL]);

  const handlePrediction = useCallback(
    (predictions: Prediction[]) => {
      predictions.forEach(({ className, probability }) => {
        if (probability > 0.8) {
          console.log(`Classe prevista: ${className}, Probabilidade: ${probability}`);

          const espacoData = getEspacoData(className);

          if (espacoData) {
            console.log(`Navegando para ${espacoData.title}: ${espacoData.description}`);
            navigate(espacoData.path);
            setCameraActive(false); // Desativa a câmera se a condição for atendida
            setIsLoading(false); // Desativa o loading
          }
        }
      });
    },
    [navigate]
  );

  useEffect(() => {
    if (!cameraActive) return;

    let isComponentMounted = true;
    setIsLoading(true); // Iniciar o carregamento

    async function setupWebcam() {
      if (!model || !cameraActive) return;
      const newWebcam = new tmImage.Webcam();
      try {
        await newWebcam.setup({ facingMode: 'environment' }); // Preferência pela câmera frontal
        await newWebcam.play();
        setWebcam(newWebcam);

        if (webcamRef.current) {
          webcamRef.current.appendChild(newWebcam.canvas);
          newWebcam.canvas.style.position = 'absolute';
          newWebcam.canvas.style.width = '100%';
          newWebcam.canvas.style.height = '100%';
          newWebcam.canvas.style.objectFit = 'cover';
          newWebcam.canvas.style.top = '0';
          newWebcam.canvas.style.left = '0';
          const videoElement = document.createElement('video');
          videoElement.style.width = '100%';
          videoElement.style.height = '100%';
          videoElement.playsInline = true;
          videoElement.autoplay = true;
          videoElement.muted = true; // Necessário para autoplay em alguns navegadores
       
          webcamRef.current.appendChild(videoElement);
        }

        setIsLoading(false); // Finaliza o carregamento quando a câmera está pronta

        const loop = async () => {
          if (!isComponentMounted || !model || !cameraActive) return;

          newWebcam.update();
          const prediction = await model.predict(newWebcam.canvas) as Prediction[];
          handlePrediction(prediction);
          if (cameraActive) requestAnimationFrame(loop);
        };

        loop();
      } catch (error) {
        console.error('Erro ao configurar a webcam:', error);
        setIsLoading(false); // Finaliza o carregamento se houver um erro
      }
    }

    if (model && cameraActive) {
      setupWebcam();
    }

    return () => {
      isComponentMounted = false;
      webcam?.stop();
    };
  }, [model, cameraActive, handlePrediction, webcam]);

  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark>
      <Container>
        <HeaderContainer>
          <BackButton onClick={() => navigate('/')}>
            <img src={seta} alt="Seta voltar" />
          </BackButton>
          <img src={logo} alt="Logo" style={{ width: '200px', height: '70px', marginTop: '50px', marginBottom: '30px' }} />
        </HeaderContainer>
        {isLoading && <div style={{ textAlign: 'center', fontFamily: 'FuturaPT' , fontSize: '18px' }}>Carregando a câmera, aguarde um momento...</div>}
        <CameraContainer ref={webcamRef}></CameraContainer>
      </Container>
    </WatermarkWrapper>
  );
};

export default QRCode;
