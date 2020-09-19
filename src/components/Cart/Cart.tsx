import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge, Tooltip } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';

import { getNumberCartItems, getTotalPrice } from '../../selectors';

import styled from './Cart.module.scss';

function Cart() {
    const numberProductsInCart = useSelector(getNumberCartItems, shallowEqual);
    const totalCartValue = useSelector(getTotalPrice, shallowEqual);

    return (
        <Tooltip title={`$${totalCartValue.toLocaleString()}`} placement="bottom">
            <Link to="/cart" className={styled.cart}>
                <Badge count={numberProductsInCart}>
                    <ShoppingOutlined style={{ fontSize: '24px', color: '#555' }} />
                </Badge>
            </Link>
        </Tooltip>
    );
}

export default Cart;
