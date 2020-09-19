import React from 'react';

import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <section className="footer__top"></section>

            <section className="footer__bottom">
                <div className="container">
                    <div className="copyright">
                        © 2020 Valhalla (
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/seryozhabaleyko">
                            author
                        </a>
                        )
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
