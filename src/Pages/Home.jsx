import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header/Header';
import Body from '../Components/Body/Body';
import Footer from '../Components/Footer/Footer';
import { HomeContext } from '../constants/HomeContext';
import { Outlet } from 'react-router-dom';

function Home() {
    const { setRestorents } = useContext(HomeContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9643859&lng=76.2873711&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const data = await response.json();
                setRestorents({ ...data });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [setRestorents]);

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default Home;
