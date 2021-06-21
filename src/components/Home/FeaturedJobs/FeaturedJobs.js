import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../Home/Home';
import JobView from '../JobView/JobView';
import ReactPaginate from "react-paginate";
import './FeaturedJobs.css'

const FeaturedJobs = ({ search }) => {
    const [jobs, setJobs] = useState([]);
    const [searchedJobs, setSearchedJobs] = useContext(SearchContext);
    const [otherJob, setOtherJobs] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const jobsPerPage = 20;
    const pagesVisited = pageNumber * jobsPerPage;

    useEffect(() => {
        fetch('http://localhost:5000/jobs',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => res.json())
            .then(data => {

                setJobs(data.reverse());
            })
    }, []);

    useEffect(() => {
        searchedJobs[0]?.category && fetch(`http://localhost:5000/otherJobs/${searchedJobs[0].category}`)
            .then(res => res.json())
            .then(data => {
                let allJob = searchedJobs.concat(data);
                setOtherJobs(allJob);
                
            })

    }, [searchedJobs, otherJob])
    let i = 0;
    const pageCount = Math.ceil(jobs.length / jobsPerPage);
    
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <>
            <div className="container">
                {
                    search === true &&
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
                {
                    (search === false) &&
                    <div className="row row-cols-1 row-cols-sm-2 mt-5 ">
                        {
                            otherJob?.slice(pagesVisited, pagesVisited + jobsPerPage)
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
            {/* <div className="container">
                {
                    search === true &&
                    <div className="row row-cols-1 row-cols-sm-2 mt-5 ">
                        {
                            jobs?.map(job => <JobView key={i++} job={job}></JobView>)
                        }
                    </div>
                }
                {
                    (search === false) &&
                    <div className="row row-cols-1 row-cols-sm-2 mt-5 ">
                        {
                            searchedJobs?.map(job => <JobView key={i++} job={job}></JobView>)
                        }
                        {
                            otherJob?.map(job => <JobView key={i++} job={job}></JobView>)
                        }
                    </div>
                }
            </div> */}
        </>
    );
};

export default FeaturedJobs;