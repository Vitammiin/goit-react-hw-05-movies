import { Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import css from './Home/Home.module.css';
import { apiMove } from './api';

export const App = () => {
  apiMove = async () => {
    try {
      const films = await apiMove();
      console.log(films);
    } catch (error) {}
  };
  return (
    <div>
      <header>
        <nav>
          <NavLink
            className={({ isActive }) =>
              `${css.headername} ${isActive ? css.active : ''}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${css.headername} ${isActive ? css.active : ''}`
            }
            to="/movies"
          >
            Movies
          </NavLink>
          ////MovieDetails
          {/* <NavLink to="/movies/:movieId">MovieDetails</NavLink>
          <NavLink to="/movies/:movieId/cast">Cast</NavLink>
          <NavLink to="/movies/:movieId/review">Reviews</NavLink> */}
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
    </div>
  );
};
