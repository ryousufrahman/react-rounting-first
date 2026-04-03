import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import NewApp from './Components/NewApp.jsx';

const router = createBrowserRouter([
 {
  path : '/',
  element : <div>Hello router</div>
 } ,
 {
  path : 'about',
  element : <div>About section</div>
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
