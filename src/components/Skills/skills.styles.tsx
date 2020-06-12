import styled from 'styled-components';
import { breakpoints } from '../../lib/breakpoints';

export const SkillsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 40px;
    flex-direction: column;

    @media ${breakpoints.s} {
        margin: 10px;
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

export const SkillsList = styled.ul`
    color: white;
`;

export const SkillListItem = styled.li`
    margin-bottom: 10px;
`;
