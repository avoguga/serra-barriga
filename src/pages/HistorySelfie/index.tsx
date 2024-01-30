import AppCanvas from './Teste/AppCanvas';
import Video from './Teste/Video';

const HistorySelfie = () => {
  return (
    <div>
      HistorySelfie
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AppCanvas />
        {/* <Video /> */}
      </div>
    </div>
  );
};

export default HistorySelfie;
