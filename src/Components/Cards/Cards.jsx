import React from 'react'
import { IMage_Link } from '../../utils/consts'

function Cards(props) {
    const {
        name,
        locality,
        cuisines,
        avgRating,
        cloudinaryImageId,
        sla,
        aggregatedDiscountInfoV3
    } = props?.resData.info
    
    return (
        <div className="body-card">
            <div className="bg-image" style={{ backgroundImage: `url(${IMage_Link + cloudinaryImageId})`, }}>
                <button className="secial-offer">
                    Free Delivery
                </button>
                <div className="card-faid">
                    <button className="offer-rate"> 30% OFF UPTO ₹75</button>
                </div>
            </div>
            <div className='card-content'>
                <h3>{name}</h3>
                <span className="fa fa-star checked" id='rating-star'></span>
                <span id='num-rating'>{avgRating} <span id='rating-time'>&#128900; {sla.slaString}</span></span>
                <div className='res-description'>
                    <p id='items'>{cuisines.join(', ')}</p>
                    <p id='place'>{locality}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards