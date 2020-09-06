import React from 'react';
import { NavLink } from 'react-router-dom';

import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { getCategories } from '../../selectors';

import styled from './categories.module.scss';

function Categories() {
    const categories = useShallowEqualSelector(getCategories);

    return (
        <section className={styled.categories}>
            <h4>Brand</h4>
            <nav>
                <NavLink to="/" exact>
                    All
                </NavLink>
                {categories.map(({ id, name }) => (
                    <NavLink to={`/category/${id}`} key={id}>
                        {name}
                    </NavLink>
                ))}
            </nav>
        </section>
    );
}

export default Categories;
