import React from "react";
import { FramePerson, Picture, Info } from "./style";
import 'animate.css';

export default function CardPerson(props) {
    return (
        <FramePerson className={props.className}>
            <Picture picture={props.picture}/>
            <Info>
                <h2>{props.name}</h2>
                <h3>{props.description}</h3>
            </Info>
        </FramePerson>
    );
}