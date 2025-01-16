import React, { useEffect } from 'react'
import PlayVideo from '../components/PlayVideo'
import Recommended from '../components/Recommended'
import { useParams } from 'react-router-dom';

const Video = () => {

  const {videoId,categoryId} = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [videoId])
  

  return (
    <div className='flex flex-row'>
      <div className='w-12/12 sample:w-8/12 '>
        <PlayVideo videoId = {videoId} categoryId={categoryId}/>
      </div>
      <div className='hidden sample:block sample:w-4/12'>
        <Recommended videoId={videoId} categoryId={categoryId}/>
      </div>
    </div>
  )
}

export default Video
