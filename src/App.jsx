import React from 'react';
import './App.css';
import About from './pages/About';
import {BrowserRouter as Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {
  return (

    <>

        <Header></Header>
        <NavBar></NavBar>
        <Main></Main>
        <Footer></Footer>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>


    </>


  );
}



export default App;
