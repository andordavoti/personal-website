import React from 'react';
import { IntroWrapper, IntroTextWrapper, ProfileImg, IntroTitle, IntroDesc } from './top-intro.styles';

const TopIntro: React.FC = () => {
    return (
        <IntroWrapper>
            <IntroTextWrapper>
                <IntroTitle>I am a software developer from Oslo, Norway.</IntroTitle>
                <IntroDesc>
                    With a passion for DIY I've build a lot of software and hardware projects over the years, which you
                    can check out bellow.
                </IntroDesc>
            </IntroTextWrapper>
            <ProfileImg className="profile-img" src={require('../../assets/img/profile_img.png')} alt="profile" />
        </IntroWrapper>
    );
};

export default TopIntro;
