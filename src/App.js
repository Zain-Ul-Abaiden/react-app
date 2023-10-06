import "./App.css"
import videoDB from './data/data';
// import Counter from "./components/Counter";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
function App() {

  console.log("Render App")

  const [videos, setVideos] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideos(video){
        setVideos( [
          ...videos,
          {...video, id: videos.length+1}
        ]);
  }

  function deleteVideo(id){
    setVideos(videos.filter(video=>video.id !== id))
  }

  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id))
  }

  function updateVideo(video){
    const index = videos.findIndex(v=>v.id===video.id);
    const newVideos = [...videos];
    newVideos.splice(index,1,video);
    setVideos(newVideos);
  }

  return (
    <div className='App' onClick={()=>console.log('App')}>
      <AddVideo addVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>
      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>

      {/* <Counter></Counter> */}
  
    </div>
  )
}

export default App;