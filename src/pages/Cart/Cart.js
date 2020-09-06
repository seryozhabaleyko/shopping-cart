import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import * as R from 'ramda';
import { Typography, Button } from 'antd';

import Layout from '../../components/Layout';
import CartList from './components/CartList';
import { getCart, getNumberItemsCart, getTotalPrice } from '../../selectors';

import './Cart.scss';

const { Title } = Typography;

function CartPage() {
    const cart = useSelector(getCart, shallowEqual);
    const numberItemsCart = useSelector(getNumberItemsCart, shallowEqual);
    const totalPrice = useSelector(getTotalPrice, shallowEqual);
    const isCartEmpty = R.isEmpty(cart);

    return (
        <Layout breakpoint="xl">
            <div className="cart">
                <header className="cart__heading">
                    <Title level={2} className="cart__title">
                        Корзина
                    </Title>
                </header>

                {isCartEmpty ? (
                    <>
                        <p className="cart__warning">
                            Корзина пуста. Перейдите в интернет-магазин, чтобы начать покупки.
                        </p>
                        <Link to="/" className="btn btn-danger cart__btn-cart-empty">
                            Перейти в интернет-магазин
                        </Link>
                    </>
                ) : (
                    <>
                        <p className="review-item-table-count">
                            <span className="review-item-table-count-msg">Всего позиций:</span>
                            <span className="review-item-table-count-amount"> {numberItemsCart}</span>
                        </p>

                        <CartList products={cart} />

                        <div>
                            <div>Итого к оплате:</div>
                            <div>{totalPrice}</div>
                            <Button>Купить</Button>
                        </div>
                    </>
                )}
            </div>
        </Layout>
    );
}

export default CartPage;
