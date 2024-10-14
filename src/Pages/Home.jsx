import React, { useContext, useEffect } from 'react'
import Header from '../Components/Header/Header'
import Body from '../Components/Body/Body'
import Footer from '../Components/Footer/Footer'
import { HomeContext } from '../constants/HomeContext'

function Home() {
    const { setRestorents } = useContext(HomeContext)
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9692376&lng=76.29098669999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                    const data = await response.json();
                    setRestorents(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                    console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.resData);

                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };

            fetchData();
        }, []);

    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Home