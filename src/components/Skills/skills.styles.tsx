import styled from 'styled-components';
import { breakpoints } from '../../lib/breakpoints';

export const SkillsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    flex-direction: column;

    @media ${breakpoints.s} {
        margin: 40px;
    }
`;

export const SkillsListsWrapper = styled.div`
    flex-wrap: wrap;
`;

export const SkillsTitle = styled.h2`
    color: white;
`;

export const SkillsUnderTitle = styled.h4`
    margin-bottom: 0;
    color: white;
`;

export const SkillsList = styled.ul`
    color: white;
`;
