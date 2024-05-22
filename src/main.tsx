import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import './styles/global.css';
import './styles/fonts.css';
import { AudioProvider } from './context/audioContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AudioProvider>
    <RouterProvider router={router} />
  </AudioProvider>
);
