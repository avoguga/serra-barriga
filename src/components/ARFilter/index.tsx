import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import characterImg from '../../assets/aqualtune_final__cortada_-_cintura_pra_cima-removebg-preview.png';

import { BackButton } from '../VideoScreen/styles';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import { useNavigate } from 'react-router-dom';


const ARFilterComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const navigate = useNavigate();


  const [characterPosition, setCharacterPosition] = useState({ x: -0.3, y: 0, z: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const setupVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current!.play();
            initializeThreeJS();
          };
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    const initializeThreeJS = () => {
      if (canvasRef.current && videoRef.current) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current as HTMLCanvasElement, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        camera.position.z = 3;

        // Video texture
        const videoTexture = new THREE.VideoTexture(videoRef.current as HTMLVideoElement);
        const videoMaterial = new THREE.MeshBasicMaterial({ map: videoTexture, side: THREE.DoubleSide });

        // Calculate video aspect ratio
        const videoAspect = (videoRef.current as HTMLVideoElement).videoWidth / (videoRef.current as HTMLVideoElement).videoHeight;
        const videoHeight = 5;
        const videoWidth = videoHeight * videoAspect;

        const videoGeometry = new THREE.PlaneGeometry(videoWidth, videoHeight);
        const videoMesh = new THREE.Mesh(videoGeometry, videoMaterial);
        videoMesh.position.z = 0;
        scene.add(videoMesh);

        // Character image
        const characterTexture = new THREE.TextureLoader().load(characterImg);
        const characterMaterial = new THREE.MeshBasicMaterial({ map: characterTexture, transparent: true });

        const characterGeometry = new THREE.PlaneGeometry(1, 1.7);
        const characterMesh = new THREE.Mesh(characterGeometry, characterMaterial);
        characterMesh.position.set(characterPosition.x, characterPosition.y, characterPosition.z);
        scene.add(characterMesh);

        

        const animate = () => {
          requestAnimationFrame(animate);

   
       
          renderer.render(scene, camera);
        };

        animate();

        const handleMouseDown = (event: MouseEvent | TouchEvent) => {
          setIsDragging(true);
          if (event instanceof MouseEvent) {
            setDragStart({ x: event.clientX, y: event.clientY });
          } else {
            const touch = event.touches[0];
            setDragStart({ x: touch.clientX, y: touch.clientY });
          }
        };

        const handleMouseMove = (event: MouseEvent | TouchEvent) => {
          if (isDragging && dragStart) {
            let clientX, clientY;
            if (event instanceof MouseEvent) {
              clientX = event.clientX;
              clientY = event.clientY;
            } else {
              const touch = event.touches[0];
              clientX = touch.clientX;
              clientY = touch.clientY;
            }
            const deltaX = (clientX - dragStart.x) / 100;
            const deltaY = (clientY - dragStart.y) / 100;
            setCharacterPosition((prevPosition) => ({
              ...prevPosition,
              x: prevPosition.x + deltaX,
              y: prevPosition.y - deltaY,
            }));
            setDragStart({ x: clientX, y: clientY });
          }
        };

        const handleMouseUp = () => {
          setIsDragging(false);
          setDragStart(null);
        };

        if (canvasRef.current) {
          canvasRef.current.addEventListener('mousedown', handleMouseDown);
          canvasRef.current.addEventListener('touchstart', handleMouseDown);
          window.addEventListener('mousemove', handleMouseMove);
          window.addEventListener('touchmove', handleMouseMove);
          window.addEventListener('mouseup', handleMouseUp);
          window.addEventListener('touchend', handleMouseUp);
        }

        return () => {
          if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
          }
         
          if (canvasRef.current) {
            canvasRef.current.addEventListener('mousedown', handleMouseDown);
            canvasRef.current.removeEventListener('touchstart', handleMouseDown);
          }
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('touchmove', handleMouseMove);
          window.removeEventListener('mouseup', handleMouseUp);
          window.removeEventListener('touchend', handleMouseUp);
        };
      }
    };

    setupVideo();
  }, [characterPosition]);

  return (
    <>
    <BackButton onClick={() => {
              navigate(-1);
            }}
          >
            <img src={seta} alt="" />
      
    </BackButton>
      <video ref={videoRef} autoPlay muted style={{ display: 'none' }} />
      <canvas ref={canvasRef} />
    </>
  );
};

export default ARFilterComponent;
