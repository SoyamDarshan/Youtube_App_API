import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
                <div>Loading...</div>
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
            <div>
                <div className="ui embed">
                    <iframe src={videoSrc} title={video.snippet.title}>
                    </iframe>
                </div>
            <div class="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
    
        </div>
        );
};

export default VideoDetail;