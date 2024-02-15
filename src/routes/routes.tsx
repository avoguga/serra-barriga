import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/Error';
import Home from '../pages/Home';
import QRCode from '../pages/QRCode';
import HistorySelfie from '../pages/HistorySelfie';
import Personalities from '../pages/Personalities';
import TakeHome from '../pages/TakeHome';
import About from '../pages/About';
import SerraDaBarriga from '../pages/SerraDaBarriga';
import Videos from '../pages/Videos';
import Images from '../pages/Images';
import Audios from '../pages/Audios';
import VirtualExpo from '../pages/VirtualExpo';
import SerraBarriga2 from '../pages/SerraBarriga2';
import Tour360 from '../pages/Tour360';
import AppCanvas from '../pages/HistorySelfie/Teste/AppCanvas';
import PersonalityPage from '../pages/Personality';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/qrcode',
    element: <QRCode />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/selfie',
    element: <HistorySelfie />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/selfie:filterName',
        element: <AppCanvas />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: 'personalities',
    element: <Personalities />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ':personalityName', // A rota para o componente Mundo como sub-rota de personalities
        element: <PersonalityPage  />,
        errorElement: <ErrorPage />,
      },
    ]
  },
  {
    path: '/takehome',
    element: <TakeHome />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/takehome/videos',
        element: <Videos />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/takehome/images',
        element: <Images />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/takehome/audios',
        element: <Audios />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/takehome/virtual-expo',
        element: <VirtualExpo />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/takehome/serra-da-barriga',
        element: <SerraBarriga2 />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/takehome/tour-360',
        element: <Tour360 />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/serra-da-barriga',
    element: <SerraDaBarriga />,
    errorElement: <ErrorPage />,
  },
]);
