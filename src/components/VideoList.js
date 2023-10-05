import PlayButton from "./PlayButton";
import Video from './Video'

function VideoList({videos}){
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
          >
          <PlayButton
          onPlay={()=>console.log('Playing', video.title)} onPause={()=>console.log('Paused', video.title)}>{video.title}</PlayButton>
          </Video>)
      }
        </>
    )
};

export default VideoList;