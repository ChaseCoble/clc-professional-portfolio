import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/main.scss';
import Root from './routes/root';
import Blog from './routes/blog';
import AuthenticationHOC from './routes/authenticationHOC';
import About from './routes/about';
import Error from './routes/error';
import MobilePortfolioDetail from './routes/MobilePortfolioDetail'
import ReactModal from 'react-modal';
import MobileBlogDetail from './routes/MobileBlogDetail';
import MobileContact from './routes/mobileContact';
import MobileAbout from './routes/mobileAbout';


ReactModal.setAppElement('#root');

function IsMobile() {
  var height = window.innerHeight;
  var width = window.innerWidth;
  if (height <= 800) {
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
    path: "/blog",
    element: <Blog/>
  },
  {
    path: "/m/contact",
    element: <MobileContact/>
  },
  {
    path: "/auth/:fork",
    element: <AuthenticationHOC/>
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
    path: "/m/blog/:id",
    element: <MobileBlogDetail/>
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