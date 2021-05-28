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


    if(location.video === undefined){
      history.push(`${"/product/"+sessionStorage.getItem("current_product_id")}`);
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

        history.push(`${"/product/"+sessionStorage.getItem("current_product_id")}`);
    }
    if(location.product){
      sessionStorage.setItem("current_product_id", location.product)
    }

  return (
    <section>
      <div className="videoContainer">
        <div className="player">
          <div className="headline">
            <h4>{location._part_name}</h4>
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
