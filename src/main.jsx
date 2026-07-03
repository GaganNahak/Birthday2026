import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'motion-icons-react/style.css'; 
import { createBrowserRouter, Route, RouterProvider,createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import SecondPage from './components/SecondPage.jsx'


const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/sndpage' element={<SecondPage/>}/>
    
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
