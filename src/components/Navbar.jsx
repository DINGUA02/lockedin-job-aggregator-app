import { Link } from "react-router-dom";
import { useState } from "react";

import { SearchBar } from "./SearchBar";
import { Filters } from "./Filters";

export const NavBar = () => {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <nav className="lg:hidden flex flex-col justify-between items-center gap-2 px-4 py-3 bg-transparent text-white"> 
                <ul className="flex gap-4 text-sm sm:text-base font-medium">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Favorites'>Favorites</Link></li>    
                    <li><button className="lg:hidden cursor-pointer select-none" onClick={() => {
                        setShowDetails(!showDetails)
                    }}>{showDetails? 'Hide Filters' : 'Filters'}</button></li>
                </ul>
                {showDetails ?
                (<div>
                    <Filters />
                </div>) : null}
                <SearchBar />
            </nav>

            <nav className="hidden lg:flex flex-col justify-between items-start gap-2 px-4 py-3 bg-transparent text-white"> 
                <ul className="flex gap-4 text-sm self-center sm:text-base font-medium">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Favorites'>Favorites</Link></li>    
                </ul>
                <div className="flex flex-col gap-2">
                <SearchBar />
                <Filters />
                </div>
            </nav>
        </>
    )
}