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
import VideoPlay from '../pages/VideoPlay';
import AtalaiaView from '../pages/Atalaia';
import PersonalityPage from '../pages/Personality';
import Agenda from '../pages/Agenda';
import EventDetails from '../pages/EventDetails'
import Maps from '../pages/Maps';
import HistoricalFigurePage from '../pages/HistoricalFigurePage';
import AtalaiaInfoView from '../pages/Atalaia/Information';
import AtalaiaLocView from '../pages/Atalaia/Location';
import AtalaiaVideosView from '../pages/Atalaia/Videos';
import AtalaiaVideosPlayView from '../pages/Atalaia/PlayVideos';
import AtalaiaImgView from '../pages/Atalaia/Img';

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
  },
  {
    path: '/personalities',
    element: <Personalities />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ':personalityName', 
        element: <PersonalityPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: '/takehome',
    element: <TakeHome />,
    errorElement: <ErrorPage />,
  },
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
  {
    path: '/takehome/videos/video-play',
    element: <VideoPlay />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/atalaia-de-acaiuba',
    element: <AtalaiaView />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/atalaia-de-acaiuba/info',
    element: <AtalaiaInfoView />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/atalaia-de-acaiuba/location',
    element: <AtalaiaLocView />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/atalaia-de-acaiuba/videos',
    element: <AtalaiaVideosView />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/atalaia-de-acaiuba/videos/playvideos',
    element: <AtalaiaVideosPlayView />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/atalaia-de-acaiuba/images',
    element: <AtalaiaImgView />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/agenda',
    element: <Agenda />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ':eventId', 
        element: <EventDetails />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: '/maps',
    element: <Maps />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/historical-figure/:figureName', 
    element: <HistoricalFigurePage />,
    errorElement: <ErrorPage />,
  },
]);
