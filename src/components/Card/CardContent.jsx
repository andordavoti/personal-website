import React from 'react';
import styled from 'styled-components'

import Card from './Card'
import { CardTitle } from './CardTitle'

import { Media } from '../utils/Breakpoints'
import { Text } from '../Text/Text'

const { sm, md } = Media

const CardContentWrapper = styled.div`
    grid-column-start: span 2 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: color 0.15s ease;
    color: var(--text-normal-1, #252525);
    padding: 16px 0px 16px 16px;
    @media ${sm} {
        padding: 32px 16px;
        justify-content: flex-start;
    }
    @media ${md} {
        grid-column-start: span 1 
    }
    ${({ hover }) =>
        hover
            ? `
        ${Card}:hover & {color: var(--card-hover)}`
            : null}
    font-weight: 500;
`

const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    font-weight: 300;
    font-size: 1rem;
`

const CardContent = ({
    children,
    title,
    subtitle,
    hover,
    details,
    date: { seconds } = {},
}) => {
    return <CardContentWrapper hover={hover}>
        {title && <CardTitle>{title}</CardTitle>}
        {children && children}
        <CardDetails>
            {subtitle && <Text weight="500" size="1rem">
                {subtitle}
            </Text>}
            {details && details.map(detail => <Text size="1rem">{detail}</Text>)}
            {seconds && <Text size="0.7rem">
                {new Date(seconds * 1000).toDateString()}
            </Text>}
        </CardDetails>
    </CardContentWrapper>
}

export default CardContent