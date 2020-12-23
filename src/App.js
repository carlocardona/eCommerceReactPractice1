import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick="openMenu()">
                    &#9776;
                </button>
                <a href="index.html">SpeakEasyLA</a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="sigin.html">Sign In</a>
            </div>
        </header>

        <aside className="sidebar">
            <h3>Categories</h3>
            <button className="sidebar-close-button" onclick="closeMenu()">x</button>
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
                <ul className="products">
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/Screenshot_2020-12-23 Speakeasy 👄 ( thespeakeasyla) • Instagram photos and videos(1).jpg" alt="couchone"/>
                            <div className="product-name">
                               <a href="product.html">Dark Tan Couch</a>
                            </div>
                            <div className="product-brand">Mercadillo</div>
                            <div className="product-price">$2500</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/Screenshot_2020-12-23 Speakeasy 👄 ( thespeakeasyla) • Instagram photos and videos(2).jpg" alt="couchone"/>
                            <div className="product-name">
                               <a href="product.html">Single Tan</a>
                            </div>
                            <div className="product-brand">Mercadillo</div>
                            <div className="product-price">$999</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/Screenshot_2020-12-23 Speakeasy 👄 ( thespeakeasyla) • Instagram photos and videos.jpg" alt="couchone"/>
                            <div className="product-name">
                               <a href="product.html">Maroon Couch</a>
                            </div>
                            <div className="product-brand">Mercadillo</div>
                            <div className="product-price">$1999</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
        <footer className="footer">All rights reserved.</footer>
        </div>
  );
}

export default App;
