import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addToCart } from '../../actions/cart';

import styled from './product.module.scss';

function Product({ addToCart, id, name, image, price }) {
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
                    <button
                        type="button"
                        className={styled.btnAddToCart}
                        onClick={() => addToCart(id)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className={styled.detail}>
                <h3 className={styled.title}>{name}</h3>
                <div className={styled.price}>{`$ ${price.toLocaleString()}`}</div>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    addToCart,
};

export default connect(null, mapDispatchToProps)(Product);
