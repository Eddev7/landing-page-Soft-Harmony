import styled from "styled-components";

export const Result = styled.div`
    margin-top: 10.6rem;
    width: 122.7rem;

    display: flex;
    flex-direction: column;
    align-items: ${props => (props.width < 1200 ? 'center' : 'start')};

    h2 {
        font-size: 4rem;
        margin-bottom: 0.8rem;
    }

    h3 {
        font-size: 2.4rem;
        font-weight: 300;
        color: #828282;
    }

    @media (max-width: 600px) {
        h2 {
            font-size: 3rem;
        }

        h3 {
            font-size: 1.9rem;
        }
        margin-top: 6rem;
        margin-bottom: 2rem;
        width: 100%;
    }
`;

export const Cards = styled.div`
    margin-top: 3.2rem;
    display: flex;
    gap: 8.2rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
        gap: 1.8rem;
    }

    button {
        background: none;
        border: none;
        font-size: 4rem;
        cursor: pointer;
    }
`;