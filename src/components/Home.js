import React from 'react';
import data from '../data';
import {BrowserRouter, Route, Link} from 'react-router-dom';

function Home (props) {
    return(
    <ul className="products">
    {
      data.products.map(product => 
      <li>
        <div className="product">
            <Link to={'/product/' + product._id}>
                <img className="product-image" src={product.image} alt="couchone"/>
            </Link>
            <div className="product-name">
               <Link to={'/product/' + product._id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">{product.ratings} Stars {product.reviews}</div>
        </div>
      </li>)
    }
    </ul>
  )
}
export default Home;