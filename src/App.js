//import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import * as React from 'react';
//import Button from '@mui/material/Button';


import Navbar from './components/Navbar';
import Portfolio from './components/portfolio';
import About from './components/About';
import Bottombar from './components/Bottombar';
import background from './static/images/background.jpg';

//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { Attachment } from '@mui/icons-material';
import CodingProfile from './components/CodingProfile';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div style={{border:'0.0001px solid black' , minHeight:'100vh' , paddingBottom:'20px', backgroundImage: `url(${background})`,backgroundAttachment:'fixed' , backgroundSize:'100%' }}>
    
    
      <Routes>
        <Route path="/" element={<Portfolio/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/CodingProfile" element={<CodingProfile />}/>
      </Routes>
    
      
    </div>
    <Bottombar/>
    </BrowserRouter>
  );
}

export default App;
