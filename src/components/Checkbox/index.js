import React from 'react';
import PropTypes from 'prop-types';

import styled from './checkbox.module.scss';

function Checkbox({ name, label, value, onChange }) {
    return (
        <label className={styled.checkbox}>
            <input
                className={styled.icon}
                type="checkbox"
                name={name}
                value={value}
                onChange={onChange}
            />
            <span className={styled.label}>{label}</span>
        </label>
    );
}

Checkbox.defaultProps = {
    checked: false,
    onChange: () => {},
};

Checkbox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.node,
    value: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Checkbox;
