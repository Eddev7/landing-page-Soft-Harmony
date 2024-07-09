import React from "react";
import { MainContent } from "./styled";
import CardPrimary from "../CardPrimary";
import CardPerson from "../CardPerson";
import picture1 from '../../assets/images/picture1.png';
import picture2 from '../../assets/images/picture2.png';
import CardResult from "../CardResult";


export default function Main() {
    return <MainContent>
        <CardPrimary/>
        <div className="CardsPerson">
            <CardPerson
            picture={picture1} 
            name="Dra. Clau Rodrigues"
            description="Biomédica Esteta Harmonização Facial e Corporal" 
            className="animate__animated animate__fadeInLeft animate__delay-1s"
            />
            <CardPerson 
            picture={picture2} 
            name="Dra. Ana Nogueira"
            description="Biomédica Esteta e Patologista"
            className="animate__animated animate__fadeInRight animate__delay-1s"
            />
        </div>
        <CardResult/>
    </MainContent>;
}