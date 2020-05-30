import styled from 'styled-components';
import { breakpoints } from '../../lib/breakpoints';

export const SkillsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 10px;
    flex-direction: column;

    @media ${breakpoints.s} {
        margin: 40px;
    }
`;

export const SkillsListsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const SkillsListWrapper = styled.div`
    margin: 10px;
`;

export const SkillsTitle = styled.h2`
    text-align: center;
    color: white;
`;

export const SkillsUnderTitle = styled.h4`
    margin: 0;
    color: white;
`;

export const SkillsList = styled.ul`
    color: white;
`;

export const SkillListItem = styled.li`
    margin-bottom: 10px;
`;
