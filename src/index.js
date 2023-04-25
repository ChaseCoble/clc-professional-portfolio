import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/main.scss';
import Root from './routes/root';
import Blog from './routes/blog';
import ContentManager from './routes/contentManager';
import Auth from "./components/auth"
import About from './routes/about';
import Error from './routes/error';
import MobilePortfolioDetail from './routes/MobilePortfolioDetail'

function IsMobile() {
  var height = window.innerHeight;
  var width = window.innerWidth;
  if (height <= 800) {
      if (width <= 400) {
          return true;
      } else {
          return false;
      }
  } else {
      return false;
  }
}
const authContext = createContext(false);
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
    path: "/login",
    element: <authContext.Provider value={false}><Auth/></authContext.Provider>
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
    path: "*",
    element: <Error />
  },
  {
    path: "/management",
    element: <authContext.Provider value={false}><ContentManager/></authContext.Provider>
  }
]);

console.log(authContext, mobContext);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <mobContext.Provider value = {IsMobile()}><RouterProvider router = {router} /></mobContext.Provider>
  </React.StrictMode>
);

export {authContext, mobContext};