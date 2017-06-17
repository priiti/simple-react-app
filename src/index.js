import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyD88Xj0Rg6uw6f4uyRy_B1pdNN-wHciGBY';

// Create a new component
// Component should produce some html

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YouTubeSearch({key: API_KEY, term: 'surfboards'}, videos => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take components html and put into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));