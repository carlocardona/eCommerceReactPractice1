import React from 'react';
import data from './data';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">SpeakEasyLA</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="sigin.html">Sign In</a>
            </div>
        </header>

        <aside className="sidebar">
            <h3>Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                   <a href="index.html">One Seater</a>
                </li>
                <li>
                    <a href="index.html">Multiple Seater</a>
                 </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
              <Route path="/product/:id" component={Products}/>
              <Route path="/" exact={true} component={Home}/>
            </div>
        </main>
        <footer className="footer">All rights reserved.</footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
