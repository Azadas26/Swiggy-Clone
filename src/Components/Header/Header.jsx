import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='container'>
            <div className="logo">
                <img src="https://miro.medium.com/v2/resize:fit:1000/1*TCc6vQVH-3EUiJea76pMbQ.png" alt="logo" />
            </div>
            <div className="links">
                <div className="link">
                    <h3>Home</h3>
                </div>
                <div className="link">
                    <h3>About</h3>
                </div>
                <div className="link">
                    <h3>Cart</h3>
                </div>
                <div className="link">
                    <h3>Profile</h3>
                </div>
            </div>
        </div>
    )
}

export default Header