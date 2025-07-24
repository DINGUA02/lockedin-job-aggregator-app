import { JobCard } from '../components/JobCard';
import {useJobContext} from '../hooks/useJobContext'

export const Favorites = () => {
    const {favorites} = useJobContext();

    return (
        <>
            <div className="p-4 max-w-5xl mx-auto lg:hidden" >
        {favorites.length > 0 ? 
                (<div className="grid gap-4" >
                    {favorites.map(job => 
                        <JobCard key={job.id} job={job}/>
                    )}
                </div>) 
                : (<h2 className="text-center my-60 text-lg font-semibold">No favorites yet...</h2>) 
            }
            </div>

            <div className="hidden lg:block p-4">
                {favorites.length > 0 ? (
                    <div className="flex flex-wrap gap-4 justify-center">
                    {favorites.map(job => (
                        <div key={job.id} className="w-[480px]">
                            <JobCard  job={job} />
                        </div>    
                    ))}
                    </div>
                ) : (
                    <h2 className="text-center mt-20 mb-[50%]">No jobs found.</h2>
                )}
                </div>
        </>        
    )
} 