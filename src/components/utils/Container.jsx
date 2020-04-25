import styled from 'styled-components';
import { Media } from './Breakpoints';

const { sm, md, lg } = Media;

export const Container = styled.div`
    padding-right: 2rem;
    padding-left: 2rem;
    margin-right: auto;
    margin-left: auto;
    @media ${sm} {
        width: 750px;
    }
    @media ${md} {
        width: 970px;
    }
    @media ${lg} {
        width: 1170px;
    }
`;
