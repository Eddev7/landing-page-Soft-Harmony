import styled from "styled-components";

export const Button = styled.button`
    .play {
        position: absolute;
        width: 7rem;
        height: 7rem;
        visibility: ${props => props.visibility ? 'visible' : 'hidden'};
        color: white;
        filter: drop-shadow(2px 2px 5px #D2B565);

        @media (max-width: 590px) {
            width: 5rem;
            height: 5rem;
        }
    }

    .video {
        border-radius: 1rem;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`;