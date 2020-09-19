import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Typography, Button } from 'antd';

import Layout from '../../components/Layout';
import CartList from './components/CartList';
import { clearCart } from '../../store/cart/actions';
import { getCart, getNumberCartItems, getTotalPrice } from '../../selectors';

import './Cart.scss';

const { Title, Paragraph } = Typography;

function CartPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const cart = useSelector(getCart, shallowEqual);
    const numberCartItems = useSelector(getNumberCartItems, shallowEqual);
    const totalPrice = useSelector(getTotalPrice, shallowEqual);

    const onClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <Layout breakpoint="xl">
            <div className="cart">
                <header className="cart__heading">
                    <Title level={2} className="cart__title">
                        Корзина
                    </Title>
                    {!!numberCartItems && (
                        <Button danger type="dashed" onClick={onClearCart}>
                            Очистить корзину
                        </Button>
                    )}
                </header>

                {!numberCartItems ? (
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
                        <p style={{ margin: 0 }} className="review-item-table-count">
                            <span className="review-item-table-count-msg">Всего позиций:</span>
                            <span className="review-item-table-count-amount"> {numberCartItems}</span>
                        </p>

                        <CartList products={cart} />

                        <div className="cart__footer" style={{ marginTop: '2rem' }}>
                            <div className="cart__total-price">
                                <div>Итого к оплате:</div>
                                <div>{`$${totalPrice.toLocaleString()}`}</div>
                            </div>
                            <Button type="primary" size="large" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
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
