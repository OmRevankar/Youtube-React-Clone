import React, { useEffect, useState } from 'react'
import thumb1 from '../assets/assets/thumbnail1.png'
import thumb2 from '../assets/assets/thumbnail2.png'
import thumb3 from '../assets/assets/thumbnail3.png'
import thumb4 from '../assets/assets/thumbnail4.png'
import thumb5 from '../assets/assets/thumbnail5.png'
import thumb6 from '../assets/assets/thumbnail6.png'
import thumb7 from '../assets/assets/thumbnail7.png'
import thumb8 from '../assets/assets/thumbnail8.png'
import { API_KEY, calculateViews } from '../data'
import { NavLink } from 'react-router-dom'

const recommended = (props) => {

  const [data, setData] = useState([]);

  const fetchRecommended = async () => {
    const recommended_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${props.categoryId}&key=${API_KEY}`;

    await fetch(recommended_url).then(resp => resp.json()).then(data => setData(data.items));
  }

  useEffect(() => {
    fetchRecommended();
  }, [props.videoId]);


  return (
    <div className='py-5 pr-5 flex flex-col gap-3'>

      {
        data.map((item, index) => {

          return (
            <NavLink to={`/video/${item.snippet.categoryId}/${item.id}`}  className='flex flex-row gap-2' key={item.id} >
              <img src={item.snippet.thumbnails.medium.url} className='w-5/12 h-5/6' alt="" />

              <div className='flex flex-col gap-1'>
                <h3 className='font-bold text-sm overflow-hidden leading-4 overflow-ellipsis '>
                  {item.snippet.title.slice(0,70)}
                </h3>
                <p className='text-sm text-gray-800 leading-4'>{item.snippet.channelTitle}</p>
                <p className='text-xs text-gray-600 leading-4'>{calculateViews(item.statistics.viewCount)} Views</p>
              </div>
            </NavLink>

          )

        })
      }



    </div>
  )
}

export default recommended
