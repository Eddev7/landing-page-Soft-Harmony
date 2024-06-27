import React from "react";
import Nav from "./components/Nav/Index";
import Main from "./components/Main";
import GlobalStyles from "./styles/GlobalStyles";
import { FaWhatsapp } from "react-icons/fa";

export default function App() {
    return <>
        <GlobalStyles/>
        <a href="https://wa.me/5585982287894"><FaWhatsapp className="whatsapp"/></a>
        <Nav/>
        <Main/>
    </>;
}