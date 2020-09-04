import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Tooltip } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { getNumberOfProducts, getTheTotalCostOfTheBasket } from '../../selectors';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';

import styled from './cart.module.scss';

function Cart() {
    const numberProductsInCart = useShallowEqualSelector(getNumberOfProducts);
    const totalCartValue = useShallowEqualSelector(getTheTotalCostOfTheBasket);

    return (
        <Tooltip title={`$${totalCartValue}`}>
            <Link to="/cart" className={styled.cart}>
                <Badge count={numberProductsInCart} size="small" showZero>
                    <ShoppingCartOutlined style={{ fontSize: '24px', color: '#9e9e9e' }} />
                </Badge>
            </Link>
        </Tooltip>
    );
}

export default Cart;
