import React from 'react';
import Filter from './Filter';

function SearchForm() {
    return (
        <div>
            <form className="search">
                <label htmlFor="search-term">Search:</label>
                <input
                    type="text"
                    name="search-term"
                    id="search-term"
                    placehoder="something to search about books . . ." />
                <button type="submit">Search</button>
            </form>
            <Filter />
        </div>
    );
}

export default SearchForm;
