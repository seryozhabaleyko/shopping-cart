import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Tooltip } from 'antd';
import { ShoppingCartOutlined, ShoppingFilled, ShoppingOutlined } from '@ant-design/icons';

import { getNumberOfProducts, getTheTotalCostOfTheBasket } from '../../selectors';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';

import styled from './cart.module.scss';

function Cart() {
    const numberProductsInCart = useShallowEqualSelector(getNumberOfProducts);
    const totalCartValue = useShallowEqualSelector(getTheTotalCostOfTheBasket);

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
