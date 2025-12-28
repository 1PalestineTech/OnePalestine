

import { Link } from 'react-router-dom';
import {WebLinks} from './WebLinks'
import './Footer.css'

export function Footer(){

    return(
    <footer className="p-50">
    <div className="mt-50 flex-column row-gap-20">
        <div className="flex-row jc-spaceb row-gap-30 flex-wrap">
            <div className="flex-column text-left  row-gap-20">
                <Link to='/'>
                    <img src='/static/Pages/images/white_logo.png' alt="1Palestine Logo" width="150px" />
                </Link>
                <div className="footer-links flex-row column-gap-30 row-gap-10 flex-wrap">
                    <WebLinks />
                </div>
            </div>
            <div className ="newsletter">
                <h3 className="font-20 mb-10">Join Newsletter</h3>
                <input className="newsletter p-5 font-18" type="email" placeholder="Your email" />
            </div>
        </div>
        <hr />
        <div>
            <p>© 2025 1Palestine</p>
        </div>
    </div>
</footer>
    )
}