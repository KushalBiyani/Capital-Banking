import React from 'react';
import logo from '../../images/logo.png'
import './style.css';


/**
* @author
* @function Header
**/

const Header = (props) => {
    return (
        <div id="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img src={logo} height="60px" width="160px" alt="logo" />
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item pad">
                            <a className="nav-link home" href="/">Home</a>
                        </li>
                        <li className="nav-item pad">
                            <a className="nav-link cust" href="customerDetails">Customers Deatails</a>
                        </li>
                        <li className="nav-item pad">
                            <a className="nav-link transfer" href="selectuser">Transfer Money</a>
                        </li>
                        <li className="nav-item pad">
                            <a className="nav-link history" href="history">Transaction History</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}

export default Header 