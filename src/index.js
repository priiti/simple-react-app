import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD88Xj0Rg6uw6f4uyRy_B1pdNN-wHciGBY';
// Create a new component
// Component should produce some html

const App = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <SearchBar />
        </div>
    )
}

// Take components html and put into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));