import React from 'react';
import { SkillsWrapper, SkillsTitle, SkillsList, SkillsUnderTitle, SkillsListsWrapper } from './skills.styles';

const Skills = () => {
    return (
        <SkillsWrapper>
            <SkillsTitle>Skills:</SkillsTitle>

            <SkillsListsWrapper>
                <SkillsUnderTitle>Development:</SkillsUnderTitle>
                <SkillsList>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/">
                            React
                        </a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="https://reactnative.dev/">
                            React Native
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        >
                            Javascript
                        </a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.typescriptlang.org/">
                            Typescript
                        </a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.w3.org/html/">
                            HTML
                        </a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="https://sass-lang.com/">
                            CSS &amp; SCSS
                        </a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.arduino.cc/">
                            Arduino
                        </a>
                    </li>
                </SkillsList>

                <SkillsUnderTitle>Design:</SkillsUnderTitle>
                <SkillsList>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.adobe.com/products/xd.html">
                            Adobe XD
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.adobe.com/products/photoshop.html"
                        >
                            Adobe Photoshop
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.autodesk.com/products/fusion-360/overview"
                        >
                            Fusion 360
                        </a>
                    </li>
                </SkillsList>
            </SkillsListsWrapper>
        </SkillsWrapper>
    );
};

export default Skills;
