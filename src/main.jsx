import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import NewApp from './Components/NewApp.jsx';
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Mobiles from './Components/Mobiles.jsx';
import Laptop from './Laptop.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users/Users2.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const router = createBrowserRouter([
 {
  path : '/',
  Component : Root ,

  children : [
   {index : true , Component : Home},
   
   { path : 'mobiles' , element : <Mobiles></Mobiles>} ,
   {path : 'NewApp' , element: <NewApp></NewApp>} ,
   { path : 'lap' , element : <Laptop></Laptop>} ,
   {path : 'users' ,
    loader : ()=> fetch('https://jsonplaceholder.typicode.com/users') ,
     element : <Users></Users>
    } ,
    {
      path : 'users2' ,
      element : <Suspense fallback ={<span>loading.....</span>}>
        <Users2 userPromise ={userPromise}></Users2>
      </Suspense>
    }


    ]
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
