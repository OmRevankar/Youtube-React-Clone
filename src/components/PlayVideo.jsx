import React, { useEffect, useState } from 'react'
import video1 from '../assets/assets/video.mp4'
import like from '../assets/assets/like.png'
import dislike from '../assets/assets/dislike.png'
import share from '../assets/assets/share.png'
import save from '../assets/assets/save.png'
import jack from '../assets/assets/jack.png'
import user_profile from '../assets/assets/user_profile.jpg'
import { useParams } from 'react-router-dom'
import { API_KEY, calculateViews } from '../data'
import moment from 'moment'

const PlayVideo = (props) => {

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchData = async () => {
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${props.videoId}&key=${API_KEY}`;

        await fetch(url).then(res => res.json()).then(apiData => setApiData(apiData.items[0]));
    }

    const fetchChannelData = async () => {
        const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`

        await fetch(channel_url).then(response => response.json()).then(channelData => setChannelData(channelData.items[0]));
    }

    const fetchCommentData = async () => {
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${props.videoId}&key=${API_KEY}`

        await fetch(comment_url).then(resp => resp.json()).then(data => setCommentData(data.items));
    }

    useEffect(() => {
        fetchData();
        fetchCommentData();
        
    },[props.videoId])

    useEffect(() => {
        fetchChannelData()
    }, [apiData ]);



    return (
        <div className='w-[100%] p-5'>
            <iframe className='w-full h-[40vw]' src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            {/* <video src={video1} controls autoPlay muted className='w-[100%]' ></video> */}
            <div className='my-4 flex flex-col gap-2'>
                <h3 className='font-bold text-base supersm:text-xl'>{apiData ? apiData.snippet.localized.title : "Learn React in 1 second !"}</h3>
                <div className='flex flex-col supersm:flex-row gap-2 justify-between'>
                    <p className='text-gray-600 text-sm supersm:text-base'>{apiData ? calculateViews(apiData.statistics.viewCount) : "193K"} &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "10 hours ago"} </p>
                    <div className='flex flex-row gap-3 items-center'>
                        <div className='flex flex-row gap-2 items-center'>
                            <img className='supersm:w-5 supersm:h-5 w-4 h-4' src={like} alt="" />
                            <p className='text-gray-600 text-sm supersm:text-base'>{apiData ? calculateViews(apiData.statistics.likeCount) : "16k"}</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <img className='supersm:w-5 supersm:h-5 w-4 h-4' src={dislike} alt="" />
                            <p className='text-gray-600 text-sm supersm:text-base'>Dislike</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <img className='supersm:w-5 supersm:h-5 w-4 h-4' src={share} alt="" />
                            <p className='text-gray-600 text-sm supersm:text-base'>Share</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <img className='supersm:w-5 supersm:h-5 w-4 h-4' src={save} alt="" />
                            <p className='text-gray-600 text-sm supersm:text-base'>Save</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mb-4' />
            <div className='mb-4 flex flex-col gap-3'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-2.5'>
                        <img src={channelData ? channelData.snippet.thumbnails.medium.url : jack} className='w-[45px] h-[45px] rounded-full' alt="" />
                        <div className='flex flex-col'>
                            <h3 className='font-bold'>{apiData ? apiData.snippet.channelTitle : "Mr Howdy"}</h3>
                            <p className='text-sm text-gray-600'>{channelData ? calculateViews(channelData.statistics.subscriberCount) : "13M"} Subscribers</p>
                        </div>
                    </div>
                    <button className='bg-red-500 px-2 h-[30px] supersm:h-[37px] supersm:px-4 rounded-md text-white text-xs supersm:text-sm'>
                        SUBSCRIBE
                    </button>
                </div>

                <div className='pl-14 text-sm text-gray-600'>
                    {apiData ? apiData.snippet.description.slice(0, 250) + " . . . . . " : "Mr Howdy"}
                </div>
            </div>
            <hr />

            <div className='mt-4 supersm:pl-14'>
                <h4 className='mb-4 text-gray-800'>{apiData ? calculateViews(apiData.statistics.commentCount) : "16K"} Comments</h4>

                <div className='flex flex-col gap-7'>

                    {
                        commentData.map((item, index) => {

                            return (
                                <div className='flex flex-row gap-3.5' key={item.id}>
                                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} className='w-[35px] h-[35px] rounded-full' alt="" />
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex flex-col'>
                                            <h3 className='font-bold supersm:text-base text-sm'>{item.snippet.topLevelComment.snippet.authorDisplayName}<span className='ml-2 font-normal text-gray-600 text-xs'>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>

                                            <p className='text-gray-600 text-sm'>{item.snippet.topLevelComment.snippet.textDisplay.slice(0,150)}.</p>
                                        </div>

                                        <div className='flex flex-row gap-3.5 text-gray-600 supersm:text-sm text-xs'>
                                            <div className='flex flex-row gap-1'>
                                                <img src={like} className='supersm:w-5 supersm:h-5 w-4 h-4' alt="" />
                                                <p>{item.snippet.topLevelComment.snippet.likeCount}</p>
                                            </div>
                                            <div className='flex flex-row gap-1'>
                                                <img src={dislike} className='supersm:w-5 supersm:h-5 w-4 h-4' alt="" />
                                                <p>{Math.round(Math.random())}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }



                </div>
            </div>

        </div>
    )
}

export default PlayVideo
