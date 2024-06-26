import styled from "styled-components";

export const Header = styled.header`
    width: 100vw;
    height: 16.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 506px) {
        height: 8rem;
    }
`; 

export const ImageLogo = styled.img`
    height: 75%;
`;