import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DownArrow from '../../assets/icons/seta baixo.svg';
  
  const ArrowButton = styled.button`
    position: fixed;
    width: auto;
    
    left: 90%;
    
height: 15px;
    top:60%;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
  `;
  
  const BtnDownArrow = () => {
    const [visible, setVisible] = useState(false);
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled <= 300) {
        setVisible(true);
      } else if (scrolled > 300) {
        setVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisible);
      return () => window.removeEventListener('scroll', toggleVisible);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    };
  
    return (
      <ArrowButton 
        onClick={scrollToTop} 
        style={{ display: visible ? 'inline' : 'none' }}>
        <img 
            src={DownArrow} 
            alt={'Seta para descer a página.'} 
            />
      </ArrowButton>
    );
  };
  
  export default BtnDownArrow;