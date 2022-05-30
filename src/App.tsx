import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Routes, Route, NavLink,
} from 'react-router-dom';
import Logo from './images/logo.png';
import HomePage from './pages/HomePage/HomePage';
import TranslationsPage from './pages/TranslationsPage/TranslationsPage';

const App = () => (
  <div className="App">
    <Router>
      <header className="header">
        <div
          className="logo__left"
        >
          <img src={Logo} alt="Logo" width="150" />
        </div>
        <nav className="navigation">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'link link--active' : 'link')}
          >
            Home
          </NavLink>
          <NavLink
            to="/translations"
            className={({ isActive }) => (isActive ? 'link link--active' : 'link')}
          >
            Translations
          </NavLink>
        </nav>
        <div
          className="logo__right"
        >
          <img src={Logo} alt="Logo" width="150" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/translations" element={<TranslationsPage />} />
      </Routes>
    </Router>
  </div>
);

export default App;
