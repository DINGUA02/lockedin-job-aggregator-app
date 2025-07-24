import { NavBar } from "./Navbar";

export const Header = () => {

    return (
        <>
            <div className=" text-white bg-black py-3 px-2 shadow-lg sticky top-0 backdrop-blur bg-opacity-90 z-10 lg:hidden">
                <div className="flex justify-center gap-1 mb-5">
                    <img className="w-8 self-end" src="/padlock.svg" alt="app logo"/>
                    <h1 className="text-4xl font-bold leading-none">LockedIn</h1> 
                </div>
                <NavBar />
            </div>

             <div className="hidden lg:block text-white bg-black py-3 px-2 shadow-lg sticky top-0 backdrop-blur bg-opacity-90 z-10">
            <div className="flex justify-center gap-1 mb-5 select-none cursor-default">
                <div className="flex items-center">
                    <img className="w-20" src="/padlock.svg" alt="app logo"/>
                    <h1 className="text-8xl font-bold">LockedIn</h1> 
                </div>    
                <NavBar />
            </div>
            
        </div>
        </>    
    )
}