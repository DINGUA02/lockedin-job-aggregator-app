import { useState, useEffect } from "react"

import { useJobContext } from "../hooks/useJobContext";


export const SearchBar = () => {
    
    const {jobs, setFilteredJobs} = useJobContext();
    const [keyWord, setKeyWord] = useState('');

    useEffect(() => {
        const term = keyWord.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().trim();

        const filtered = jobs.filter(job => (

            job.title.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().includes(term) ||
            job.company_name.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().includes(term) ||
            job.location.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().includes(term) ||
            job.job_type.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().includes(term) ||
            job.category.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().includes(term) ||
            job.salary.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().includes(term) ||
            job.tags.join('').toLowerCase().includes(term) ||
            job.location.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().includes(term) ||
            job.salary?.toLowerCase().includes(term)
        ));

        setFilteredJobs(filtered);
        
    }, [keyWord])

    return (
         <div className="flex items-center gap-2 bg-white border rounded-2xl px-3 py-1">
            <button><img className="w-5" src="./search.svg" alt="search" /></button>
            <input 
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
            className="bg-transparent text-black focus:outline-none placeholder:text-sm" 
            type="text" 
            placeholder="Search" />
        </div>
    )
}