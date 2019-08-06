import React from 'react';
import './App.css';

import Header from './Header';
import SearchForm from './SearchForm';

class App extends React.Component {
    state = {
        url: 'https://www.googleapis.com/books/v1/volumes?q',
        searchTerm: 'harry&potter',
        printType: [],
        bookType: [],
        results: {},
    };

    handleClickSearch(value) {
        this.setState({
            searchTerm: value
        })
        console.log('Updated the search Term.')
    }

    updateBookType(value) {
        this.setState({
            bookType: value
        })
    };

    updatePrintType(value) {
        this.setState({
            printType: value
        })
    };

    render() {
        return (
            <div>
                <Header />
                <SearchForm 
                    searchTerm = {this.state.searchTerm}
                    printType = {this.state.printType}
                    bookType = {this.state.bookType}
                    results = {this.state.results}
                    searchHandler = {value => this.handleClickSearch(value)}
                    bookType = {book => this.updateBookType(book)}
                    printType = {type => this.updatePrintType(type)}/>
                {/* <Results /> */}
            </div>
        );
    }
}

export default App;
