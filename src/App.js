import React from "react";
import Nav from "./components/Nav/Index";
import Main from "./components/Main";
import GlobalStyles from "./styles/GlobalStyles";
export default function App() {
    return <>
        <GlobalStyles/>
        <Nav/>
        <Main/>
    </>;
}