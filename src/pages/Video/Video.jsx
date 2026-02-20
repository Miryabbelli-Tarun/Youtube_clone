import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recomended from '../../Components/Recomended/Recomended';
import { useParams } from 'react-router-dom';


const Video = () => {
  let {categoryId,videoId}=useParams()
  return (
    <div className='play-container'>
        <PlayVideo  videoId={videoId} />
        <Recomended categoryId={categoryId} />
    </div>
  )
}

export default Video;