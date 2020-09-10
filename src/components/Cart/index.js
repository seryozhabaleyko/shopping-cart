import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge, Tooltip } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';

import { getNumberOfProducts, getTheTotalCostOfTheBasket } from '../../selectors';

import styled from './cart.module.scss';

function Cart() {
    const numberProductsInCart = useSelector(getNumberOfProducts, shallowEqual);
    const totalCartValue = useSelector(getTheTotalCostOfTheBasket, shallowEqual);

    return (
        <Tooltip title={`$${totalCartValue}`} placement="bottom">
            <Link to="/cart" className={styled.cart}>
                <Badge count={numberProductsInCart}>
                    <ShoppingOutlined style={{ fontSize: '24px', color: '#555' }} />
                </Badge>
            </Link>
        </Tooltip>
    );
}

export default Cart;
