import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './google_auth';

class Header extends React.Component {
    
    render () {
        return (
            <nav className="header">
                <div className="nav-wrapper row">
                    <div className="col s12">
                        <Link to="/" className="brand-logo">Streamo</Link>
                        <ul className="right">
                            <li><Link to="/">All streams</Link></li>
                            <li><GoogleAuth /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
};

export default Header;