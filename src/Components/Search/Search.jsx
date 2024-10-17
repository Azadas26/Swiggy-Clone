import React from 'react'

function Search() {
    return (
        <div className="search-container">
            <input className='search-input' type="text" placeholder='Search you Food........' onInput={e => {
                setSearch(e.target.value)
                console.log("eee", e.target.value);
                searchResult()
            }} value={search} />
            <button className='search-btn' onClick={searchResult}><FontAwesomeIcon icon={faSearch} /></button>
        </div>
    )
}

export default Search