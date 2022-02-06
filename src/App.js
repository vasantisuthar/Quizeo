import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/homePage/homePage.component';
import MoviePage from './pages/moviePage/moviePage.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="movie/:categoryId" element={<MoviePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
