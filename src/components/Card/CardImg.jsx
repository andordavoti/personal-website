import React from 'react';
import Card from './Card';
import { Media } from '../utils/Breakpoints';
import styled from 'styled-components';
const { sm, md } = Media;

const CardImgContainer = styled.div`
    grid-column-start: span 2 
    height: 100%;
    overflow: hidden;
    @media ${sm} {
        width: 100%;
    }

    @media ${md} {
        grid-column-start: span 3
    }

`;
const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 2px;
    transition: transform 0.3s ease;
    will-change: transform;
    ${Card}:hover & {
        transform: scale(1.1);
    }
`;

const CardImg = ({ src }) => {
    return (
        <CardImgContainer>
            <Img src={src} />
        </CardImgContainer>
    );
};

export default CardImg;
