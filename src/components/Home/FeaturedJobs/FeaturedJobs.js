import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../Home/Home';
import JobView from '../JobView/JobView';
import ReactPaginate from "react-paginate";
import './FeaturedJobs.css'

const FeaturedJobs = ({ search }) => {
    const [jobs, setJobs] = useState([]);
    const [searchedJobs, setSearchedJobs] = useContext(SearchContext);
    
    const [pageNumber, setPageNumber] = useState(0);
    const jobsPerPage = 20;
    const pagesVisited = pageNumber * jobsPerPage;

    useEffect(() => {
        fetch('https://fathomless-badlands-44105.herokuapp.com/jobs',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => res.json())
            .then(data => {

                setJobs(data);
            })
    }, []);

    useEffect(() => {
        searchedJobs[0]?.category && fetch(`https://fathomless-badlands-44105.herokuapp.com/otherJobs/${searchedJobs[0].category}`)
            .then(res => res.json())
            .then(data => {
                let allJob = searchedJobs.concat(data);
                setJobs(allJob);
                
            })

    }, [searchedJobs])
    let i = 0;
    const pageCount = Math.ceil(jobs.length / jobsPerPage);
    
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <>
            <div className="container">
                {
                    <div className="row mt-5 ">
                        {
                            jobs?.slice(pagesVisited, pagesVisited + jobsPerPage)
                                .map((job) => {
                                    return (
                                        <JobView job={job}></JobView>
                                    );
                                })
                        }
                    </div>
                }
                
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </>
    );
};

export default FeaturedJobs;