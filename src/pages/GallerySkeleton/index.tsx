import React from 'react';
import styled, { keyframes } from 'styled-components';
import tiktok from '../../assets/logo.png';

const shimmerAnimation = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonWrapper = styled.div`
  background-color: #D66B00;
  height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



const SkeletonImageWrapper = styled.div`
  width: 150px;
  height: 40px;
  background-color: transparent;
  border-radius: 50%;
  margin-right: 20px;
`;

const SkeletonHeaderText = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  color: transparent;
  font-size: 10px;
  border-radius: 230px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px; // Adjust as needed
  height: 20px;
  margin-bottom: 25px;
`;

const SkeletonGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  overflow-y: scroll;
`;

const SkeletonImage = styled.div`
  background:#753D00;
  animation: ${shimmerAnimation} 2s infinite linear;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.1) 100%);
  background-size: 1000px 100%;
  width: 140px;
  height: 140px;
  border-radius: 4px;
`;

const GallerySkeleton = () => {
  return (
    <SkeletonWrapper>
 
      <img
          src={tiktok}
          alt="tiktok"
          loading='lazy'

          style={{
            width: '200px',
            height: '70px',
            marginTop: '50px',
            marginBottom: '30px',
          
          }}
        />
      <SkeletonImageWrapper />
      <SkeletonHeaderText />
      <SkeletonGallery>
        {Array.from({ length: 12 }).map((_, index) => (
          <SkeletonImage key={index} />
        ))}
      </SkeletonGallery>
    </SkeletonWrapper>
  );
};

export default GallerySkeleton;
