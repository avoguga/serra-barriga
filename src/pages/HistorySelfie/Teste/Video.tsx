import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import backgroundImage from '../../../assets/iansã.png'; // Ensure this path is correct

const VideoBackground = styled.div`
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  position: relative;
  height: 500px; // Set your desired size
  width: 500px;
`;

const VideoFeed = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error('Error accessing the webcam', err));
    }
  }, []);

  return (
    <VideoBackground>
      <VideoFeed ref={videoRef} autoPlay muted />
    </VideoBackground>
  );
};

export default Video;
