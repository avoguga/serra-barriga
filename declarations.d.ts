declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module 'facefilter';

declare module 'react-qr-reader';

declare module 'react-icons/fa';

declare module '@teachablemachine/image';

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': any; // Use `any` para permitir qualquer propriedade. Você pode especificar props mais precisas conforme necessário.
  }
}

declare module '*.glb' {
  const src: string;
  export default src;
}
