import React, { useState, useEffect } from "react";
import VideoPlayer from "react-video-js-player";
import { Link, useLocation } from "react-router-dom";
import fire from "../../server/firebase";
import {useHistory} from "react-router";
import "./video.css";

export const Video = () => {
  const [authKey, setAuthKey] = useState(() => {
    let key = Object.keys(window.sessionStorage)
        .filter(item => item.startsWith('firebase:authUser'))[0];
    if (key === undefined) return history.push("/login");
    return key;
});
  let location = useLocation();
  const history = useHistory();
  //Midlertidlig, videosrc skal hentes dynamisk fra backend
  var videoSrc =
    "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4";
    if(location.video === undefined){
      history.push("/learn");
    }

    const videoDone = () => {   

      const authUser = JSON.parse(sessionStorage.getItem(authKey.toString()));

    fire.database()
    .ref('users')
    .child(authUser.uid)
    .child(JSON.parse(sessionStorage.getItem("user")))
    .child("progress")
    .child(location.product)
    .child(location.part)
    .set(fire.database.ServerValue = 1)

      history.push(`${"/product/"+location.product}`);
    }
    console.log(location.part)
    console.log(location.product)

  return (
    // headline skal hentes fra backend
    <section>
      <div className="videoContainer">
        <div className="player">
          <div className="headline">
            <h1>Intro</h1>
          </div>
          <VideoPlayer
            onEnd={()=> {videoDone()}}
            src={location.video}
            type="video/mp4"
            width="750"
            playbackRates={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Video;
