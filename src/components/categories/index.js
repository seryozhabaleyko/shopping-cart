import React from 'react';
import { NavLink } from 'react-router-dom';

import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { getCategories } from '../../selectors';

import styled from './categories.module.scss';

function Categories() {
	const categories = useShallowEqualSelector((state) => getCategories(state));

	return (
		<section className={styled.categories}>
			<h4>Brand</h4>
			<nav>
				<NavLink to="/" exact>
					All
				</NavLink>
				{categories.map((category, index) => (
					<NavLink to={`/category/${category.id}`} key={index}>
						{category.name}
					</NavLink>
				))}
			</nav>
		</section>
	);
}

export default Categories;
