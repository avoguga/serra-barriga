import React, { useState } from 'react';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import logo from '../../assets/logo.png';

import styled from 'styled-components';

import FloatingButtonBar from '../../components/FloatingContainer';
import BtnDownArrow from '../../components/ScrollButton';
import tiktok from '../../assets/icons/logo-tiktok.svg';
import SelfieDestiny from '../../components/SelfieDestiny';
import { espacoSelfie } from '../../helpers/SelfieHistorica';
import selfiee from '../../assets/icons/i_selfie.png'



export const Container = styled.div`
  background-color: #8AA61E;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: 'FuturaPT', sans-serif;
  }
`;

export const SelfieContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: baseline;
  background: #586617 0% 0% no-repeat padding-box;
  width: 235px;
  height: 60px;
  border-radius: 35px;
  gap: 15px;

  img {
    width: 55px;
    height: 55px;
  
    margin-left: 10px;
  }

  h3 {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 0.89;
    font-family: 'FuturaPTDemi', sans-serif;
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 380px;
  border: 3px solid #ffffff;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  background: #313a0a;
  width: 100vw;
  height: 10.5vh;
  display: flex;
  justify-content: center;
  color: #ffff;
  align-items: center;
  h4 {
    font-family: 'FuturaPT', sans-serif;
    font-size: 19px;
    color: #ffff;
  }
  opacity: 0.59;
`;

const Selfie = () => {
  const initialContent: { [key: string]: JSX.Element } = {};
  Object.keys(espacoSelfie).forEach((key) => {
    const imageUrl = espacoSelfie[key]?.[0];
    if (imageUrl) {
      initialContent[key] = <img src={imageUrl} alt={key} width={290} height={370} />;
    }
  });

  const [content, setContent] = useState<{ [key: string]: JSX.Element }>(initialContent);
  const [isInitial, setIsInitial] = useState(true);
 

  const handleClick = (personagem: string) => {
    setContent({ ...content, [personagem]: <SelfieDestiny  style={{ width: '290px', height: '370px' }}/> });
    setIsInitial(false);
    if (!isInitial) {
      const resetContent: { [key: string]: JSX.Element } = {};
      Object.keys(espacoSelfie).forEach((key) => {
        const imageUrl = espacoSelfie[key]?.[0];
        if (imageUrl) {
          resetContent[key] = <img src={imageUrl} alt={key} width={290} height={370} />;
        }
      });
      setContent(resetContent);
      setIsInitial(true);
    }
    }
  

  

  return (
    <WatermarkWrapper>
      <FloatingButtonBar backBgColor="#313A0A"  />
      <BtnDownArrow />
      <Container>
        <img
          src={tiktok}
          alt=""
          style={{
            width: '200px',
            height: '70px',
            marginTop: '80px',
          }}
        />
        <img
          src={logo}
          alt="logo serra da barriga"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '20px',
            marginBottom: '30px',
          }}
        />
        <SelfieContainer>
       <img src={selfiee} alt="" />
          <h3>SELFIE HISTÓRICA</h3>
        </SelfieContainer>
        <br />
        <br />
        <p
          style={{
            width: '280px',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 'normal',
            letterSpacing: '0.8px',
            color: 'rgba(255, 255, 255, 1)',
            fontFamily: 'FuturaPT',
          }}
        >
          Escolha um{' '}
          <span style={{ color: '#FFFFFF' }}>personagem da história e tire uma selfie</span> na
          serra da barriga
        </p>
        <br />
        {Object.keys(espacoSelfie).map((key) => (
          <div key={key} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#8AA61E', flexDirection: 'column' }}>
            <ImageContainer onClick={() => handleClick(key)}>{content[key]}  </ImageContainer>
            <p style={{ color: '#FFF',fontSize:'19px' }}>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
          </div>
        ))} <br /><br />
        <Footer>
          <h4 >Imagens meramente ilustrativas</h4>
        </Footer>
      </Container>
    </WatermarkWrapper>
  );
};

export default Selfie;
