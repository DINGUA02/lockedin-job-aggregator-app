import { useJobContext } from "../hooks/useJobContext";
import { JobCard } from "./JobCard";

export const JobList = () => {
    const {filteredJobs} = useJobContext();

    return (
        <>
            <div className="p-4 max-w-xl mx-auto lg:hidden">
            {filteredJobs.length > 0 ? (
                <div className="flex flex-col gap-4">
                    {filteredJobs.map(job => 
                        <JobCard key={job.id} job={job}/>
                    )}
                </div>)
                : (<h2 className="text-center my-60 text-lg font-semibold">No available job...</h2>)}
            </div>

            <div className="hidden lg:block p-4">
            {filteredJobs.length > 0 ? (
                <div className="flex flex-wrap gap-4 justify-center">
                {filteredJobs.map(job => (
                    <div key={job.id} className="w-[480px]">
                        <JobCard  job={job} />
                    </div>    
                ))}
                </div>
            ) : (
                <h2 className="text-center mt-20">No jobs found.</h2>
            )}
            </div>
        </>

        
    )
}