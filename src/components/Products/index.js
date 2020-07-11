import React from 'react';
import { Select, IconButton } from 'evergreen-ui';

import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import Product from '../Product';
import { getCatalog } from '../../selectors';
import Alert from '../Alert';
import Spinner from '../Spinner';

import styled from './products.module.scss';

function Products() {
    const { isLoading, items: products, errorMessage } = useShallowEqualSelector(getCatalog);

    if (isLoading || (products.length === 0 && !errorMessage)) {
        return <Spinner />;
    }

    if (errorMessage) {
        return <Alert title={errorMessage} />;
    }

    console.log('Products', products[0]);

    return (
        <div className={styled.products}>
            <div className={styled.heading}>
                <div style={{ display: 'flex' }}>
                    <IconButton icon="cross" height={40} marginRight={12} />
                    <IconButton icon="notifications" height={40} />
                </div>
                <div>
                    <Select
                        width={240}
                        height={40}
                        defaultValue="default"
                        onChange={(event) => alert(event.target.value)}
                    >
                        <option value="default" disabled>
                            Выберите героя
                        </option>
                        <option value="Чебурашка">Чебурашка</option>
                        <option value="Крокодил Гена">Крокодил Гена</option>
                        <option value="Шапокляк">Шапокляк</option>
                        <option value="Крыса Лариса">Крыса Лариса</option>
                    </Select>
                </div>
            </div>
            <div className={styled.grid}>
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}

export default Products;
