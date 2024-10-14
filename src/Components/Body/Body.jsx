import React, { useContext, useEffect, useState } from 'react'
import './Body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch, faSort } from '@fortawesome/free-solid-svg-icons';
import { HomeContext } from '../../constants/HomeContext'
import Cards from '../Cards/Cards';

function Body() {
    const { restorents } = useContext(HomeContext)
    const [restlist, setReslist] = useState(restorents)
    const [search, setSearch] = useState('')
    const searchResult = () => {
        if (search === '') {
            setReslist(restorents)
        } else {

            const filteredResults = restorents.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase()) // Fixed 'include' to 'includes'
            );
            setReslist(filteredResults);
        }
    }
    useEffect(() => {
        setReslist(restorents)
    }, [restorents])


    return (
        <div className='body-container'>
            <div className="search-container">
                <input className='search-input' type="text" placeholder='Search you Food........' onInput={e => {
                    setSearch(e.target.value)
                    console.log("eee",e.target.value);
                    searchResult()
                }} value={search} />
                <button className='search-btn' onClick={searchResult}><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <div className="headline">
                <h3 id='welcome'>Restaurants with online food delivery in Kochi</h3>
            </div>
            <div className='body-btns'>
                <button className="btn">Filter <FontAwesomeIcon icon={faFilter} style={{ margin: "0px 3px" }} /></button>
                <button className="btn">Sort By <FontAwesomeIcon icon={faSort} style={{ margin: "0px 3px" }} /></button>
                <button className="btn">Fast Delivery</button>
                <button className="btn">New on Swiggy</button>
                <button className="btn">Rating 4.0+</button>
                <button className="btn">Pure Veg</button>
                <button className="btn">Offers</button>
                <button className="btn">Rs.300-Rs.600</button>
                <button className="btn">Less Than Rs.300</button>
            </div>
            <div className="foodcards">
                {
                    true && restlist.map((res) => {
                        return (
                            <Cards key={res.info.id} resData={res} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body