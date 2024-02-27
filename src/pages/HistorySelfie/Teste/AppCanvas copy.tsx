import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from 'three';

import { JEELIZFACEFILTER, NN_4EXPR } from 'facefilter';

import { JeelizThreeFiberHelper } from '../../../helpers/facefilter/JeelizThreeFiberHelper';

interface Expression {
  mouthOpen: number;
  mouthSmile: number;
  eyebrowFrown: number;
  eyebrowRaised: number;
}

const _maxFacesDetected = 1;
const _faceFollowers: (THREE.Object3D | undefined)[] = new Array(
  _maxFacesDetected
);

const defaultExpression: Expression = {
  mouthOpen: 0,
  mouthSmile: 0,
  eyebrowFrown: 0,
  eyebrowRaised: 0,
};

const _expressions: Expression[] = new Array(_maxFacesDetected).fill(
  defaultExpression
);

const FaceFollower: React.FC<{ faceIndex: number; expression: Expression }> = ({
  faceIndex,
  expression,
}) => {
  const objRef = useRef<THREE.Object3D>(null as unknown as THREE.Object3D);

  useEffect(() => {
    const threeObject3D = objRef.current;
    _faceFollowers[faceIndex] = threeObject3D;
  }, [faceIndex]);

  const mouthOpenRef = useRef<THREE.Mesh>(null);
  const mouthSmileRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (mouthOpenRef.current && expression.mouthOpen !== undefined) {
      const s0 = Math.max(0.001, expression.mouthOpen);
      mouthOpenRef.current.scale.set(s0, 1, s0);
    }

    if (mouthSmileRef.current && expression.mouthSmile !== undefined) {
      const s1 = Math.max(0.001, expression.mouthSmile);
      mouthSmileRef.current.scale.set(s1, 1, s1);
    }
  });

  console.log('RENDER FaceFollower component');

  return (
    <object3D ref={objRef}>
      <mesh name="mainCube">
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>

      <mesh
        ref={mouthOpenRef}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -0.2, 0.2]}
      >
        <cylinderGeometry args={[0.3, 0.3, 1, 32]} />
        <meshBasicMaterial color={0xff0000} />
      </mesh>

      <mesh
        ref={mouthSmileRef}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -0.2, 0.2]}
      >
        <cylinderGeometry
          args={[0.5, 0.5, 1, 32, 1, false, -Math.PI / 2, Math.PI]}
        />
        <meshBasicMaterial color={0xff0000} />
      </mesh>
    </object3D>
  );
};

let _threeFiber: any = null;
const ThreeGrabber: React.FC<{ sizing: any }> = (props) => {
  _threeFiber = useThree();
  useFrame(
    JeelizThreeFiberHelper.update_camera.bind(
      null,
      props.sizing,
      _threeFiber.camera as PerspectiveCamera
    )
  );
  return null;
};

const compute_sizing = () => {
  const height = window.innerHeight;
  const wWidth = window.innerWidth;
  const width = Math.min(wWidth, height);

  const top = 0;
  const left = (wWidth - width) / 2;
  return { width, height, top, left };
};

const AppCanvas: React.FC = () => {
  const [sizing, setSizing] = useState(compute_sizing);
  const [isInitialized, setIsInitialized] = useState(false);

  let _timerResize: NodeJS.Timeout | null = null;
  const handle_resize = () => {
    if (_timerResize) {
      clearTimeout(_timerResize);
    }
    _timerResize = setTimeout(do_resize, 200);
  };

  const do_resize = () => {
    _timerResize = null;
    const newSizing = compute_sizing();
    setSizing(newSizing);
  };

  useEffect(() => {
    if (!_timerResize) {
      JEELIZFACEFILTER.resize();
    }
  }, [sizing]);

  const callbackReady = (errCode: number, spec: any) => {
    if (errCode) {
      console.log('AN ERROR HAPPENS. ERR =', errCode);
      return;
    }

    console.log('INFO: JEELIZFACEFILTER IS READY');
    JeelizThreeFiberHelper.init(spec, _faceFollowers, callbackDetect);
    setIsInitialized(true);
  };

  const callbackTrack = (detectStatesArg: any) => {
    const detectStates = detectStatesArg.length
      ? detectStatesArg
      : [detectStatesArg];

    JeelizThreeFiberHelper.update(
      detectStates,
      _threeFiber.camera as PerspectiveCamera
    );

    JEELIZFACEFILTER.render_video();

    detectStates.forEach((detectState: any, faceIndex: number) => {
      const exprIn = detectState.expressions;
      const expression = _expressions[faceIndex];
      expression.mouthOpen = exprIn[0];
      expression.mouthSmile = exprIn[1];
      expression.eyebrowFrown = exprIn[2];
      expression.eyebrowRaised = exprIn[3];
    });
  };

  const callbackDetect = (faceIndex: number, isDetected: boolean) => {
    if (isDetected) {
      console.log('DETECTED');
    } else {
      console.log('LOST');
    }
  };

  const faceFilterCanvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (isInitialized || !faceFilterCanvasRef.current) {
      // Se já foi inicializado ou o ref do canvas ainda não está pronto, não faça nada
      return;
    }

    window.addEventListener('resize', handle_resize);
    window.addEventListener('orientationchange', handle_resize);

    JEELIZFACEFILTER.init({
      canvas: faceFilterCanvasRef.current!,
      NNC: NN_4EXPR,
      maxFacesDetected: 1,
      followZRot: true,
      callbackReady,
      callbackTrack,
    });

    // Função de limpeza para desinicialização
    return () => {
      JEELIZFACEFILTER.destroy();
      window.removeEventListener('resize', handle_resize);
      window.removeEventListener('orientationchange', handle_resize);
    };
  }, []); // Array de dependências vazio para executar apenas na montagem

  return (
    <div>
      <Canvas
        className="mirrorX"
        style={{
          position: 'fixed',
          zIndex: 2,
          ...sizing,
        }}
        gl={{
          preserveDrawingBuffer: true,
        }}
        camera={{ position: [0, 0, 0], fov: 75 }}
      >
        <ThreeGrabber sizing={sizing} />
        <FaceFollower faceIndex={0} expression={_expressions[0]} />
      </Canvas>

      <canvas
        className="mirrorX"
        ref={faceFilterCanvasRef}
        style={{
          position: 'fixed',
          zIndex: 1,
          ...sizing,
        }}
        width={sizing.width}
        height={sizing.height}
      />
    </div>
  );
};

export default AppCanvas;
