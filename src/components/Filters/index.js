import React from 'react';
import { Collapse } from 'antd';

import Manufacturer from './Manufacturer';
import RangeMinMaxPrice from './RangeMinMaxPrice';
import RAM from './RAM';
import InternalStorage from './InternalStorage';

import styled from './filters.module.scss';

const { Panel } = Collapse;

function Filters() {
    return (
        <div className={styled.filters}>
            <Collapse defaultActiveKey={['1', '2']} expandIconPosition="right">
                <Panel header="Производитель" key="1">
                    <Manufacturer />
                </Panel>
                <Panel header="Цены" key="2">
                    <RangeMinMaxPrice />
                </Panel>
                <Panel header="Оперативная память" key="3">
                    12
                </Panel>
                <Panel header="Флэш-память" key="4">
                    12
                </Panel>
            </Collapse>

            <RAM />
            <InternalStorage />
        </div>
    );
}

export default Filters;
