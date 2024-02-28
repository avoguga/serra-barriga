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

const QRCode = () => {
  const navigate = useNavigate();
  const webcamRef = useRef<HTMLDivElement>(null);
  const URL = 'https://teachablemachine.withgoogle.com/models/07fghDy7n/';
  // @ts-ignore
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);
  // @ts-ignore
  const [webcam, setWebcam] = useState<tmImage.Webcam | null>(null); // Estado para a webcam

  useEffect(() => {
    async function loadModel() {
      const modelURL = URL + 'model.json';
      const metadataURL = URL + 'metadata.json';
      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
    }

    loadModel();
  }, [URL]); // Carrega o modelo apenas uma vez quando a URL muda

  useEffect(() => {
    if (!model || webcam) return;

    async function setupWebcam() {
      const newWebcam = new tmImage.Webcam();
      await newWebcam.setup();
      await newWebcam.play();
      setWebcam(newWebcam); // Configura o estado da webcam

      if (webcamRef.current) {
        webcamRef.current.appendChild(newWebcam.canvas);
        newWebcam.canvas.style.width = '100%'; // Definindo largura de 100% para preencher o contêiner
        newWebcam.canvas.style.height = '100%';
        newWebcam.canvas.style.borderRadius = '30px';
      }

      const loop = async () => {
        newWebcam.update();
        const prediction = (await model.predict(
          newWebcam.canvas
        )) as Prediction[];
        handlePrediction(prediction);
        requestAnimationFrame(loop);
      };

      loop();
    }

    setupWebcam();

    return () => {
      webcam?.stop();
    };
  }, [model, webcam]); // Configura a webcam apenas uma vez quando o modelo e a webcam são definidos

  const handlePrediction = (predictions: Prediction[]) => {
    predictions.forEach(({ className, probability }) => {
      if (probability > 0.8) {
        console.log(
          `Classe prevista: ${className}, Probabilidade: ${probability}`
        );

        const espacoData = getEspacoData(className);

        if (espacoData) {
          console.log(
            `Navegando para ${espacoData.title}: ${espacoData.description}`
          );
          navigate(espacoData.path);
        } else {
          console.log(`Nenhum dado encontrado para ${className}`);
        }
      }
    });
  };

  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark>
      <Container>
        <HeaderContainer>
          <BackButton onClick={() => navigate('/')}>
            <img src={seta} alt="Seta voltar" />
          </BackButton>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '200px',
              height: '70px',
              marginTop: '50px',
              marginBottom: '30px',
            }}
          />
        </HeaderContainer>
        <CameraContainer ref={webcamRef}></CameraContainer>
      </Container>
    </WatermarkWrapper>
  );
};

export default QRCode;
