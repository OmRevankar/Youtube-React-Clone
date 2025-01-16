import React, { useEffect, useState } from 'react'
import thumb1 from '../assets/assets/thumbnail1.png'
import thumb2 from '../assets/assets/thumbnail2.png'
import thumb3 from '../assets/assets/thumbnail3.png'
import thumb4 from '../assets/assets/thumbnail4.png'
import thumb5 from '../assets/assets/thumbnail5.png'
import thumb6 from '../assets/assets/thumbnail6.png'
import thumb7 from '../assets/assets/thumbnail7.png'
import thumb8 from '../assets/assets/thumbnail8.png'
import { NavLink } from 'react-router-dom'
import { API_KEY ,calculateViews } from '../data'
import moment from 'moment';

const Feed = (props) => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${props.category}&key=${API_KEY}`;

    await fetch(video_url).then(response => response.json()).then(data => setData(data.items));
  }

  useEffect(() => {
    fetchData();
  }, [props.category])

  // console.log(data);

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-4 gap-y-8 mr-5'>
      {

        data.map((items, index) => {

          return (

            <NavLink to={`/video/${items.snippet.categoryId}/${items.id}`} className='rounded-md' key={items.id} >
              <img className='rounded-md pb-2' src={items.snippet.thumbnails.medium.url} alt="" />
              <h3 className='font-bold text-base overflow-hidden'>{items.snippet.title.slice(0,60)}</h3>
              <p className='text-base font-medium'>{items.snippet.channelTitle}</p>
              <p className='text-sm'>{calculateViews(items.statistics.viewCount)} &bull; {moment(items.snippet.publishedAt).fromNow()}</p>
            </NavLink >

          )

        })

      }

    </div>
  )
}

export default Feed
