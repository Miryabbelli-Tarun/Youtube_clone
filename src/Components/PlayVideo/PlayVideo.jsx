import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'


const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>best video to learn the coding</h3>
        <div className='play-video-info'>
            <p>1430 views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={share} alt="" />share</span>
                <span><img src={save} alt="" />save</span>
            </div> 
        </div>
        <hr />  
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Trun</p>
                <span>10M subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>

        <div className='vid-description'>
            <p>channel that make coding easy</p>
            <p>it is a trun youtube channel please make subscription to see the videos</p>
            <hr />
            <h4>120 comments</h4>

            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>jack <span>2 days ago</span></h3>
                    <p>very nice video to watch keep going lets make more videos i am also share with my friends about this channel </p>
                    <div className='comment-actions'>
                        <img src={like} alt="" />
                        <span>120</span>
                        <img src={dislike} alt="" />
                        <span>4</span>
                    </div>
                </div>
            </div>
            
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>jack <span>2 days ago</span></h3>
                    <p>very nice video to watch keep going lets make more videos i am also share with my friends about this channel </p>
                    <div className='comment-actions'>
                        <img src={like} alt="" />
                        <span>120</span>
                        <img src={dislike} alt="" />
                        <span>4</span>
                    </div>
                </div>
            </div>
            
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>jack <span>2 days ago</span></h3>
                    <p>very nice video to watch keep going lets make more videos i am also share with my friends about this channel </p>
                    <div className='comment-actions'>
                        <img src={like} alt="" />
                        <span>120</span>
                        <img src={dislike} alt="" />
                        <span>4</span>
                    </div>
                </div>
            </div>
            
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>jack <span>2 days ago</span></h3>
                    <p>very nice video to watch keep going lets make more videos i am also share with my friends about this channel </p>
                    <div className='comment-actions'>
                        <img src={like} alt="" />
                        <span>120</span>
                        <img src={dislike} alt="" />
                        <span>4</span>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default PlayVideo