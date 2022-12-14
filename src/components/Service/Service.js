import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Service.css'
const Service = () => {
    const [products, setProducts] = useProduct()
    const [cart, setCart] = useCart(products)
    const navigate = useNavigate()
    const handleRemoveClick = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest)
        removeFromDb(product._id);
    }

    const HandleShipment = () => {
        navigate('/shipment')
    }
    return (
        <div>
            <div className="shop-container">
                <div className="order-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product._id}
                            product={product}
                            handleRemoveClick={handleRemoveClick}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>

                        <Link to="/shop">
                            <button className='clear-btn2'>Clear Chart</button>
                            <br />
                        </Link>
                        <Link to="/shipment">
                            <button onClick={HandleShipment} className='process-btn'>Proceed Checkout</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Service;