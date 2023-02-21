//1. Import Area
import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Layout from './Pages/Component/UI/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import {Register} from './Pages/Register';
import Not from './Pages/Not';
//2. Definition Area
//Every Function should Have Return Something 
export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='Login' element={<Login />}></Route>
            <Route path='Register' element={<Register />}></Route>
            <Route path='*' element={<Not />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}


//3. Export Area
//3.1 Default Export Area 
//3.2 Named Export Area