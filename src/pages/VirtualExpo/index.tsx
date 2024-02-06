import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import styled from 'styled-components';
import tiktok from '../../assets/icons/app serra.svg';
import '@google/model-viewer';
import Astro from '../../assets/Astronaut.glb';

const VirtualExpo = () => {
  return (
    <WatermarkWrapper>
      <div
        style={{
          backgroundColor: '#8AA61E',
          height: '100vh',
        }}
      >
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

        <model-viewer
          ar
          camera-controls
          touch-action="pan-y"
          src={Astro}
          alt="A 3D model of an astronaut"
        >
          <button
            slot="ar-button"
            style={{
              backgroundColor: 'white',
              borderRadius: '4px',
              border: 'none',
              position: 'absolute',
              top: '16px',
              right: '16px',
            }}
          >
            👋 Activate AR
          </button>
        </model-viewer>
      </div>
    </WatermarkWrapper>
  );
};

export default VirtualExpo;
