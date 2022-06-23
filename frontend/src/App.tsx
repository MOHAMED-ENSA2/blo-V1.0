import React from 'react';
import {Routes , Route} from "react-router-dom"

import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Post from './pages/post/Post';
import Categorie from './pages/categories/Categorie';
import ScrollTop from './components/ScrollTop';
import NotFound from './components/NotFound/NotFound';

function App() {
  
  return (
    <div className="App">
      <ScrollTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/post' element = {<Post/>} />
        <Route path='/Categorie' element = {<Categorie/>} />
        <Route path='*' element = {<NotFound/>}  /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
