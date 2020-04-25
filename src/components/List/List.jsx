import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    padding-top: 8px;
    padding-bottom: 8px;
`;

export const List = ({ children, ...props }) => {
    return <ListWrapper {...props}>{children}</ListWrapper>;
};
