import React, { useState } from 'react';

import useActions from '../../hooks/useActions';
import searchPhone from '../../actions/search';

const Search = () => {
    const [search, setSearch] = useState('');
    const [searchPhoneActionDispatch] = useActions([searchPhone])

    const handleSubmit = (e) => {
        e.preventDefault();
        searchPhoneActionDispatch(search);
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <section className='search'>
            <h3>Quick shop</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' />
                <button type='submit'>search</button>
            </form>
        </section>
    );
};

export default Search;