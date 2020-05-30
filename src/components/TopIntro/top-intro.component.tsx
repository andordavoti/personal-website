import React from 'react';
import './top-intro.styles.scss';

const TopIntro: React.FC = () => {
    return (
        <div className="top-intro">
            <div className="intro-text">
                <h2 className="header-text">
                    I am a software developer from Oslo, Norway.
                </h2>
                <p className="description">
                    With a passion for DIY I've build a lot of software and
                    hardware projects over the years, which you can check out
                    bellow.
                </p>
            </div>
            <img
                className="profile-img"
                src={require('../../assets/img/profile_img.png')}
                alt="profile"
            />
        </div>
    );
};

export default TopIntro;
