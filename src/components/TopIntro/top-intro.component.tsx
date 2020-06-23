import React from 'react';
import { IntroWrapper, IntroTextWrapper, ProfileImg } from './top-intro.styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const TopIntro: React.FC = () => {
    return (
        <IntroWrapper>
            <IntroTextWrapper>
                <Box m="2rem" />

                <Typography color="textPrimary" variant="h5">
                    I am a software developer from Oslo, Norway.
                </Typography>

                <Box m="2rem" />

                <Typography color="textPrimary" variant="subtitle1">
                    With a passion for DIY I've build a lot of software and hardware projects over the years, which you
                    can check out bellow.
                </Typography>
            </IntroTextWrapper>
            <ProfileImg className="profile-img" src={require('../../assets/img/profile_img.jpg')} alt="profile" />
        </IntroWrapper>
    );
};

export default TopIntro;
