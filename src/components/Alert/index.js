import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Warning } from './warning.svg';
import styled from './alert.module.scss';

function Alert({ title = '' }) {
    return (
        <div role="alert" className={styled.alert}>
            <div className={styled.icon}>
                <Warning width={24} height={24} />
            </div>
            {title}
        </div>
    );
}

Alert.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Alert;
