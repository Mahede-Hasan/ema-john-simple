import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { product, handleRemoveClick } = props;
    const { img, name, price, shipping, quantity } = product;
    return (
        <div className='cart-review-container'>
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="review-detail-container">
                <div className="detail-container">
                    <h2 title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h2>
                    <p>Price: <span>${price}</span></p>
                    <p>Shipping: <span>${shipping}</span></p>
                    <p>Quantity: <span>{quantity}</span></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveClick(product)} className='delete-btn'><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;