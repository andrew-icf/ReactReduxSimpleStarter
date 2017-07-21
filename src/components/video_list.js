import React from 'react';
import VideoListItem from './video_list_item';

// Does not re-render itself so no need for state (function based component)
const VideoList = (props) => {
    // saving a reference to our videos
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
