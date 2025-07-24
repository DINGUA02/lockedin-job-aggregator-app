import { useState } from "react";
import { useJobContext } from "../hooks/useJobContext";

export const JobCard = ({job}) => {
    const {id, title, company_name,location,job_type,category, salary, tags, description, apply_link,posted_at } = job;
    const {addToFavorites, removeFromFavorites, favorites} = useJobContext();
    const isFavorite = favorites.find(favorite => favorite.id === id);
    const [showDetails, setShowDetails] = useState(false);


    return (
       <>
            <div className="p-2 border rounded-lg shadow mb-4">
                <div className="py-4 px-2 rounded-lg mb-3 bg-gray-200">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="font-medium">{posted_at}</h2>
                        <button className="py-1 px-2 shadow font-bold border bg-white rounded-3xl hover:scale-105 ease-in-out duration-100" onClick={() => {
                            if(isFavorite) {
                                return removeFromFavorites(id)
                            } else {
                                return addToFavorites(job)
                            }
                        }}>{isFavorite? 'Remove From Favorites' : 'Add to Favorites'}</button>
                    </div>
                    <div className="my-4">
                        <h2 className="text-lg font-bold">{company_name}</h2>
                        <h2 className="text-xl font-bold">{title}</h2>
                        <h2 className="font-medium">{category}</h2>
                    </div>
                    <div>
                        <ul className="flex gap-2 mb-2 flex-wrap">
                            {tags.map(tag => <li key={tag} className="px-1 border border-black rounded-lg">{tag}</li>)}
                        </ul>
                        <div>
                            <h3 className="font-medium">{job_type}</h3>
                            <h3 className="font-medium">{location}</h3>
                        </div>
                    </div>
                </div>
                <div className="p-3 flex justify-between items-center">
                    <h2 className="font-bold text-lg">{salary}</h2>
                    <button className="py-1 px-3 shadow font-bold border bg-black text-white rounded-3xl hover:scale-105 ease-in-out duration-150" 
                    onClick={()=> {setShowDetails(!showDetails)}}>{showDetails? 'Hide Details' : 'Details'}</button>
                </div>
                {showDetails ? (
                        <div className="py-4 px-2 rounded-lg mb-3 border shadow">
                            <h2 className="font-medium text-lg mb-1">{description}</h2>
                            <a href={apply_link}> <span className="font-medium">Apply now:</span> <span className="text-blue-600 hover:text-blue-400">{apply_link}</span></a>
                        </div>
                    ): null}
            </div>    
        </>
    )
}