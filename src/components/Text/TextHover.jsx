import styled from 'styled-components';
import { IsStringColor } from '../../functions/utils';

export const TextHover = styled.span`
    font-family: ${props => (props.family ? props.family : 'Roboto')},
        sans-serif;
    font-size: ${props => (props.size ? props.size : 'inherit')};
    color: ${props =>
        props.default ? `var(--text-variant-${props.default})` : 'inherit'};
    &:hover {
        color: ${({ variant }) =>
            variant
                ? IsStringColor(variant)
                    ? variant
                    : `var(--text-variant-${variant})`
                : 'var(--text-normal-1, #252525)'};
        cursor: ${({ cursor }) => (cursor ? 'pointer' : null)};
    }
    transition: ${({ transition }) =>
        transition ? transition : 'color 0.3s ease'};
`;
