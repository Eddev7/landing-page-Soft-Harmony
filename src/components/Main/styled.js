import styled from "styled-components";

export const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    .CardsPerson {
        margin-top: 3.06rem;
        display: flex;
        gap: 6.125rem;
        flex-basis: auto;
        flex-wrap: wrap-reverse;
        justify-content: center;
    }

    @media (max-width: 590px) {
        .CardsPerson {
            margin-top: 1.5rem;
            gap: 3rem;
        }
    }
`;