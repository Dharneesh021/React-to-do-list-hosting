import React from 'react'

const SearchItem = ({search , setSearch}) => {

  return (
    <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
        <input 
            type="text"
            id='searchItem'
            role='search'
            placeholder='Search Item'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
         />
    </form>
  )
}

export default SearchItem