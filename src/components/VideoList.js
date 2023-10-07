import PlayButton from "./PlayButton";
import Video from './Video'
import useVideos from "../hooks/Videos";
import axios from "axios";
import { useEffect } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";

function VideoList({editVideo}){

    const url = "https://my.api.mockaroo.com/video.json?key=ddbe1a80";

    const videos = useVideos();

    const dispatch = useVideoDispatch();

    async function handleClick(){
        const res = await axios.get(url);
        console.timeLog('get videos', res.data);
        dispatch({type: 'LOAD', payload: res.data});
    }

    useEffect(()=>{
        async function getVideos(){
            const res = await axios.get(url);
            console.timeLog('get videos', res.data);
            dispatch({type: 'LOAD', payload: res.data});
        }
        getVideos();
    },[])

    return(
        <>
        {
        videos.map(video =>
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          editVideo={editVideo}
          >
          <PlayButton
          onPlay={()=>console.log('Playing', video.title)} onPause={()=>console.log('Paused', video.title)}>{video.title}</PlayButton>
          </Video>)
      }

      <button onClick={handleClick}>Get Videos</button>
        </>
    )
};

export default VideoList;