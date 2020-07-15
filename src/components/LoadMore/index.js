import React from 'react';
import { connect } from 'react-redux';

import { loadMorePhones } from '../../actions/catalog';

import styled from './loadMore.module.scss';

function LoadMore({ loadMorePhones }) {
    return (
        <div>
            <button onClick={() => loadMorePhones()}>Load More Phones</button>
        </div>
    );
}

const mapDispatchToProps = {
    loadMorePhones,
};

export default connect(null, mapDispatchToProps)(LoadMore);
