import { useReducer, useEffect} from "react";
import { initialState, jobReducer } from "./jobReducer";
import {JobContext} from "./JobContext"
import { REMOTE_API_URL } from "../utilities/constants";



export const JobProvider = ({children}) => {

    const [state, dispatch] = useReducer(jobReducer, initialState);

    const {jobs, favorites, filteredJobs} = state;

    const addToFavorites = (job) => {
        dispatch ({type: 'ADD_TO_FAVORITES', payload: job})
    };

    const removeFromFavorites = (id) => {
        dispatch ({type: 'REMOVE_FROM_FAVORITES', payload: id})
    };

    const setFilteredJobs = (filtered) => {
        dispatch ({ type: 'SET_FILTERED', payload: filtered})
    };

    const fetchJobs = async () => {
        let allJobs = [];

        try{
            const mockDataAResult = await fetch ('/jobs.json');
            const mockDataAJobs = await mockDataAResult.json();
            allJobs = [...allJobs, ...mockDataAJobs]
        } catch(error) {
            console.error('Failed to load mockdataA jobs:', error);
        };

        try{
            const mockDataBResult = await fetch ('/mockJobs.json');
            const mockDataBJobs = await mockDataBResult.json();
            allJobs = [...allJobs, ...mockDataBJobs]
        } catch(error) {
            console.error('Failed to load mockdataB jobs:', error);
        };

       
        dispatch({type: 'SET_JOBS', payload: allJobs});
    };



    useEffect(() => {
        fetchJobs();
    }, []);


    return (
        <JobContext.Provider value={{
            jobs,
            favorites,
            filteredJobs,
            addToFavorites,
            removeFromFavorites,
            setFilteredJobs,
        }}>
            {children}
        </JobContext.Provider>
    )
}