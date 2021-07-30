import React, { useState } from 'react';
import VideoStyle from '../styles/_VideoStyle.module.scss'
function Video() {
    return (<div className={VideoStyle.wrapper}>
    <input className={VideoStyle.checkbox} />
    <div className={VideoStyle.video}>
      <video src="https://www.robmillsarchitects.com/files/land/city/RMA_Web_land_city_1.mp4" loop muted autoPlay />
    </div>
    <div className={VideoStyle.text}>
      <span data-text="Watch the video" />
    </div>
  </div>)
  }
  export default Video