import PlayButton from "./PlayButton";
import Video from "./Video";
import useVideos from "../hooks/Videos";
import axios from "axios";
import { useCallback, useDeferredValue, useEffect, useMemo } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";

function VideoList({ editVideo }) {
  const url = "https://my.api.mockaroo.com/video.json?key=ddbe1a80";

  const videos = useVideos();
  const dispatch = useVideoDispatch();
  const defVideos = useDeferredValue(videos);

  async function handleClick() {
    const res = await axios.get(url);
    dispatch({ type: "LOAD", payload: res.data });
  }

  useEffect(() => {
    // async function getVideos() {
    //   const res = await axios.get(url);
    //   dispatch({ type: "LOAD", payload: res.data });
    // }
    // getVideos();
  }, [dispatch]);

  const play = useCallback(() => console.log("Playing...."), []);
  const pause = useCallback(() => console.log("Paused...."), []);

  const memoButton = useMemo(
    () => <PlayButton onPlay={play} onPause={pause}>Play</PlayButton>,
    [pause,play]
  );

  return (
    <>
      {defVideos.map((video) => (
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
          {memoButton}
        </Video>
      ))}

      <button onClick={handleClick}>Get Videos</button>
    </>
  );
}

export default VideoList;
