import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Movies from './Components/Movies';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App(){
  let apiKey= process.env.REACT_APP_Movie_API;

  const [progress,setProgress]=useState(0)

    return (
      <>
       <div className="bg-dark">
      <Router>     
      <Navbar apiKey={apiKey}/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>   
        <Route exact path="/" element={<Movies setProgress={setProgress} key="/"  apiKey={apiKey}  genres =""/>}/>
          <Route exact path="/all" element={<Movies setProgress={setProgress} key="all"  apiKey={apiKey}  genres =""/>}/>
          <Route exact path="/action" element={<Movies setProgress={setProgress} key="action" apiKey={apiKey}  genres ="28"/>}/>
          <Route exact path="/comedy" element={<Movies setProgress={setProgress} key="comedy" apiKey={apiKey} genres ="35"/>}/>
          <Route exact path="/horror" element={<Movies setProgress={setProgress} key="horror" apiKey={apiKey}  genres="27"/>}/>
          <Route exact path="/drama" element={<Movies setProgress={setProgress} key="drama" apiKey={apiKey}  genres ="18"/>}/>
          <Route exact path="/sci-fi" element={<Movies setProgress={setProgress} key="sci-fi" apiKey={apiKey} genres ="878"/>}/>  
        </Routes>
      </Router>
      
      </div>
      </>
    )
  }
