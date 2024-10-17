import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className='head-container'>
            <div className="logo">
                <Link to={'/'}>
                    <img id='logo-img' style={{ margin: "0" }} src="https://miro.medium.com/v2/resize:fit:1000/1*TCc6vQVH-3EUiJea76pMbQ.png" alt="logo" />
                </Link>
            </div>
            <div className="location">
                <h3 id="locatio-h3">Other</h3>
                <h3 id='place-h3'>X77P+PXC, Sahodaran Ayyappan Rd...</h3>
                <img id='downarrw-img' src="https://img.icons8.com/?size=100&id=39786&format=png&color=000000" alt="" />
                <div className="link">
                    <img id='swiggyco-img' src="https://img.icons8.com/?size=100&id=8247&format=png&color=000000" alt="" />
                    <h3>Swiggy Corporate</h3>
                </div>
            </div>
            <div className="links">

                <div className="link">
                    <img id='cart-img' src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000" alt="" />
                    <h3>Search</h3>
                </div>
                <div className="link">
                    <img id='cart-img' src="https://img.icons8.com/?size=100&id=12089&format=png&color=000000" alt="" />
                    <h3>Offers<sup id='offernew'>NEW</sup></h3>
                </div>
                <div className="link">
                    <img id='cart-img' src="https://img.icons8.com/?size=100&id=fsCVAdQOKuHR&format=png&color=000000" alt="" />
                    <h3><Link to={'/contact'} style={{ textDecoration: "none", color: "#454959" }}>Help</Link></h3>
                </div>
                <div className="link">

                    <img id='cart-img' src="https://img.icons8.com/?size=100&id=23264&format=png&color=000000" alt="" />
                    <h3><Link to={'/about'} style={{ textDecoration: "none", color: "#454959" }}>Azad A S</Link></h3>
                </div>
                <div className="link">
                    <img id='cart-img' src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" alt="" />
                    <h3>Cart</h3>
                </div>
            </div>
        </div>
    )
}

export default Header