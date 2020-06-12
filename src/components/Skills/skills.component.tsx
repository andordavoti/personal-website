import React from 'react';
import { SkillsWrapper, SkillsList, SkillsListsWrapper, SkillsListWrapper, SkillListItem } from './skills.styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const Skills = () => {
    return (
        <SkillsWrapper>
            <Typography color="textPrimary" align="center" variant="h3">
                Skills:
            </Typography>

            <Box m="1rem" />

            <SkillsListsWrapper>
                <SkillsListWrapper>
                    <Typography color="textPrimary" align="center" variant="h5">
                        Development:
                    </Typography>
                    <SkillsList>
                        <SkillListItem>
                            <Link
                                color="textSecondary"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://reactjs.org/"
                            >
                                React
                            </Link>
                        </SkillListItem>
                        <SkillListItem>
                            <Link
                                color="textSecondary"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://reactnative.dev/"
                            >
                                React Native
                            </Link>
                        </SkillListItem>
                        <SkillListItem>
                            <Link
                                color="textSecondary"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            >
                                Javascript
                            </Link>
                        </SkillListItem>
                        <SkillListItem>
                            <Link
                                color="textSecondary"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.typescriptlang.org/"
                            >
                                Typescript
                            </Link>
                        </SkillListItem>
                        <SkillListItem>
                            <Link
                                color="textSecondary"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.w3.org/html/"
                            >
                                HTML
                            </Link>
                        </SkillListItem>
                        <SkillListItem>
                            <Link
                                color="textSecondary"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://sass-lang.com/"
                            >
                                CSS &amp; SCSS
                            </Link>
                        </SkillListItem>
                        <SkillListItem>
                            <Link
                                color="textSecondary"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.arduino.cc/"
                            >
                                Arduino
                            </Link>
                        </SkillListItem>
                    </SkillsList>
                </SkillsListWrapper>

                <SkillsListWrapper>
                    <Typography color="textPrimary" align="center" variant="h5">
                        Design tools:
                    </Typography>
                    <SkillsList>
                        <SkillListItem>
                            <Link
                                color="textSecondary"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.adobe.com/products/xd.html"
                            >
                                Adobe XD
                            </Link>
                        </SkillListItem>
                        <SkillListItem>
                            <Link
                                color="textSecondary"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.adobe.com/products/photoshop.html"
                            >
                                Adobe Photoshop
                            </Link>
                        </SkillListItem>
                        <SkillListItem>
                            <Link
                                color="textSecondary"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.autodesk.com/products/fusion-360/overview"
                            >
                                Fusion 360
                            </Link>
                        </SkillListItem>
                    </SkillsList>
                </SkillsListWrapper>
            </SkillsListsWrapper>
        </SkillsWrapper>
    );
};

export default Skills;
