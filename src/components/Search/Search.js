import React from 'react';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

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
