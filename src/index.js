import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/main.scss';
import Root from './routes/root';

import About from './routes/about';
import Error from './routes/error';
import MobilePortfolioDetail from './routes/MobilePortfolioDetail'
import ReactModal from 'react-modal';
import MobileAbout from './routes/mobileAbout';


ReactModal.setAppElement('#root');

function IsMobile() {
  var height = window.innerHeight;
  var width = window.innerWidth;
  if (height <= 900) {
      if (width <= 600) {
          return true;
      } else {
          return false;
      }
  } else {
      return false;
  }
}

const mobContext = createContext(IsMobile());
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/m/portfolio/:id",
    element: <MobilePortfolioDetail/>
  },
  {
    path: "/m/about",
    element: <MobileAbout/>
  },
  {
    path: "*",
    element: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <mobContext.Provider value = {IsMobile()}><RouterProvider router = {router} /></mobContext.Provider>
  </React.StrictMode>
);

export {mobContext};