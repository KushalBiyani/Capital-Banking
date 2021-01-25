import React , {useState} from 'react';
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import './style.css';


const Header = (props) => {
    const [navbar , setNavbar] = useState(false);
 const changeBackground = () =>{
     if(window.scrollY >= 5){
         setNavbar(true)
     }
     else{
         setNavbar(false)
     }
 };

window.addEventListener('scroll', changeBackground);

    return (
        <div id="header">
            <nav className={navbar ? "navbar navbar-expand-lg fixed-top scroll" : "navbar navbar-expand-lg fixed-top"}>
            <Link to="/" ><h1 className={navbar ? "brand scroll-a" : "brand"}>Capital Banking</h1> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><MDBIcon icon="bars" className={navbar ? "bars scroll-button" : "bars" } /></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item pad">
                            <Link className={navbar ? "nav-link scroll-a" : "nav-link"} to="/" >Home </Link>
                        </li>
                        <li className="nav-item pad">
                            <Link className={navbar ? "nav-link scroll-a" : "nav-link"} to="/customerDetails" >Customers </Link>
                        </li>
                        <li className="nav-item pad">
                            <Link className={navbar ? "nav-link scroll-a" : "nav-link"} to="/selectUser" >Transfer </Link>
                        </li>
                        <li className="nav-item pad">
                            <Link className={navbar ? "nav-link scroll-a" : "nav-link"} to="/history" >History </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header 