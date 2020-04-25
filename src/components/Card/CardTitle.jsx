import styled from 'styled-components'
import { Media } from '../utils/Breakpoints'

export const CardTitle = styled.h2`
    font-size: 1.2em;
    @media ${Media.sm} {
        font-size: 1.5em;
    }
    font-weight: 500;
    margin: ${({ margin }) => (margin ? margin : 0)};
    color: inherit;
`