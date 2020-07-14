import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../actions/cart';

import styled from './product.module.scss';

function Product({ id, name, image, price }) {
    const dispatch = useDispatch();

    const handleAddToCartClick = () => dispatch(addToCart(id));

    return (
        <div className={styled.product}>
            <div className={styled.image}>
                <Link to={`/product/${id}`}>
                    <img src={image} alt={name} />
                </Link>
                <div className={styled.actions}>
                    <Link to={`/product/${id}`} className={styled.btnLinkView}>
                        Quick View
                    </Link>
                    <button type="button" className={styled.btnAddToCart} onClick={handleAddToCartClick}>
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className={styled.detail}>
                <h3 className={styled.title}>{name}</h3>
                <div className={styled.price}>{`$ ${price.toLocaleString()}`}</div>
            </div>
            <button
                type="button"
                className={classNames('btn', 'btn-danger', styled.addToCart)}
                onClick={handleAddToCartClick}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default Product;
