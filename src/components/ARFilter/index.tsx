import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../VideoScreen/styles';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import zumbi from '../../assets/zumbi final.png';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Spinner = styled.div`
  color: #fff;
  font-size: 2em;
`;

const Video = styled.video`
  width: 100vw;
  height: 100vh;
  transform: scaleX(-1); /* Mirror the video feed */
`;

const Canvas = styled.canvas`
  width: 100vw;
  height: 100vh;
`;

const ARFilterComponent: React.FC = React.memo(() => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const backgroundCanvasRef = useRef<HTMLCanvasElement>(null);
  const historicalCharacterRef = useRef<HTMLImageElement>(null);
  const [historicalCharacterLoaded, setHistoricalCharacterLoaded] =
    useState(false);
  const [videoVisible, setVideoVisible] = useState(true);
  const [loading, setLoading] = useState(false); // State to control overlay visibility

  const onHolisticResults = useCallback(
    (results: any) => {
      if (
        canvasRef.current &&
        backgroundCanvasRef.current &&
        historicalCharacterLoaded
      ) {
        const canvasCtx = canvasRef.current.getContext('2d');
        const backgroundCanvasCtx =
          backgroundCanvasRef.current.getContext('2d');

        if (canvasCtx && backgroundCanvasCtx) {
          canvasCtx.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
          backgroundCanvasCtx.clearRect(
            0,
            0,
            backgroundCanvasRef.current.width,
            backgroundCanvasRef.current.height
          );

          backgroundCanvasCtx.globalCompositeOperation = 'source-over';
          backgroundCanvasCtx.drawImage(
            results.image,
            0,
            0,
            backgroundCanvasRef.current.width,
            backgroundCanvasRef.current.height
          );

          if (results.poseLandmarks && historicalCharacterRef.current) {
            const leftShoulder = results.poseLandmarks[11];
            const leftShoulderX =
              leftShoulder.x * backgroundCanvasRef.current.width;
            const leftShoulderY =
              leftShoulder.y * backgroundCanvasRef.current.height;

            const imageWidth = historicalCharacterRef.current.width;
            const imageHeight = historicalCharacterRef.current.height;
            const offsetX = -imageWidth / 2;
            const offsetY = -imageHeight / 2;

            backgroundCanvasCtx.drawImage(
              historicalCharacterRef.current,
              leftShoulderX + offsetX,
              leftShoulderY + offsetY,
              imageWidth,
              imageHeight
            );
          }

          backgroundCanvasCtx.restore();

          canvasCtx.save();
          canvasCtx.scale(-1, 1);
          canvasCtx.translate(-canvasRef.current.width, 0);

          canvasCtx.globalCompositeOperation = 'copy';
          canvasCtx.drawImage(
            results.segmentationMask,
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );

          canvasCtx.globalCompositeOperation = 'source-in';
          canvasCtx.drawImage(
            results.image,
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );

          canvasCtx.globalCompositeOperation = 'destination-over';
          canvasCtx.drawImage(
            backgroundCanvasRef.current,
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );

          canvasCtx.restore();

          // Hide the video element after the first frame is processed
          setVideoVisible(false);

          // Hide the loading overlay
          setLoading(false);
        }
      }
    },
    [historicalCharacterLoaded]
  );

  useEffect(() => {
    const loadCamera = async () => {
      if (videoRef.current) {
        const constraints = {
          video: {
            width: { ideal: 3840 },
            height: { ideal: 2160 },
            facingMode: 'user',
          },
          audio: false,
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream;
      }
    };

    const loadScripts = async () => {
      setLoading(true); // Show the loading overlay

      const scripts = [
        'https://cdn.jsdelivr.net/npm/@mediapipe/holistic/holistic.js',
        'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js',
      ];

      await Promise.all(
        scripts.map((src) => {
          return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        })
      );

      const { Holistic, Camera } = window as any;

      const holistic = new Holistic({
        locateFile: (file: string) =>
          `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`,
      });

      holistic.setOptions({
        modelComplexity: 1,
        smoothLandmarks: true,
        enableSegmentation: true,
        smoothSegmentation: true,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.7,
      });

      holistic.onResults(onHolisticResults);

      if (videoRef.current) {
        const camera = new Camera(videoRef.current, {
          onFrame: async () => {
            if (videoRef.current) {
              await holistic.send({ image: videoRef.current });
            }
          },
          width: 1920,
          height: 1080,
        });
        camera.start();
      }
    };

    const initialize = async () => {
      await loadCamera();
      setTimeout(() => {
        loadScripts().catch((error) => {
          console.error('Failed to load MediaPipe scripts', error);
        });
      }, 1000); // 1 second delay
    };

    initialize();

    return () => {
      const holisticScript = document.querySelector('script[src*="holistic"]');
      const cameraUtilsScript = document.querySelector(
        'script[src*="camera_utils"]'
      );
      if (holisticScript) holisticScript.remove();
      if (cameraUtilsScript) cameraUtilsScript.remove();
    };
  }, [onHolisticResults]);

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>
        <img src={seta} alt="Voltar" />
      </BackButton>
      {loading && (
        <Overlay>
          <Spinner>Loading...</Spinner>
        </Overlay>
      )}
      <Video
        ref={videoRef}
        style={{
          display: videoVisible ? 'block' : 'none',
        }}
        autoPlay
      />
      <Canvas
        ref={backgroundCanvasRef}
        width={3840}
        height={2160}
        style={{ display: 'none' }}
      />
      <Canvas ref={canvasRef} width={1920} height={1080} />
      <img
        ref={historicalCharacterRef}
        src={zumbi}
        alt="Historical character"
        style={{ display: 'none' }}
        onLoad={() => setHistoricalCharacterLoaded(true)}
        onError={() => console.error('Failed to load the Historical Character')}
      />
    </>
  );
});

export default ARFilterComponent;
