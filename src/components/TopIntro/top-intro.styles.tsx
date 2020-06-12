import styled from 'styled-components';
import { breakpoints } from '../../lib/breakpoints';

export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 40px;

    @media ${breakpoints.s} {
        margin: 10px;
    }
`;

export const IntroTextWrapper = styled.div`
    width: 50%;
    margin: 10px;

    @media ${breakpoints.s} {
        width: 75%;
    }
`;

export const ProfileImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid white;

    @media ${breakpoints.s} {
        margin: 2rem;
    }
`;
