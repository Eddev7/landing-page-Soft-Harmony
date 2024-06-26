import React, { useEffect, useState } from "react";
import { Result, Cards } from "./styled";
import ReactPlayer from "react-player";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

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
        1: "https://youtube.com/shorts/urHAq3c2mAI?feature=share",
        2: "https://youtube.com/shorts/WvT1Q9dUceU?feature=share",
        3: "https://youtube.com/shorts/SHOIC2PsxS0?feature=share"
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
                <ReactPlayer 
                    url={video} 
                    width={props.width > 582 ? 372 : 236} 
                    height={props.width > 582 ? 650 : 413}
                    loop={true}
                />
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
            <ReactPlayer 
            url="https://youtube.com/shorts/urHAq3c2mAI?feature=share" 
            width={372} 
            height={650}
            loop={true}
            />
            <ReactPlayer 
            url="https://youtube.com/shorts/WvT1Q9dUceU?feature=share" 
            width={372} 
            height={650}
            loop={true}
            />
            <ReactPlayer url="https://youtube.com/shorts/SHOIC2PsxS0?feature=share" 
            width={372} 
            height={650} 
            loop={true}/>
        </Cards>
    );
}