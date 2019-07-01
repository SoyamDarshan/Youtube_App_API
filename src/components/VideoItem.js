import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    //console.log(video.snippet.thumbnails);
    return (
            <div onClick={() => onVideoSelect(video)} className="video-item item">
                <img className="ui image" 
                src={video.snippet.thumbnails.high.url} 
                alt={video.snippet.title}></img>
                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                </div>
            </div>        
    );
};

export default VideoItem;