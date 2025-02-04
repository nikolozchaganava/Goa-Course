import React from 'react'
import backgroundVideo from '../src/assets/Video.mp4'
import {useVideo} from 'react-use'

export default function App() {
  const [video, state, controls, ref] = useVideo(
    <video src={backgroundVideo} loop autoPlay muted className='z-[-1] absolute top-0 left-0 w-full h-full object-cover'></video>
  )
  return (
    <div>
      {video}
    </div>
  )
}
