
import React, { useState, useEffect } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');

  const [alert,setalert] = useState(null);
  const showalert = (message,type) =>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  } 

  let togglemode =() =>{
    if(mode === 'dark'){
      setMode('light');
      showalert("Light Mode enable","success");
      
    }else{
      setMode('dark');      
      showalert("Dark Mode enable","success"  );
    }
  }

  useEffect(() => {
    document.body.className = mode;  // Apply class based on mode
  }, [mode]);
  
  
  
  
  
  return (
    <>
  <Navbar titlex = {"TextUtiles"} abouttext = "About"  dropdown = "List" mode = {mode} togglemode={togglemode}  />
  <Alert alert = {alert}/>
  <div className="container my-3" >
    <TextForm heading="Enter Your Thought" mode ={mode} showalert ={showalert}> </TextForm>
  </div>

  {/* <About/> */}


  
 
 
 
  </>
  );
}

export default App;
