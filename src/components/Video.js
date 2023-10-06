import './Video.css';

function Video({id, title, channel="Coder Dost", views, time, verified, children, deleteVideo, editVideo}){

    console.log("Render Video")
    
    return(
        <>
        <div className='container'>
        <button className='close' onClick={()=>deleteVideo(id)}>X</button>
        <button className='edit' onClick={()=>deleteVideo(id)}>Edit</button>
        <div className='pic'>
            <img src={`https://picsum.photos/id/${id}/160/90`} alt="Random Pic" height={150} />
        </div>
        <div className='title'>{title}</div>
       <div className='channel'>{channel} {verified && '✅'} </div>
        <div className='views'>
            {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
        </div>
        </>
    ) 
}

export default Video;