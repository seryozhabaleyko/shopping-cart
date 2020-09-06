import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

import searchPhone from '../../actions/search';

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: 'rgba(0, 0, 0, 0.45)',
        }}
    />
);

function SearchTopBar() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchPhone(search));
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <Search
            placeholder="Введите запрос"
            style={{ width: 400 }}
            suffix={suffix}
            onSearch={(value) => console.log(value)}
        />
    );
}

export default SearchTopBar;
