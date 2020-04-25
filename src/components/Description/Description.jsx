import React from 'react';
import { Link } from 'react-router-dom';

import { TextHover } from '../Text/TextHover';
import {
    Title,
    DescriptionWrapper,
    DescTextContainer,
} from './Description.styles';

const Description = () => {
    return (
        <DescriptionWrapper>
            {/* 
                <Title>
                Fullstack <span>Developer</span>
                </Title>
            */}
            <DescTextContainer>
                Hi, my name is Andor Davoti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea neque inventore distinctio, fugit quod reiciendis veritatis temporibus fuga ut debitis animi nisi voluptatum earum! Error quasi nam ab quas voluptatum.
            </DescTextContainer>
        </DescriptionWrapper>
    );
};

export default Description;
