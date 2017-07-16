import React, { Component } from 'react';

// ES6 Class (an actual JS object with methods and properties)
// Define a new class called SearchBar and give it access to all the
// functionality that react component has
class SearchBar extends Component {
    // initializing state
    constructor(props) {
        // calling the parent method with super
        super(props);

        this.state = { term : ''};
    }

    render() {  // just one parameter you don't need parentesis for es6 fat arrow
        // Always manipulate the value of the state with this.setState()
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value})}  />
            </div>
        );
    }
}

export default SearchBar;

//                   Other Notes

// ----- Functional Component use same export -----
// const SearchBar = () => {
//   return <input />; // this is like React.createElement
// };

// ----- Using a function to pass into the event -----
// onChange={this.onInputChange}
// onInputChange(event) {
//     console.log(event.target.value); // target is targeting 'input' i.e. input.value
// }

// this.state.term = event.target.value; = BAD CODE!!!!!
// ***** this.state.term is for referencing not setting
