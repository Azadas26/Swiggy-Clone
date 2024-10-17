import React from 'react'
import './Topcard.css'
import { Top_Resto_Link } from '../../utils/consts'

function Topcard({ restinfo }) {
    return (
        <div className='mind-container'>
            <div className="top-image" style={{ backgroundImage: `url(${Top_Resto_Link+restinfo.cloudinaryImageId})` }}>
                <button className="secial-offer">
                    Free Delivery
                </button>
                <div className="card-faid">
                    <button className="offer-rate">30% OFF UPTO ₹75</button>
                </div>
            </div>
            <div className='card-content'>
                <h3 className='top-hd'>{restinfo.name}</h3>
                <span className="fa fa-star checked" id='rating-star'></span>
                <span id='num-rating'>{restinfo.avgRating} <span id='rating-time'>&#128900; ffffff</span></span>
                <div className='res-description' style={{overflow:"hidden"}}>
                    <p id='items'>{restinfo.cuisines.join(", ")}</p>
                    <p id='place'>{restinfo.areaName}</p>
                </div>
            </div>
        </div>
    )
}

export default Topcard