import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, valueConverter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'


const PlayVideo = () => {
    let {videoId}=useParams();

    let [apiData,setApiData]=useState(null);
    let [channelData,setChannelData]=useState(null);
    let [commentsData,setCommentsData]=useState([]);

    const fetchVideoDetails=async ()=>{
        //fetch video information
        let videoDeatils_Api=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDeatils_Api).then(response=>response.json())
                                      .then(data=>setApiData(data.items[0]))
                                      .catch(error=>console.log('error'))
    }

    const fetchChannelDetails=async ()=>{
        //fetch channel information
        const channelDetails_Api=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelDetails_Api).then(response=>response.json())
                                        .then(data=>setChannelData(data.items[0]))
                                        .catch(error=>console.log('error occured'))

        //fetch comments of video
        const commentDetails_Api=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        await fetch(commentDetails_Api).then(response=>response.json())
                                       .then(data=>setCommentsData(data.items))
                                       .catch(error=>console.log('error'))
    }

    useEffect(()=>{
        fetchVideoDetails()
    },[videoId])

    useEffect(()=>{
        fetchChannelDetails()
    },[apiData])

    return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:'title hear'}</h3>
        <div className='play-video-info'>
            <p>{apiData?valueConverter(apiData.statistics.viewCount):'10k'} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():''}</p>
            <div>
                <span><img src={like} alt="" />{apiData?valueConverter(apiData.statistics.likeCount):100}</span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={share} alt="" />share</span>
                <span><img src={save} alt="" />save</span>
            </div> 
        </div>
        <hr />  
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.medium.url:''} alt="" />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:'channel title'}</p>
                <span>{channelData?valueConverter(channelData.statistics.subscriberCount):0} subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>

        <div className='vid-description'>
            <p>{apiData?apiData.snippet.description.slice(0,250):'description hear'}</p>
            <hr />
            <h4>{apiData?valueConverter(apiData.statistics.commentCount):100} comments</h4>

            {
                commentsData.map((item,index)=>{
                    return(
                        <div key={index} className="comment">
                            <img key={index} src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.publishedAt).fromNow()}</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textOriginal} </p>
                                <div className='comment-actions'>
                                    <img src={like} alt="" />
                                    <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={dislike} alt="" />
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
            
            
            

        </div>

    </div>
  )
}

export default PlayVideo