import styled from 'styled-components';
import { breakpoints } from '../../lib/breakpoints';

export const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 10px;
    flex-direction: column;

    @media ${breakpoints.s} {
        margin: 40px;
    }
`;

export const ProjectsTitle = styled.h2`
    text-align: center;
    color: white;
`;
