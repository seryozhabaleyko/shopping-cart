import React from 'react';
import ContentLoader from 'react-content-loader';

import './ProductCard.scss';

const ProductCardSkeleton = (props: any) => (
    <div className="product-card__skeleton">
        <ContentLoader viewBox="0 0 226 410" width={226} height={410} speed={2} {...props}>
            <rect x="0" y="0" rx="0" ry="0" width="226" height="270" />
            <rect x="0" y="280" rx="2" ry="2" width="226" height="20" />
            <rect x="50" y="310" rx="2" ry="2" width="126" height="20" />
            <rect x="40" y="340" rx="2" ry="2" width="146" height="20" />
            <rect x="0" y="370" rx="2" ry="2" width="110" height="40" />
            <rect x="113" y="370" rx="2" ry="2" width="110" height="40" />
        </ContentLoader>
    </div>
);

export default ProductCardSkeleton;
