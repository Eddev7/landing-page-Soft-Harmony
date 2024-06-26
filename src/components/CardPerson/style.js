import styled from "styled-components";

export const FramePerson = styled.div`
    max-width: 58.3rem;
    min-width: 58.3rem;
    height: 31.9rem;

    @media (max-width: 590px) {
        max-width: 36.43rem;
        min-width: 36.43rem;
        height: 19.93rem;
    }

    border: 1px solid #D2B565;
    border-radius: 13px;
    display: flex;
    justify-content: space-between;
`;

export const Picture = styled.div`
    background-image: url(${props => props.picture});
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    border-radius: 13px 0 0 13px;
`;

export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;

    h2 {
        font-size: 2.7rem;
    }

    h3 {
        font-size: 1.8rem;
        font-weight: 400;
        text-align: center;
        max-width: 16.06rem;
        color: #828282;
    }

    @media (max-width: 590px) {
        h2 {
            font-size: 1.8rem;
        }

        h3 {
            font-size: 1.4rem;
        }
    }
`;