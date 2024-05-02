
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/Error';
import Home from '../pages/Home';
import QRCode from '../pages/QRCode';
import HistorySelfie from '../pages/HistorySelfie';
import Personalities from '../pages/Personalities';
import TakeHome from '../pages/TakeHome';
import About from '../pages/About';
import SerraDaBarriga from '../pages/SerraDaBarriga';
import VideosAndImages from '../pages/VideosAndImages';


import VirtualExpo from '../pages/VirtualExpo';
import SerraBarriga2 from '../pages/SerraBarriga2';
import Tour360 from '../pages/Tour360';
import VideoPlay from '../pages/VideoPlay';

import PersonalityPage from '../pages/Personality';

import EventDetails from '../pages/EventDetails'
import Maps from '../pages/Maps';
import HistoricalFigurePage from '../pages/HistoricalFigurePage';





import VideoScreen from '../components/VideoScreen';
import InfoView from '../pages/Espacos/infomation';
import ImageView from '../pages/Espacos/imagens';
import LocView from '../pages/Espacos/Location';
import VideosView from '../pages/Espacos/Videos';
import PlayView from '../pages/Espacos/PlayVideos';
import AudiosView from '../pages/Espacos/Audios';
import AudiosTakeHome from '../pages/AudiosTakeHome';
import SelfieView from '../pages/Espacos/Selfie';
import Ficha from '../pages/Ficha';
import Agenda from '../pages/Agenda';
import HomeExpo from '../pages/HomeExpo';
import ExpoVideos from '../pages/ExpoVideos';
import ExpoDetails from '../pages/ExpoDetails';



// eslint-disable-next-line react-refresh/only-export-components





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
    path: '/takehome/personalities',
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
    path: '/takehome/videosAndImages',
    element: <VideosAndImages />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/video',
    element: <VideoScreen  />,
    errorElement: <ErrorPage />,
   
  },
  {
    path: '/takehome/virtual-expo',
    element: <VirtualExpo/>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/takehome/audios',
    element: <AudiosTakeHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/virtual-expo',
    element: <HomeExpo />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/virtual-expo/expo-videos',
    element: <ExpoVideos />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/virtual-expo/expo-details/:modelId',
    element: <ExpoDetails/>,
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
    path: '/about/Ficha',
    element: <Ficha />,
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
    path: '/agenda',
    element: 
        <Agenda />
     
  ,
    errorElement: <ErrorPage />,
  },
  
    {
      path: '/agenda/:eventId', 
      element: <EventDetails />,
      errorElement: <ErrorPage />,
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
  {
    path: '/historical-figure/:figureName/infoView', 
    element: <InfoView />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/historical-figure/:figureName/ImageView', 
    element: <ImageView />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/historical-figure/:figureName/LocView', 
    element: <LocView />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/historical-figure/:figureName/VideosView',
    element: <VideosView />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/historical-figure/:figureName/VideosView/PlayView',
    element: <PlayView />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/historical-figure/:figureName/AudiosView',
    element: <AudiosView />,
    errorElement: <ErrorPage />,
  },

  {
    path: '/historical-figure/:figureName/SelfieView',
    element: <SelfieView />,
    errorElement: <ErrorPage />,
  },
  
  
]);
