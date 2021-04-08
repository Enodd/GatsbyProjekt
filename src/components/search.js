import React from 'react'
import '../styles/stylecomponents/search.scss'

const SearchBar = ({ searchQuery, setSearchQuery, onType }) => (
    <form action="/" method="get" autoComplete="off" className="search-bar">
        <label htmlFor="search" className="search-bar__label">
            Wyszukaj wybrany artykuł
        </label>
        <input
            value={searchQuery}
            onInput={(e) => {
                setSearchQuery(e.target.value)
                onType()
            }}
            type="text"
            id="search"
            placeholder="Wyszukaj wybrany artykuł"
            name="s"
            className="search-bar__input"
        />
    </form>
)

export default SearchBar