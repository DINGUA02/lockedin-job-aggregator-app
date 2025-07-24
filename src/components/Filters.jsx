import { useState, useEffect, use } from "react";
import { useJobContext } from "../hooks/useJobContext";

export const Filters = () => {
    const {jobs, setFilteredJobs} = useJobContext();

    const [jobType, setJobType] = useState('');
    const [workLocation, setWorkLocation] = useState('');

    useEffect(() => {
        let filtered = [...jobs];

        if (jobType) {
            filtered = filtered.filter(job => job.job_type?.toLowerCase() === jobType);
        };

        if (workLocation === 'remote') {
            filtered = filtered.filter(job => job.location?.toLowerCase().includes('remote'));
        } else if (workLocation === 'onsite') {
            filtered = filtered.filter(job => !job.location?.toLowerCase().includes('remote'));
        };

        setFilteredJobs(filtered);
    },[jobType, workLocation]);

    return (
        <div className="flex gap-1">
            <div className="flex items-center gap-1">
                <label htmlFor="jobType">Job Type </label>
                <select className="text-gray-400 rounded-md focus:outline-none border-none cursor-pointer" id="jobType" onChange={(e) => setJobType(e.target.value)}>
                    <option value=''>All</option>
                    <option value='full-time'>Full-Time</option>
                    <option value='part-time'>Part-Time</option>
                </select>
            </div>
            <div className="flex items-center gap-1" >
                <label htmlFor="location">Location </label>
                <select className="text-gray-400 rounded-md focus:outline-none border-none cursor-pointer" id="location" onChange={(e) => setWorkLocation(e.target.value)}>
                    <option value=''>All</option>
                    <option value='onsite'>On-site</option>
                    <option value='remote'>Remote</option>
                </select>
            </div>
        </div>
    )
}