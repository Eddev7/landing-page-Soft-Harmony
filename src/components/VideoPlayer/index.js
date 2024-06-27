import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaRegPlayCircle } from "react-icons/fa";
import { Button } from "./styled";

export default function VideoPlayer(props) {
    const [playing, setPlaying] = useState(false);
    

    return <Button onClick={() => setPlaying(!playing)} visibility={!playing}>
        <FaRegPlayCircle className="play"/>
        <ReactPlayer
            url={props.url}
            width={props.width > 582 ? 372 : 236} 
            height={props.width > 582 ? 650 : 413}
            loop={true}
            playing={playing}
         />
    </Button>
}