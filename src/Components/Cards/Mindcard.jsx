import React from 'react';
import './Mindcard.css'
import { Mind_Image_Link } from '../../utils/consts';

function Mindcard({imgid}) {
    return (
        <div className='mind-container'>
            <div className="mind-imgs">
                <img className="mind-img" src={Mind_Image_Link+imgid} alt="" />
            </div>
        </div>
    )
}

export default Mindcard