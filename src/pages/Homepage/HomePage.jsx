import React from 'react';
import { Spacer } from '../../components/utils/Spacer';
import Description from '../../components/Description/Description';
import Portfolio from '../../components/Portfolio/Portfolio';

const HomePage = () => (
    <>
        <Description />
        <Spacer height="30px" />
        <Portfolio />
    </>
)

export default HomePage