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
  const URL = "https://teachablemachine.withgoogle.com/models/07fghDy7n/";
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);
  const [webcam, setWebcam] = useState<tmImage.Webcam | null>(null); // Estado para a webcam
  const [cameraActive, setCameraActive] = useState(true); // Estado para controlar a atividade da câmera

  useEffect(() => {
    async function loadModel() {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";
      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
    }

    loadModel();
  }, [URL]);

  const handlePrediction = useCallback((predictions: Prediction[]) => {
    predictions.forEach(({ className, probability }) => {
      if (probability > 0.8) {
        console.log(`Classe prevista: ${className}, Probabilidade: ${probability}`);
  
        const espacoData = getEspacoData(className);
  
        if (espacoData) {
          console.log(`Navegando para ${espacoData.title}: ${espacoData.description}`);
          navigate(espacoData.path);
          setCameraActive(false); // Desativa a câmera se a condição for atendida
        }
      }
    });
  }, [navigate]);

  useEffect(() => {
    if (!cameraActive) return; // Interrompe a configuração da webcam se a câmera não estiver ativa

    let isComponentMounted = true;
  
    async function setupWebcam() {
      if (!model || !cameraActive) return;
      const newWebcam = new tmImage.Webcam();
      await newWebcam.setup({facingMode: "environment"});
      await newWebcam.play();
     
      setWebcam(newWebcam);
  
      if (webcamRef.current) {
        webcamRef.current.appendChild(newWebcam.canvas);
        newWebcam.canvas.style.position = 'absolute';
        newWebcam.canvas.style.width = '100%';
        newWebcam.canvas.style.height = '100%';
        newWebcam.canvas.style.objectFit = 'cover'; // Isso garante que o vídeo cubra toda a área sem distorcer
        newWebcam.canvas.style.top = '0';
        newWebcam.canvas.style.left = '0';
      }
      const loop = async () => {
        if (!isComponentMounted || !model || !cameraActive) return;

        newWebcam.update();
        const prediction = await model.predict(newWebcam.canvas) as Prediction[];
        handlePrediction(prediction);
        if (cameraActive) requestAnimationFrame(loop);
      };
  
      loop();
    }
  
    if (model && cameraActive) {
      setupWebcam();
    }
  
    return () => {
      isComponentMounted = false;
      webcam?.stop();
    };
  }, [model, cameraActive, handlePrediction]);

  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark>
      <Container>
        <HeaderContainer>
          <BackButton onClick={() => navigate('/')}>
            <img src={seta} alt="Seta voltar" />
          </BackButton>
          <img src={logo} alt="Logo" style={{ width: '200px', height: '70px', marginTop: '50px', marginBottom: '30px' }} />
        </HeaderContainer>
        <CameraContainer ref={webcamRef}></CameraContainer>
      </Container>
    </WatermarkWrapper>
  );
};

export default QRCode;
