import React from "react";
import { CardMain, ImageMain, FrameGold } from "./styled";

export default function CardPrimary() {
    return <FrameGold>
    <CardMain>
        <ImageMain/>
        <div className="cardTitles">
            <div>
                <h1>Desperte a sua<br/> Beleza Única</h1>
                <h2>Realce seus traços e conquiste a<br/> autoestima que você merece.</h2>
                <a href="https://wa.me/5585982287894">
                    <button>Clique aqui</button>
                </a>
            </div>
        </div>
    </CardMain>
    </FrameGold>;
}