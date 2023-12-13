import React from 'react';
import YouTube from 'react-youtube';
import './about.css'

const VideoPlayer = () => {
  // Replace 'YOUR_YOUTUBE_VIDEO_ID' with the actual YouTube video ID
  const videoId = 'VAPu6WyRuCc?si=pcl1ZFHeL9DhXPKn';

  // You can also define additional options for the YouTube player
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // 1 to autoplay
    },
  };

  return (
    <YouTube videoId={videoId} opts={opts} />
  );
};

export default VideoPlayer;
