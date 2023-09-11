import React from 'react';
import{Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import About from './pages/about'
import ContactMe from './pages/contactMe'
import Header from './components/header'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="contactMe" element={<ContactMe/>} />
      
    </Routes>
</BrowserRouter>
  )

}
