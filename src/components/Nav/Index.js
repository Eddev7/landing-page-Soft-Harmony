import React from "react";
import { Header, ImageLogo } from "./styled";
import logo from '../../assets/images/Logo.svg';

export default function Nav() {
    return <Header>
        <ImageLogo src={logo}></ImageLogo>
    </Header>
}