import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState('success')

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });

    setTimeout( ()=>{
      setAlert(null);
    }, 2000);

  }

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#003333'
      showAlert("Dark mode had been enabled", "success")
      document.title = 'Text Analyzer - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode had been enabled", "success")
      document.title = 'Text Analyzer - Light Mode'
    }

  }

  return (
    <>
      <BrowserRouter>
        <NavBar mode={mode} title="Text Analyzer" aboutText="About Us" toggleMode={toggleMode}></NavBar>
        <div className="container">
          <Alert alert={alert}/>
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your Text" mode={mode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;