import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../img/logo_header.jpeg'


const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex" >
        <div className="container ">
            <Link to={"/"} className="navbar-brand text-light font-weight-bold"><img className="logo-header" src={logo} /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegacion" aria-controls="navegacion" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navegacion">
                <ul className="navbar-nav ml-auto text-right">
                    <li className="nav-item active">
                        <Link to={"/create"} className="link">ABOUT</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to={"/create"} className="link">HELP</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to={"/create"} className="link">CONTACT</Link>
                    </li>
                </ul>
            </div>
            
        </div>
    </nav>
);

export default Header;