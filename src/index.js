import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDky8aONBX8Jep3OnK9WnTFyElj7ew5Ass';
// Creating a new component to produce HTML
// This is like a factory producing instances of App - a class
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Generate the component's HTML
ReactDom.render(<App />, document.querySelector('.container'));
