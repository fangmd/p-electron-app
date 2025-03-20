import React from 'react'
import VideoRecorder from '../components/VideoRecorder'

export const VideoRecorderPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Video Recorder</h1>
      <VideoRecorder />
    </div>
  )
}
