import React from 'react';

import CartItem from '../CartItem';
import { Product } from '../../../../store/product/types';

import './CartList.scss';

interface CartListProps {
    products: Product[];
}

function CartList({ products = [] }: CartListProps) {
    return (
        <div className="cart-list">
            {products.map((product) => (
                <CartItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default CartList;
