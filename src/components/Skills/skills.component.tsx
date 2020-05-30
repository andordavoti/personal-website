import React from 'react';
import {
    SkillsWrapper,
    SkillsTitle,
    SkillsList,
    SkillsUnderTitle,
    SkillsListsWrapper,
    SkillsListWrapper,
    SkillListItem,
} from './skills.styles';

const Skills = () => {
    return (
        <SkillsWrapper>
            <SkillsTitle>Skills:</SkillsTitle>

            <SkillsListsWrapper>
                <SkillsListWrapper>
                    <SkillsUnderTitle>Development:</SkillsUnderTitle>
                    <SkillsList>
                        <SkillListItem>
                            <a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/">
                                React
                            </a>
                        </SkillListItem>
                        <SkillListItem>
                            <a rel="noopener noreferrer" target="_blank" href="https://reactnative.dev/">
                                React Native
                            </a>
                        </SkillListItem>
                        <SkillListItem>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            >
                                Javascript
                            </a>
                        </SkillListItem>
                        <SkillListItem>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.typescriptlang.org/">
                                Typescript
                            </a>
                        </SkillListItem>
                        <SkillListItem>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.w3.org/html/">
                                HTML
                            </a>
                        </SkillListItem>
                        <SkillListItem>
                            <a rel="noopener noreferrer" target="_blank" href="https://sass-lang.com/">
                                CSS &amp; SCSS
                            </a>
                        </SkillListItem>
                        <SkillListItem>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.arduino.cc/">
                                Arduino
                            </a>
                        </SkillListItem>
                    </SkillsList>
                </SkillsListWrapper>

                <SkillsListWrapper>
                    <SkillsUnderTitle>Design:</SkillsUnderTitle>
                    <SkillsList>
                        <SkillListItem>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.adobe.com/products/xd.html">
                                Adobe XD
                            </a>
                        </SkillListItem>
                        <SkillListItem>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.adobe.com/products/photoshop.html"
                            >
                                Adobe Photoshop
                            </a>
                        </SkillListItem>
                        <SkillListItem>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.autodesk.com/products/fusion-360/overview"
                            >
                                Fusion 360
                            </a>
                        </SkillListItem>
                    </SkillsList>
                </SkillsListWrapper>
            </SkillsListsWrapper>
        </SkillsWrapper>
    );
};

export default Skills;
