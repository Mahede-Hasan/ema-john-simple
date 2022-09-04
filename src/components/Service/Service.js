import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Service.css'
const Service = () => {
    const [products, setProducts] = useProduct()
    const [cart, setCart] = useCart(products)

    const handleRemoveClick = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest)
        removeFromDb(product.id);
    }
    return (
        <div>
            <div className="shop-container">
                <div className="order-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
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
                        <Link to="/inventory">
                            <button className='process-btn'>Proceed Checkout</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Service;