import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/Error';
import Home from '../pages/Home';
import QRCode from '../pages/QRCode';
import HistorySelfie from '../pages/HistorySelfie';
import Personalities from '../pages/Personalities';
import TakeHome from '../pages/TakeHome';
import About from '../pages/About';

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
  },
  {
    path: '/takehome',
    element: <TakeHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);
