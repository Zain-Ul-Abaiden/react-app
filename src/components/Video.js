import "./Video.css";
import useVideoDispatch from "../hooks/VideoDispatch";
import useTheme from "../hooks/Theme";
import { memo, useRef } from "react";
// import { useEffect } from 'react';

const Video = memo(function Video({
  id,
  title,
  channel = "Coder Dost",
  views,
  time,
  verified,
  children,
  editVideo,
}) {
  console.log("Render Video", id);

  const theme = useTheme();
  const dispatch = useVideoDispatch();
    const ref = useRef(null);

    // useLayoutEffect(()=>{
    //     const { height } = ref.current.getBoundingClientRect();
    //     console.log(height);
    // }, [])

  // useEffect(()=>{
  //     const idx =setInterval(()=>{
  //         console.log('video playing', id)
  //     },3000)

  //     return ()=>{
  //         clearInterval(idx);
  //     }

  // },[id])

  return (
    <>
      <div ref={ref} className={`container ${theme}`}>
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Random Pic"
            height={150}
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified && "✅"}{" "}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
});

export default Video;
