import React from 'react';
import classNames from 'classnames';

import styled from './footer.module.scss';

function Footer() {
    const classes = classNames('container', styled.topWrap);

    return (
        <footer className={styled.footer}>
            <section className={styled.top}>
                <div className={classes}>
                    <div>1</div>
                    <div className="social">
                        <div className="heading">Ищите нас в соц. сетях</div>
                        <div className="list">12345</div>
                    </div>
                </div>
            </section>
            <div className="container">footer</div>
        </footer>
    );
}

export default Footer;
