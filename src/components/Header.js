/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//import classes from '../style.module.css';
function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">FoodLogo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav navbar-right">
                    <li className="nav-item">
                        <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Our Food</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Plans</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;