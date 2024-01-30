import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import styled from 'styled-components';
import tiktok from '../../assets/icons/app serra.svg';

const SerraBarriga2 = () => {
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
        <h1>serra barriga</h1>
      </div>
    </WatermarkWrapper>
  );
};

export default SerraBarriga2;
