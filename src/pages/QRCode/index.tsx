import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as tmImage from '@teachablemachine/image';
import logo from '../../assets/logo.png';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';
import * as C from './styles';

import seta from '../../assets/seta voltar e abaixo - branco.svg';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import { getEspacoData } from '../../helpers/Espacos';
import aaa from '../../assets/icons/mão com celular.png';
import scannerButton from '../../assets/icons/i_botao escanear.png';
import styled from 'styled-components';

const InfoImage = styled.img`
  width: 90px;
  height: 120px;
  position: absolute;
  right: 70%;
`;

export interface EspacoData {
  path: string;
  title: string;
  icon: string;
  description: { pt: string; en: string };
}

interface Prediction {
  className: string;
  probability: number;
}

interface TeachableMachineModel {
  predict: (input: HTMLImageElement) => Promise<Prediction[]>;
}
//

const QRCode: React.FC = () => {
  const navigate = useNavigate();
  const webcamRef = useRef<HTMLDivElement>(null);
  const [model, setModel] = useState<TeachableMachineModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    const loadModelAndCamera = async () => {
      const modelURL =
        'https://teachablemachine.withgoogle.com/models/Ks1T5_dnK/model.json';
      const metadataURL =
        'https://teachablemachine.withgoogle.com/models/Ks1T5_dnK/metadata.json';
      try {
        const loadedModel = (await tmImage.load(
          modelURL,
          metadataURL
        )) as TeachableMachineModel;
        setModel(loadedModel);

        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
        });
        setVideoStream(stream);

        const videoElement = document.createElement('video');
        videoElement.srcObject = stream;
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.setAttribute('playsinline', '');
        videoElement.style.objectFit = 'cover';

        if (webcamRef.current) {
          webcamRef.current.innerHTML = ''; // Limpa quaisquer elementos de vídeo existentes
          webcamRef.current.appendChild(videoElement);
        }

        setIsLoading(false);
        console.log('Modelo e câmera carregados');
      } catch (error) {
        console.error('Erro ao carregar o modelo ou a câmera:', error);
        setIsLoading(false);
      }
    };

    loadModelAndCamera();

    return () => {
      // Limpa a câmera quando o componente é desmontado
      if (videoStream) {
        videoStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const predict = async () => {
      if (!model || isLoading || !isScanning) return;

      const videoElement = webcamRef.current?.querySelector('video');
      if (!videoElement) return;

      const performPrediction = async () => {
        try {
          const image = await captureImage(videoElement as HTMLVideoElement);
          const prediction = await model.predict(image);
          const highProbPrediction = prediction.sort(
            (a, b) => b.probability - a.probability
          )[0];

          console.log('Predição:', highProbPrediction);

          if (
            highProbPrediction.probability > 0.9 ||
            highProbPrediction.className === 'nada'
          ) {
            const espacoData = getEspacoData(highProbPrediction.className);
            if (espacoData) {
              console.log('Navegando para:', espacoData.path);
              cancelAnimationFrame(animationFrameId); // Interrompe a predição
              navigate(espacoData.path);
              return;
            } else if (!alertShown) {
              alert('Imagem não reconhecida, por favor, tente novamente.');
              setIsScanning(false);
              setAlertShown(true);
              return;
            }
          }

          // Continue a predição no próximo frame e tal
          animationFrameId = requestAnimationFrame(performPrediction);
        } catch (error) {
          console.error('Erro durante a predição:', error);
          setIsScanning(false);
        }
      };

      performPrediction();
    };

    if (isScanning) {
      predict();
    }

    return () => {
      cancelAnimationFrame(animationFrameId); // Garante que a animação seja limpa se o componente for desmontado
    };
  }, [model, isLoading, isScanning, navigate, alertShown]);

  const captureImage = async (
    videoElement: HTMLVideoElement
  ): Promise<HTMLImageElement> => {
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Não foi possível obter o contexto do canvas');
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const image = new Image();
    image.src = canvas.toDataURL('image/jpg');
    await new Promise((resolve) => (image.onload = resolve));
    return image;
  };

  const handleScanClick = () => {
    setIsScanning(!isScanning);
    setAlertShown(false);
  };

  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark={true}>
      <C.Container>
        <C.HeaderContainer>
          <C.BackButton onClick={() => navigate('/')}>
            <img src={seta} alt="Seta voltar" />
          </C.BackButton>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '169px',
              height: '70px',
              marginTop: '50px',
              marginBottom: '50px',
            }}
          />
        </C.HeaderContainer>
        <C.BottomContainer>
          <InfoImage src={aaa} alt="informação de como ler imagem" />
          <C.TextContainer>
            <p>
              Aponte para o símbolo da placa e aperte o botão para escanear.
            </p>
          </C.TextContainer>
        </C.BottomContainer>
        <C.CameraContainer ref={webcamRef}></C.CameraContainer>
        <C.ScannerButton onClick={handleScanClick}>
          <C.ScannerImage src={scannerButton} alt="Botão para escanear" />
        </C.ScannerButton>
        <div
          style={{
            textAlign: 'center',
            fontSize: '18px',
            color: '#FFFF',
            marginTop: '50px',
          }}
        >
          <p>
            <span
              style={{
                visibility: isScanning ? 'visible' : 'hidden',
              }}
            >
              Escaneando, por favor, aguarde...
            </span>
            <br />
            <span
              style={{
                visibility: isLoading ? 'visible' : 'hidden',
              }}
            >
              Carregando a câmera, aguarde um momento...
            </span>
          </p>
        </div>
      </C.Container>
    </WatermarkWrapper>
  );
};

export default QRCode;
