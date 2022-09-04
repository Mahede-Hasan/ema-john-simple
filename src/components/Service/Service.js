import React from 'react';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Service.css'
const Service = () => {
    const [products, setProducts] = useProduct()
    const [cart, setCart] = useCart(products)

    const handleRemoveClick = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest)
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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Service;