// import { JeelizCanvas2DHelper } from '../../../helpers/facefilter/JeelizCanvas2DHelper.ts';
import JeelizCanvas2DHelper from '../../../helpers/facefilter/NewCanva2D';
import { useEffect, useRef } from 'react';
import { JEELIZFACEFILTER, NN_DEFAULT } from 'facefilter';

function AppCanvas() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const jeelizRef = useRef<any>(null);

  useEffect(() => {
    if (jeelizRef.current) initJeeliz();
  }, [jeelizRef]);

  const initJeeliz = () => {
    let CVD: any = null;
    console.log('initJeeliz');
    JEELIZFACEFILTER.init({
      canvas: jeelizRef.current,
      scanSettings: {
        //enableAsyncReadPixels: false
      },
      NNC: NN_DEFAULT, // root of NN_DEFAULT.json file
      callbackReady: function (errCode: number, spec: any) {
        if (errCode) {
          console.log('AN ERROR HAPPENS. SORRY BRO :( . ERR =', errCode);
          return;
        }

        console.log('INFO: JEELIZFACEFILTER IS READY');
        CVD = JeelizCanvas2DHelper(spec);
        // CVD.Init_scene(spec);
      },

      // called at each render iteration (drawing loop):
      callbackTrack: function (detectState: any) {
        if (
          CVD.ISDETECTED &&
          detectState.detected <
            CVD.SETTINGS.detectionThreshold - CVD.SETTINGS.detectionHysteresis
        ) {
          // DETECTION LOST
          CVD.detect_callback(false);
          CVD.ISDETECTED = false;
        } else if (
          !CVD.ISDETECTED &&
          detectState.detected >
            CVD.SETTINGS.detectionThreshold + CVD.SETTINGS.detectionHysteresis
        ) {
          // FACE DETECTED
          CVD.detect_callback(true);
          CVD.ISDETECTED = true;
        }

        // render the video screen:
        CVD.GL.viewport(0, 0, CVD.CV.width, CVD.CV.height);
        CVD.GL.useProgram(CVD.SHADERVIDEO.program);
        CVD.GL.uniformMatrix2fv(
          CVD.SHADERVIDEO.videoTransformMat2,
          false,
          CVD.VIDEOTRANSFORMMAT2
        );
        CVD.GL.bindTexture(CVD.GL.TEXTURE_2D, CVD.VIDEOTEXTURE);
        CVD.GL.drawElements(CVD.GL.TRIANGLES, 3, CVD.GL.UNSIGNED_SHORT, 0);

        if (CVD.ISDETECTED) {
          const aspect = CVD.CV.width / CVD.CV.height;

          // move the cube in order to fit the head:
          const tanFOV = Math.tan(
            (aspect * CVD.SETTINGS.cameraFOV * Math.PI) / 360
          ); // tan(FOV/2), in radians
          const W = detectState.s; // relative width of the detection window (1-> whole width of the detection window)
          const D = 1 / (2 * W * tanFOV); // distance between the front face of the cube and the camera

          // coords in 2D of the center of the detection window in the viewport:
          const xv = detectState.x;
          const yv = detectState.y;

          // coords in 3D of the center of the cube (in the view coordinates system):
          const zOffset = 0.5; // Ajuste este valor conforme necessário
          const z = -D - 0.5 + zOffset; // minus because view coordinate system Z goes backward. -0.5 because z is the coord of the center of the cube (not the front face)
          const x = xv * D * tanFOV;
          const y = (yv * D * tanFOV) / aspect;

          // move and rotate the cube:
          CVD.set_mat4Position(
            CVD.MOVMATRIX,
            x,
            y + CVD.SETTINGS.pivotOffsetYZ[0],
            z + CVD.SETTINGS.pivotOffsetYZ[1] - 4
          );
          CVD.set_mat4RotationXYZ(
            CVD.MOVMATRIX,
            detectState.rx + CVD.SETTINGS.rotationOffsetX,
            detectState.ry,
            detectState.rz
          );

          // render the canvas above:
          CVD.GL.clear(CVD.GL.DEPTH_BUFFER_BIT);
          CVD.GL.enable(CVD.GL.BLEND);
          CVD.GL.blendFunc(CVD.GL.SRC_ALPHA, CVD.GL.ONE_MINUS_SRC_ALPHA);
          CVD.GL.useProgram(CVD.SHADERCANVAS.program);
          CVD.GL.enableVertexAttribArray(CVD.SHADERCANVAS.position);
          CVD.GL.enableVertexAttribArray(CVD.SHADERCANVAS.uv);
          CVD.GL.uniformMatrix4fv(
            CVD.SHADERCANVAS.movMatrix,
            false,
            CVD.MOVMATRIX
          );
          if (CVD.PROJMATRIXNEEDSUPDATE) {
            CVD.update_projMatrix();
          }
          CVD.GL.bindTexture(CVD.GL.TEXTURE_2D, CVD.CANVASTEXTURE);
          if (CVD.CANVASTEXTURENEEDSUPDATE || true) {
            CVD.GL.texImage2D(
              CVD.GL.TEXTURE_2D,
              0,
              CVD.GL.RGBA,
              CVD.GL.RGBA,
              CVD.GL.UNSIGNED_BYTE,
              CVD.CANVAS2D
            );
            CVD.CANVASTEXTURENEEDSUPDATE = false;
          }

          //  debugger;
          CVD.GL.bindBuffer(CVD.GL.ARRAY_BUFFER, CVD.VBO_VERTEX);
          CVD.GL.vertexAttribPointer(
            CVD.SHADERCANVAS.position,
            3,
            CVD.GL.FLOAT,
            false,
            20,
            0
          );
          CVD.GL.vertexAttribPointer(
            CVD.SHADERCANVAS.uv,
            2,
            CVD.GL.FLOAT,
            false,
            20,
            12
          );
          CVD.GL.bindBuffer(CVD.GL.ELEMENT_ARRAY_BUFFER, CVD.VBO_FACES);
          CVD.GL.drawElements(CVD.GL.TRIANGLES, 6, CVD.GL.UNSIGNED_SHORT, 0);
          CVD.GL.disableVertexAttribArray(CVD.SHADERCANVAS.uv);
          CVD.GL.disableVertexAttribArray(CVD.SHADERCANVAS.position);
          CVD.GL.disable(CVD.GL.BLEND);
        }
      },
      isKeepRunningOnWinFocusLost: true,
    });
    if (videoRef.current && jeelizRef.current) {
      videoRef.current.srcObject = jeelizRef.current.captureStream(30);
    }
  };

  return (
    <div className="App">
      <canvas
        id="jeelizCanvas"
        ref={jeelizRef}
        hidden={false}
        height={750}
        width={750}
      />
      <video
        id="jeelizVideo"
        ref={videoRef}
        hidden={true}
        height={450}
        width={450}
        autoPlay
        muted
      />
    </div>
  );
}

export default AppCanvas;
