import React from 'react';
import{Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Profile from './pages/profile'
import ContactMe from './pages/contactMe'
import Projects from './pages/projects';
import Header from './components/nav'
import Footer from './components/footer'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="about" element={<Profile/>} />
    <Route path="contactMe" element={<ContactMe/>} />
    <Route path="project" element={<Projects/>} />
    </Routes>
    <Footer/>
</BrowserRouter>
  )

}
