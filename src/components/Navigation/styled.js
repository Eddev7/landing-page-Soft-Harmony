import styled from "styled-components";
import logo from '../../assets/images/Logo.svg';

export const Header = styled.header`
    width: 100%;
    height: 164px;
    display: flex;
    justify-content: center;
    align-items: center;
`; 

export const ImageLogo = styled.div`
    background-image: url(${logo});
    width: 281px;
    height: 129px;
`;