import React from 'react';
import Filter from './Filter';

class SearchForm extends React.Component {

    handleSearchTermSubmit(e) {
        e.preventDefault();
        console.log(e.target.searchterm.value)
        this.props.searchHandler(e.target.searchterm.value)
    }

    render() {
        return (
            <div>
                <form className="search" onSubmit={e => this.handleSearchTermSubmit(e)}>
                    <label htmlFor="searchterm">Search:</label>
                    <input
                        type="text"
                        name="searchterm"
                        id="search-term"
                        placehoder="something to search about books . . ." />
                    <button type="Submit">Search</button>
                </form>
                <Filter 
                    printType = {this.props.printType}
                    bookType = {this.props.bookType}
                    results = {this.props.results}
                    updateBookFilter = {value => this.props.bookType(value)}
                    updatePrintFilter = {value => this.props.printType(value)}/>
            </div>
        );
    }
}

export default SearchForm;
