import {  Route, Routes } from 'react-router-dom'
import './App.css'
import MyLayout from './Layouts/MyLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Home from './Pages/Home';

function App() {
 
  const[theme,setTheme] = useState(
    localStorage.getItem('webTheme') || 'light'
  );

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme" , theme)
    localStorage.setItem("webTheme" , theme)
  },[theme])
console.log(theme);

  const toggleTheme = () =>{
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
    <Routes>
      <Route path='/' element={<MyLayout toggleTheme={toggleTheme} theme={theme}/>}>
      <Route path='/' element={<Home />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
