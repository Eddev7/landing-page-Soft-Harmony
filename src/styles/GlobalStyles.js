import { createGlobalStyle } from "styled-components";
import back from "../assets/images/frame1.svg";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Inter", sans-serif;
        background-image: url(${back});
        background-size: cover;
    }

    .whatsapp {
        width: 7rem;
        height: 7rem;
        color: #25D366;
        position: fixed;
        bottom: 2rem;
        right: 2rem;

        @media (max-width: 590px) {
            width: 5.5rem;
            height: 5.5rem;
        }
        
        cursor: pointer;
        transition: all 400ms;
    }

    .whatsapp:hover {
        filter: drop-shadow(2px 2px 5px #FFC012);
    }
`;