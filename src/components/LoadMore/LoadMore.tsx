import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Button } from 'antd';

import { loadMoreProducts } from '../../store/products/actions';

import './LoadMore.scss';

function LoadMore() {
    const dispatch = useDispatch();
    const lastVisible = useSelector((state: any) => state.catalog.lastVisible, shallowEqual);
    const loading = useSelector((state: any) => state.catalog.loadingLoadMore, shallowEqual);

    const onLoadMoreProducts = () => dispatch(loadMoreProducts(lastVisible));

    return (
        <Button type="dashed" block onClick={onLoadMoreProducts} loading={loading}>
            load more content
        </Button>
    );
}

export default LoadMore;
