import React, { useEffect, useRef } from 'react';
import * as tmImage from '@teachablemachine/image/';

const ModelComponent: React.FC = () => {
  const webcamRef = useRef<HTMLDivElement>(null);   
  const labelContainerRef = useRef<HTMLDivElement>(null);
  const URL = "https://teachablemachine.withgoogle.com/models/07fghDy7n/";

  useEffect(() => {
    let webcam: tmImage.Webcam;
    async function init() {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";
      const model = await tmImage.load(modelURL, metadataURL);
      const maxPredictions = model.getTotalClasses();

      // Configura a webcam
      const webcam = new tmImage.Webcam(200, 200, true);
      await webcam.setup(); // request access to the webcam
      await webcam.play();
      if (webcamRef.current) {
        webcamRef.current.appendChild(webcam.canvas);
      }

      // Cria elementos de label no DOM
      if (labelContainerRef.current) {
        for (let i = 0; i < maxPredictions; i++) {
          const div = document.createElement("div");
          labelContainerRef.current.appendChild(div);
        }
      }

      // Função de loop para fazer previsões
      async function loop() {
        webcam.update(); // update the webcam frame
        const prediction = await model.predict(webcam.canvas);
        if (labelContainerRef.current) {
          for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
              prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainerRef.current.childNodes[i].textContent = classPrediction;
          }
        }
        requestAnimationFrame(loop);
      }

      loop();
    }

    init();
    return () => {
        webcam.stop(); // Importante para desligar a webcam quando o componente é desmontado
      };
    }, [URL]);
  return (
    <div>
      <div>Teachable Machine Image Model</div>
      <div ref={webcamRef} id="webcam-container"></div>
      <div ref={labelContainerRef} id="label-container"></div>
    </div>
  );
};

export default ModelComponent;
