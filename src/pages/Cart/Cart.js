import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import * as R from 'ramda';
import { Typography, Button } from 'antd';

import Layout from '../../components/Layout';
import CartList from './components/CartList';
import { getCart, getNumberCartItems, getTotalPrice } from '../../selectors';

import './Cart.scss';

const { Title, Paragraph } = Typography;

function CartPage() {
    const history = useHistory();
    const cart = useSelector(getCart, shallowEqual);
    const numberCartItems = useSelector(getNumberCartItems, shallowEqual);
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
                        <Paragraph className="cart__warning">
                            Корзина пуста. Перейдите в интернет-магазин, чтобы начать покупки.
                        </Paragraph>
                        <Button size="large" danger onClick={() => history.push('/catalog')}>
                            Перейти в интернет-магазин
                        </Button>
                    </>
                ) : (
                    <>
                        <p className="review-item-table-count">
                            <span className="review-item-table-count-msg">Всего позиций:</span>
                            <span className="review-item-table-count-amount"> {numberCartItems}</span>
                        </p>

                        <CartList products={cart} />

                        <div style={{ marginTop: '2rem' }}>
                            <div className="cart__total-price">
                                <div>Итого к оплате:</div>
                                <div>{`$${totalPrice.toLocaleString()}`}</div>
                            </div>
                            <Button
                                type="primary"
                                size="large"
                                style={{ marginTop: '1rem', paddingLeft: '3rem', paddingRight: '3rem' }}
                            >
                                Купить
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </Layout>
    );
}

export default CartPage;
