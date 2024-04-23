import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';

import tiktok from '../../assets/icons/app serra.svg';

const Tour360 = () => {
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
      </div>
    </WatermarkWrapper>
  );
};

export default Tour360;
