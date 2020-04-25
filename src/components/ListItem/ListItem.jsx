import React from 'react';
import styled from 'styled-components';
import { IsStringColor } from '../../functions/utils';

const ListItemWrapper = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    font-size: 20px;
    margin: 0px 16px 0px 0px;
    margin-bottom: 8px;
    padding: 12px 8px;
    height: inherit;
    color: ${({ color }) => (color ? color : 'var(--text-on-secondary);')}
    ${props =>
        props.borderRadius
            ? `
        border-radius: ${props.borderRadius}
    `
            : `
        border-radius: 0 50px 50px 0 !important;
        box-orient: horizontal;
    `}
    background-color: ${({ background }) =>
        background
            ? IsStringColor(background)
                ? background
                : `var(--text-variant-${background})`
            : null}; }
    transition: background-color 0.2s linear;
    &.active{
        background-color: var(--list-item-active) !important;
    }
    &:hover {
        cursor: pointer;
        background-color: ${({ hover }) =>
            hover
                ? IsStringColor(hover)
                    ? hover
                    : `var(--list-item-hover-${hover}, rgba(0,0,0,0.08))`
                : null};
    }
    &.iconHolder {
        justify-content: space-between;
    }
`;

export const ListItem = ({ children, ...props }) => {
    return <ListItemWrapper {...props}>{children} </ListItemWrapper>;
};
