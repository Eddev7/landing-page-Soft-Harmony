import styled from "styled-components";
import image from '../../assets/images/iStock-9245286721.png';

export const FrameGold = styled.div`
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-radius: 1.4rem;
    border-color: #D2B565;
    width: 100vw;
`;

export const CardMain = styled.div`
    display: flex;
    width: 110.1rem;
    height: 38.3rem;
    margin: 0 auto;
    
    .cardTitles h1 {
        font-size: 6.4rem;
        text-align: center;
        white-space: nowrap;
    }

    .cardTitles h2 {
        font-size: 2.4rem;
        text-align: center;
        color: #828282;
        font-weight: 400;
        line-height: 150%;
        white-space: nowrap;
    }

    .cardTitles {
        position: relative;
        right: 3.56rem;
    }

    .cardTitles div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-shrink: 2;
        width: 100%;
        height: 100%;
    }

    button {
        width: auto;
        height: auto;
        border: none;
        border-radius: 0.8rem;
        background-color: #D2B565;
        color: white;
        font-size: 1.6rem;
        margin-top: 2rem;
        padding: 1.5rem 2.4rem;
        transition: all 400ms;
    }

    button:hover {
        background-color: #E8B52A;
        cursor: pointer;
    }
    
    @media (max-width: 1101px) {
        width: 100%;
        margin: 0 0;
        justify-content: space-evenly;
        .cardTitles h1 {
            font-size: 5.2rem;
        }
        .cardTitles h2 {
            font-size: 1.5rem;
        }
        button {
            font-size: 1.3rem;
            padding: 1.2rem 2rem;
        }
    }

    @media (max-width: 900px) {
        width: 100%;
        height: 26rem;
        .cardTitles h1 {
            font-size: 5.2rem;
        }
        .cardTitles h2 {
            font-size: 1.5rem;
        }
        button {
            font-size: 1.3rem;
            padding: 1.2rem 2rem;
        }
    }

    @media (max-width: 736px) {
        width: 100%;
        height: 26rem;
        .cardTitles h1 {
            font-size: 4.2rem;
        }
        .cardTitles h2 {
            font-size: 1.2rem;
        }
        button {
            font-size: 1rem;
            padding: 1.2rem 2rem;
        }
    }

    @media (max-width: 662px) {
        width: 100%;
        height: 20rem;
        .cardTitles h1 {
            font-size: 3.2rem;
        }
        .cardTitles h2 {
            font-size: 1rem;
        }
        button {
            margin-top: 1rem;
            font-size: 0.6;
            padding: 1.2rem 2rem;
        }
    }

    @media (max-width: 506px) {
        width: 100%;
        height: 17rem;
        
        
        .cardTitles h1 {
            font-size: 2.5rem;
        }
        .cardTitles h2 {
            font-size: 1rem;
        }
        button {
            margin-top: 0.5rem;
            font-size: 0.8rem;
            padding: 0.8rem 1rem;
            border-radius: 0.4rem;
        }
        .cardTitles {
            right: 2rem;
        }
    }
`;


export const ImageMain = styled.div`
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;

    @media (max-width: 590px) {
        background-position: center;
    }
`;