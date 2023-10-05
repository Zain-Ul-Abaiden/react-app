import "./App.css"
import videoDB from './data/data';
// import Counter from "./components/Counter";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
function App() {

  console.log("Render App")

  const [videos, setVideos] = useState(videoDB)
  function addVideos(video){
        setVideos( [...videos,{...video, id: videos.length+1}]);
  }
  return (
    <div className='App' onClick={()=>console.log('App')}>
      <AddVideo addVideos={addVideos}></AddVideo>
      <VideoList videos={videos}></VideoList>

      {/* <Counter></Counter> */}
  
    </div>
  )
}

export default App;