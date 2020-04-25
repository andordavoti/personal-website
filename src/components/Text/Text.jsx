import styled from 'styled-components'

export const variant = variant => `var(--text-variant-${variant})`

export const Text = styled.span`
    font-family: ${props => (props.font ? props.font : 'Roboto')}, sans-serif;
    font-size: ${props => (props.size ? props.size : 'inherit')};
    color: ${props => (props.color ? props.color : 'inherit')};
    font-weight: ${props => (props.weight ? props.weight : null)};
    ${props => (props.hover ? props.hover : null)}
`