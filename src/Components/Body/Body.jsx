import React, { useContext, useEffect, useState, useRef } from 'react';
import './Body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch, faSort } from '@fortawesome/free-solid-svg-icons';
import { HomeContext } from '../../constants/HomeContext';
import Cards1 from '../Cards/Allcards';
import Mindcard from '../Cards/Mindcard';
import Shimmer from '../Cards/Shimmer';
import SimmerMindcard from '../Cards/ShimmerMindCard';
import Topcard from '../Cards/Topcard';

function Body() {
    const { restorents } = useContext(HomeContext);
    const [restlist, setReslist] = useState([]);
    const [mindfood, setMindfood] = useState([]);
    const [toresto, setTopresto] = useState([]);
    const [search, setSearch] = useState('');

    const mindCardRef = useRef(null);
    const TopresCardRef = useRef(null);
    
    const searchResult = () => {
        const filteredResults = restorents.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter((res) =>
            res.info.name.toLowerCase().includes(search.toLowerCase())
        );
        setReslist(filteredResults || []); // Ensure setReslist is called with an array
    };

    useEffect(() => {
        setCards();
    }, [restorents]);

    async function setCards() {
        const fetchedRestaurants = restorents.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const fetchmindfood = restorents.data?.cards[0]?.card.card.imageGridCards.info;
        const toprestorents = restorents.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setReslist(fetchedRestaurants || []);
        setMindfood(fetchmindfood || []);
        setTopresto(toprestorents || [])
    }

    const scrollLeft = () => {


        if (mindCardRef.current) {
            mindCardRef.current.scrollLeft -= 1050; // Adjust the value for scroll amount
        }
    };

    const scrollRight = () => {
        if (mindCardRef.current) {
            mindCardRef.current.scrollLeft += 1050; // Adjust the value for scroll amount
        }
    };
    const scrollLeft2 = () => {


        if (TopresCardRef.current) {
            TopresCardRef.current.scrollLeft -= 1050; // Adjust the value for scroll amount
        }
    };

    const scrollRight2 = () => {
        if (TopresCardRef.current) {
            TopresCardRef.current.scrollLeft += 1050; // Adjust the value for scroll amount
        }
    };

    return (
        <div className='body-container'>
            <div className="components-hdbtn">
                <h3 className='hd-mind'>Azad, what's on your mind?</h3>
                <div className='first-arrows'>
                    <button className='scroll-btn left-btn' onClick={scrollLeft}>{'<'}</button>
                    <button className='scroll-btn right-btn' onClick={scrollRight}>{'>'}</button>
                </div>
            </div>
            <div className='mind-container'>
                <div className="mind-card" ref={mindCardRef}>
                    {
                        mindfood && mindfood.length > 0 ? (
                            mindfood.map((mind) => {
                                return (
                                    <Mindcard key={mind.imageId} imgid={mind.imageId} />
                                );
                            })
                        ) : (
                            <div className="simmer-mind">
                                <SimmerMindcard />
                                <SimmerMindcard />
                                <SimmerMindcard />
                                <SimmerMindcard />
                                <SimmerMindcard />
                                {
                                    Array.from({ length: 5 }, (_, index) => {
                                        <SimmerMindcard key={index} />
                                    })
                                }
                            </div>
                        )
                    }
                </div>

            </div>

            <div className="main-top">
                <div className="top-hdbtn">
                    <h3 className='hd-mind'>Top restaurant chains in Kochi</h3>
                    <div className='first-arrows'>
                        <button className='scroll-btn left-btn' onClick={scrollLeft2}>{'<'}</button>
                        <button className='scroll-btn right-btn' onClick={scrollRight2}>{'>'}</button>
                    </div>
                </div>
                <div className="top-card-image" ref={TopresCardRef}>
                    {
                        toresto && toresto.length > 0 ? (
                            toresto.map((res) => {
                                return (
                                    <Topcard restinfo={res.info} key={res.info.id} />
                                )
                            })
                        ) : (
                            <div className="simmer-mind">
                            <SimmerMindcard />
                            <SimmerMindcard />
                            <SimmerMindcard />
                            <SimmerMindcard />
                            <SimmerMindcard />
                            </div>
                        )
                    }
                </div>
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
                {restlist && restlist.length > 0 ? (
                    restlist.map((res) => (
                        <Cards1 key={res.info.id} resData={res} />
                    ))
                ) : (
                    Array.from({ length: 12 }, (_, index) => (
                        <Shimmer key={index} />
                    ))
                )}
            </div>
        </div>
    );
}

export default Body;
