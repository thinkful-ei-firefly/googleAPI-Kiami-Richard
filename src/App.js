import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import SearchForm from './SearchForm';

class App extends Component {
    state = {
        url: 'https://www.googleapis.com/books/v1/volumes?q',
        apiKey: 'AIzaSyAjjfuT4ymbvrKHwZ3DyFPo8NwX--mPAgU',
        printType: [],
        bookType: [],
        results: {},
    };

    render() {
        return (
            <div>
                <Header />
                <SearchForm />
                {/* <Results /> */}
            </div>
        );
    }
}

export default App;
