import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Button } from 'antd';

import { loadMoreProducts } from '../../actions/catalog';

import './LoadMore.scss';

function LoadMore() {
    const dispatch = useDispatch();
    const lastVisible = useSelector((state) => state.catalog.lastVisible, shallowEqual);
    const loading = useSelector((state) => state.catalog.loadingLoadMore, shallowEqual);

    const onLoadMoreProducts = () => dispatch(loadMoreProducts(lastVisible));

    return (
        <Button type="dashed" block onClick={onLoadMoreProducts} loading={loading}>
            load more content
        </Button>
    );
}

export default LoadMore;
