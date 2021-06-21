import React, { createContext, useState } from 'react';
import Agents from '../Agents/Agents';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchJobs from '../SearchJobs/SearchJobs';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css'
export const SearchContext = createContext();
const Home = () => {
    const [searchedJobs, setSearchedJobs] = useState({});
    return (
        <div className="homeBackground bg-dark">
            <SearchContext.Provider value={[searchedJobs, setSearchedJobs]}>
                <Header />
                <SearchJobs />
                <FeaturedJobs />
                <Agents />
                <Testimonial />
                <Footer />
            </SearchContext.Provider>

        </div >
    );
};

export default Home;