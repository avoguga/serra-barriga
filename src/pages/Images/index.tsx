import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import styled from 'styled-components';
import tiktok from '../../assets/icons/app serra.svg';
import logo from '../../assets/app_serra.svg';
import HomeButton from '../../components/HomeButton';
import imagem from '../../assets/icons/imagem - branco.svg';
import useNavigate from 'react-router-dom';
import './styles.css';
// seta from '../../serra-barriga/src/assets/seta voltar e abaixo - branco.svg';
import { Color } from 'three';

const Images = () => {
  return (

    <WatermarkWrapper>
      
      <div
        style={{
          backgroundColor: '#D66B00',
          height: '160vh',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div id='voltar' className='back'>
          <a href="serra-barriga\src\pages\TakeHome\index.tsx">
            <img src="" alt="" />
          </a>
        </div>
        <img
          src={tiktok}
          alt="tiktok"
          style={{
            width: '100%',
            height: '102px',
            marginTop: '118px',
            marginBottom: '67px',
          }}
        />
        <div className='galeria'>
          <img src={imagem} alt="" />
          <h2>
            GALERIA DE IMAGENS
         </h2>
        </div>
     
        <div className='fotos'>
          <div className='foto'
          style={{
            background: '#F48306'
          }}></div>
          <div className='foto'
          style={{
            background: '#009289'
          }}></div>
          <div className='foto'
          style={{
            background: '#FFBF00'
          }}></div>
          <div className='foto'
          style={{
            background: '#3D4B09'
          }}></div>
          <div className='foto'
          style={{
            background: '#009289'
          }}></div>
          <div className='foto'
          style={{
            background: '#F48306'
          }}></div>
          <div className='foto'
          style={{
            background: '#3D4B09'
          }}></div>
          <div className='foto'
          style={{
            background: '#FFBF00'
          }}></div>
      </div>
      </div>    
    </WatermarkWrapper>
    
  );
};

export default Images;
