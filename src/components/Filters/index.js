import React from 'react';
import { Collapse } from 'antd';

import Manufacturer from './Manufacturer';
import RangeMinMaxPrice from './RangeMinMaxPrice';
import Ram from './RAM';
import InternalStorage from './InternalStorage';

import styled from './filters.module.scss';

const { Panel } = Collapse;

function Filters() {
    return (
        <div className={styled.filters}>
            <Collapse defaultActiveKey={['1', '2', '3', '4']} expandIconPosition="right" ghost>
                <Panel header="Производитель" key="1">
                    <Manufacturer />
                </Panel>
                <Panel header="Цены" key="2">
                    <RangeMinMaxPrice />
                </Panel>
                <Panel header="Оперативная память" key="3">
                    <Ram />
                </Panel>
                <Panel header="Флэш-память" key="4">
                    <InternalStorage />
                </Panel>
            </Collapse>
        </div>
    );
}

export default Filters;
