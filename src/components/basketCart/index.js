import React from 'react';
import { Link } from 'react-router-dom';

import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { getTotalBasketCount, getTotalBasketPrice } from '../../selectors';


const BaketCart = () => {
    const totalBasketCount = useShallowEqualSelector((state) => getTotalBasketCount(state));
    const totalPrice = useShallowEqualSelector((state) => getTotalBasketPrice(state));

    return (
        <div className='cart'>
            <Link
                to='/basket'
                className='btn btn-primary'
            >
                <span>{totalBasketCount} item(s) - ${totalPrice}</span>
            </Link>
        </div>
    );
};

export default BaketCart;