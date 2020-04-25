import styled from 'styled-components'
import { Media } from '../utils/Breakpoints'
const { sm, md } = Media

const Card = styled.div`
    background-color: var(--card-bg, #fff);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    width: 100%;
    height: 150px;
    margin: 2rem 0;
    border-radius: 4px;
    box-shadow: var(--shadow);
    ${({ hover }) =>
        hover
            ? `
        cursor: pointer;
    `
            : null}
    @media ${sm} {
        box-shadow: none;
        height: 350px;
        &:hover {
            box-shadow: var(--shadow);
        }
    }
    @media ${md} {
        grid-template-columns: repeat(4, 1fr);
        height: 350px;
    }
`

export default Card