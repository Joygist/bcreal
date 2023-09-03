import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const  SearchBar = ({filter, setFilter}) => {
    return (
        <div className='flexCenter search-bar'>
                        <HiOutlineLocationMarker color="var(--blue)" size={25}/>
                         <input placeholder="Search by title/city/country..." type= "text" value={filter} onChange={(e)=> setFilter(e.target.value)} />
                         <button className='button'>Search</button>
                    </div>
    )
}
export default SearchBar