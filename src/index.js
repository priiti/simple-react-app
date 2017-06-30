import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchHistory from './components/search_history';
const API_KEY = 'AIzaSyD88Xj0Rg6uw6f4uyRy_B1pdNN-wHciGBY';

// Create a new component
// Component should produce some html

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('wind');
    }

    videoSearch(term) {
        YouTubeSearch({key: API_KEY, term: term}, videos => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
                <SearchHistory />
            </div>
        );
    }
}

// Take components html and put into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));