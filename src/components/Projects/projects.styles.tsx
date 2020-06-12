import styled from 'styled-components';
import { breakpoints } from '../../lib/breakpoints';

export const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 40px;
    flex-direction: column;

    @media ${breakpoints.s} {
        margin: 10px;
    }
`;
