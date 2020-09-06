import React from 'react';

import CartItem from '../CartItem';

import './CartList.scss';

function CartList({ products = [] }) {
    return (
        <div className="cart-list">
            {products.map((product) => (
                <CartItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default CartList;
