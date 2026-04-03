import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import NewApp from './Components/NewApp.jsx';
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Mobiles from './Components/Mobiles.jsx';

const router = createBrowserRouter([
 {
  path : '/',
  Component : Root ,

  children : [
   {index : true , Component : Home},
   { path : 'mobile' , element : <Mobiles></Mobiles>} ,
   {path : 'NewApp' , element: <NewApp></NewApp>}


    ]
 } ,
  
 {
  path : 'about',
  element : <div>About section</div>,
  
 } ,
 {
  path : 'app',
  Component: App
 } ,
 {
  path : 'app2',
  element : <NewApp></NewApp>
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
