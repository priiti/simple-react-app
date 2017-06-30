import React, { Component } from 'react';

class SearchHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    render() {
        return (
            <div>
                <p>Search History List</p>
            </div>
        );
    }
}

export default SearchHistory;