import React from "react";
import { FramePerson, Picture, Info } from "./style";

export default function CardPerson(props) {
    return (
        <FramePerson>
            <Picture picture={props.picture}/>
            <Info>
                <h2>{props.name}</h2>
                <h3>{props.description}</h3>
            </Info>
        </FramePerson>
    );
}