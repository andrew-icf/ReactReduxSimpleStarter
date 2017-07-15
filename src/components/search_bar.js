import React, { Component } from 'react';

// Functional Component
// const SearchBar = () => {
//   return <input />; // this is like React.createElement
// };

// ES6 Class (an actual JS object with methods and properties)
// Define a new class called SearchBar and give it access to all the
// functionality that react component has
class SearchBar extends Component {
    render() {
        return <input />;
    }
}

export default SearchBar;
