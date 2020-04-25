import styled from 'styled-components';
import { Container } from '../utils/Container';

export const DescriptionWrapper = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    color: #121212;
`;

export const Title = styled.h3`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2rem;
    color: var(--text-variant-2);
    margin-bottom: 0.2rem;
    span {
        color: var(--text-variant-3);
    }
`;

export const DescTextContainer = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--text-normal, #121212);
    width: 20rem;
    a {
        text-decoration: none;
        text-decoration: underline;
        color: inherit;
    }
`;
