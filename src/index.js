import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDky8aONBX8Jep3OnK9WnTFyElj7ew5Ass';
// Creating a new component to produce HTML
// This is like a factory producing instances of App
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfing');
    }

    videoSearch(term) {
    // data
    // Automatically populate data by putting this function in the constructor
    YTSearch({
            key: API_KEY,
            term: term
        }, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]});
            // syntactic sugar, when the key and the value are
            // the same variable name => videos: videos is the same as videos
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Generate the component's HTML
ReactDom.render(<App />, document.querySelector('.container'));
