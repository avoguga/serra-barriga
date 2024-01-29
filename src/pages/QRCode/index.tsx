import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRCode = () => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (result) {
            setData(result.getText());
            return;
          }
          console.info(error);
        }}
        constraints={{}}
        containerStyle={{ width: 300, height: 300 }}
      />
      <p>{data}</p>
    </>
  );
};
export default QRCode;
