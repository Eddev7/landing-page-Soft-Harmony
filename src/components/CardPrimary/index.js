import React from "react";
import { CardMain, ImageMain, FrameGold } from "./styled";
import 'animate.css';

export default function CardPrimary() {
    return <FrameGold>
    <CardMain>
        <ImageMain className="animate__animated animate__fadeInLeft animate__delay-0.4s"/>
        <div className="cardTitles">
            <div>
                <h1 className="animate__animated animate__fadeInUp animate__delay-0.4s">Desperte a sua<br/> Beleza Única</h1>
                <h2 className="animate__animated animate__fadeInUp animate__delay-1s">Realce seus traços e conquiste a<br/> autoestima que você merece.</h2>
                <a href="https://wa.me/5585982287894"   className="animate__animated animate__fadeInUp animate__delay-1s">
                    <button>Clique aqui</button>
                </a>
            </div>
        </div>
    </CardMain>
    </FrameGold>;
}