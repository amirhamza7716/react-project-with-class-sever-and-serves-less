import React,{useState} from 'react'
import Youtube from 'react-youtube';


export default function YoutubeAdd(props) {

    let videos = [
        "-P1vN-j0jko",
        "0eMcY0Q_ws8",
        "TUyKFSnS5Dg",
    "4jf0Ho-1pdc",
"-72P_EFphSc"]

    let [currentVideo, setCurrentVideo] = useState(0);

    return <div>

        <Youtube videoId={videos[currentVideo]} />

        
        <button onClick={() => setCurrentVideo(currentVideo - 1)}>Prev</button>
        <button onClick={() => setCurrentVideo(currentVideo + 1)}>Next</button>
    </div>

}