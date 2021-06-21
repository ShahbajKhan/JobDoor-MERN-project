import React, { createContext, useState } from 'react';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Header from '../Header/Header';
import './Home.css'
export const SearchContext = createContext();
const Home = () => {
    const [searchedJobs, setSearchedJobs] = useState({});
    return (
        <div className="homeBackground">
            <SearchContext.Provider value={[searchedJobs, setSearchedJobs]}>
                <Header></Header>
                {
                    searchedJobs?.length? <FeaturedJobs search={false}></FeaturedJobs>: <FeaturedJobs search={true}></FeaturedJobs>
                }
               
            </SearchContext.Provider>

        </div >
    );
};

export default Home;