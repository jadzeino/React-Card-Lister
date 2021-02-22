import React from "react"

export const SearchBox =({setSearchField})=>{
    const searchChange=(e)=>{
        const searchValue=e.target.value
        setSearchField(searchValue)
    }

    return (<div className="pa1 tc"><input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search Certificate" onChange={searchChange} /> </div>)
}