import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const { product, addToProduct } = props;
    const { img, name, price, ratings, seller } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <h5>Price: ${price}</h5>
                <p><small>Menufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>


            </div>
            <button onClick={() => addToProduct(product)} className='cart-btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;