import React from 'react'

const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get" autoComplete="off">
        <input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            type="text"
            id="search"
            placeholder="Wyszukaj wybrany artykuł"
            name="s"
        />
    </form>
)

export default SearchBar