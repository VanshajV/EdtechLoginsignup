import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { auth } from './firebase';


function App() {
  const[name,setName]=useState("")
  useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        console.log(user)
        if(user!==null){
         setName(user.displayName)
        }
        
      })
  })
  return (
    
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home name={name} /> } />
        <Route path="/Register" element={ <Register/> } />\
        <Route path="/Login" element={ <Login/> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
