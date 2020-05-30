import styled from 'styled-components';
import { breakpoints } from '../../lib/breakpoints';

export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px;

    @media ${breakpoints.s} {
        margin: 40px;
    }
`;

export const IntroTextWrapper = styled.div`
    width: 75%;
    margin: 10px;

    @media ${breakpoints.s} {
        width: 50%;
    }
`;

export const IntroTitle = styled.h2`
    color: white;
`;

export const IntroDesc = styled.p`
    color: white;
`;

export const ProfileImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid white;
`;
