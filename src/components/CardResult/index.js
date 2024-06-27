import React, { useEffect, useState } from "react";
import { Result, Cards } from "./styled";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';
import video3 from '../../assets/videos/video3.mp4';
import VideoPlayer from "../VideoPlayer";

export default function CardResult() {

    const [widthWindow, setWidthWindow] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleRezise = () => setWidthWindow(window.innerWidth);
        window.addEventListener('resize', handleRezise);
        return () => window.removeEventListener('resize', handleRezise);
    }, []);

    return (
        <Result width={widthWindow}>
            <h2>Resultados</h2>
            <h3>Resultados e avaliações</h3>

            <CardsView width={widthWindow}/>
        </Result>
    );
}

// variavel de controle dos videos
let count = 2;

function CardsView (props) {

    const videos = {
        1: video1,
        2: video2,
        3: video3
    }

    const [video, setVideo] = useState(videos[count]);

    if(props.width < 1200) {
        return (
            <Cards>
                <button onClick={() => {
                    count = count <= 1 ? count : count - 1;
                    setVideo(videos[count]);
                    console.log(count);
                }}>
                    <BsChevronLeft/>
                </button>
                <VideoPlayer url={video} width={props.width}/>
                <button onClick={() => {
                    count = count >= 3 ? count : count + 1;
                    setVideo(videos[count]);
                    console.log(count);
                }}>
                    <BsChevronRight/>
                </button>    
            </Cards>
        );
    }

    return (
        <Cards>
            <VideoPlayer url={video1} width={props.width}/>
            <VideoPlayer url={video2} width={props.width}/>
            <VideoPlayer url={video3} width={props.width}/>
        </Cards>
    );
}