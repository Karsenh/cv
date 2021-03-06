import React, { useState } from 'react';
import './App.scss';
import { Switch, HashRouter as Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import PortfolioPage from './Pages/PortfolioPage';

const App = () => {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className='App'>
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>
      <div className='nav-btn' onClick={navClick}>
        <div className='lines-1'></div>
        <div className='lines-2'></div>
        <div className='lines-3'></div>
      </div>
      <div className='main-content'>
        <div className='content'>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/about' exact>
              <AboutPage />
            </Route>
            <Route path='/portfolio' exact>
              <PortfolioPage />
            </Route>
            <Route path='/blog' exact>
              <BlogPage />
            </Route>
            <Route path='/contact' exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
