import React from 'react';
import { Link } from 'react-router-dom';

import { getNumberOfProducts, getTheTotalCostOfTheBasket } from '../../selectors';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';

import { ReactComponent as CartI } from './groceries.svg';
import { ReactComponent as CartColorI } from './groceriesColor.svg';

import styled from './cart.module.scss';

function Cart() {
    const numberProductsInCart = useShallowEqualSelector(getNumberOfProducts);
    const totalCartValue = useShallowEqualSelector(getTheTotalCostOfTheBasket);

    return (
        <Link to="/cart" className={styled.cart} title={`$${totalCartValue.toLocaleString()}`}>
            <div className={styled.icon}>
                {numberProductsInCart ? (
                    <CartColorI width={24} height={24} />
                ) : (
                    <CartI width={24} height={24} />
                )}
                <span className={styled.number}>{numberProductsInCart.toLocaleString()}</span>
            </div>
        </Link>
    );
}

export default Cart;
