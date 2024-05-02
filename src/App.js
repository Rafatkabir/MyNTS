// imports
import React from 'react';
import{
  createBrowserRouter,
  Routes,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider
}
from 'react-router-dom'
// css
import './App.css';
// components
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Laptop from './Components/Laptop/Laptop';
import Software from './Components/Software/Software';
import InternetSecurity from './Components/InternetSecurity/InternetSecurity';
import HardwareSecurity from './Components/HardwareSecurity/HardwareSecurity';
import Solution from './Components/Solution/Solution';
import Accessories from './Components/Accessories/Accessories';
import Request from './Components/Request/Request';
import Home from './Components/Home/Home';
import Loading from './Components/Loading/Loading';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<NavBar/>}>
      <Route index element={<Home/>} /> 
      <Route path='laptop' element={<Laptop/>} /> 
      <Route path='software' element={<Software/>} /> 
      <Route path='internet-security' element={<InternetSecurity/>} /> 
      <Route path='hardware-security' element={<HardwareSecurity/>} /> 
      <Route path='service-&-solution' element={<Solution/>} /> 
      <Route path='accessories' element={<Accessories/>} /> 
      <Route path='about' element={<About/>} /> 
      <Route path='contact' element={<Contact/>} /> 
      <Route path='request' element={<Request/>} /> 
    </Route>
  )
)


function App() {
  
  return (
    <RouterProvider router={router} />
    // <Laptop />
  );
}

export default App;
