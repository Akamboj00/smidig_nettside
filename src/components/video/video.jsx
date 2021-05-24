import React from 'react';
import VideoPlayer from 'react-video-js-player'
import "./video.css";



export const Video = () => {
  //Midlertidlig, videosrc skal hentes dynamisk fra backend
  var videoSrc = "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4";
  
  return(
// headline skal hentes fra backend
<section>
    <div className="videoContainer">
    <div className="player">
      <div className="headline"><h1>Intro</h1></div> 
      <VideoPlayer
        src={videoSrc}
        type="video/mp4"
        width="750"
        playbackRates={false}
      />
    </div> 
    </div>
    
      <div className="leftArrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
      </div>
     

    </section>
  ) 
}


export default Video;