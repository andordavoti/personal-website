import styled from 'styled-components';
import { Container } from '../../components/utils/Container';
import { Media } from '../../components/utils/Breakpoints';

export const ProjectWrapper = styled(Container)`
    padding: 3rem;
    margin-top: 4rem;
    @media ${Media.sm} {
        padding: 0 8rem;
    }
`;
export const ProjectTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    color: var(--text-normal-1, #252525);
    text-align: center;
    margin: 0 auto;
    margin-bottom: 4rem;
    width: 100%;
    position: relative;
    span {
        width: 270px;
    }
    @media ${Media.sm} {
        span {
            width: 450px;
        }
    }

    font-weight: 600;
`;

export const ProjectImg = styled.div`
    margin: auto;
    text-align: center;
`;

export const Title = styled.p`
    font-size: 1.4rem;
    color: var(--text-normal-1, #252525);
    text-align: left;
    margin: 0.9rem 0;
    font-weight: 600;
    @media ${Media.sm} {
        margin: 0.5rem auto;
        width: 90%;
    }
`;

export const Item = styled.div`
    grid-column-start: span 4;
    text-align: center;
    margin: 10px 0;
`;
export const Section = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 10px;
    margin-bottom: 4rem;
`;
export const Img = styled.img`
    border-radius: 8px;
    margin: auto;
    text-align: center;
    width: 80%;
    ${({ theme }) =>
        theme.mode === 'light' ? 'box-shadow: var(--shadow)' : null}
`;
export const Description = styled.p`
    line-height: 1.25;
    margin: 0 auto;
    width: 100%;
    text-align: left;
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--text-normal, #121212);
    @media ${Media.sm} {
        width: 90%;
    }
`;
export const GoBack = styled.a`
    position: absolute;
    font-size: 2rem;
    left: 0;
    @media ${Media.md} {
        left: 10px;
    }
    span {
        font-size: 1.5rem;
    }
    &:hover {
        cursor: pointer;
        color: var(--green-light);
    }
`;
