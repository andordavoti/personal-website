import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import { skills } from '../lib/data';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: 40,
        flexDirection: 'column',
    },
    listsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    list: {
        margin: 10,
        color: theme.palette.primary.main,
    },
    listItem: {
        marginTop: 10,
    },
    listItemLink: {
        marginLeft: 5,
    },
}));

const Skills = () => {
    const styles = useStyles();

    return (
        <Box className={styles.container}>
            <Typography color="textPrimary" align="center" variant="h3">
                Skills:
            </Typography>

            <Box m="1rem" />

            <Box className={styles.listsContainer}>
                <Box className={styles.list}>
                    <Typography color="textPrimary" variant="h5">
                        Development:
                    </Typography>
                    {skills.development.map((skill) => (
                        <Box className={styles.listItem}>
                            <SubdirectoryArrowRightIcon color="secondary" />
                            <Link
                                className={styles.listItemLink}
                                color="textSecondary"
                                rel="noopener noreferrer"
                                target="_blank"
                                href={skill.link}
                            >
                                {skill.name}
                            </Link>
                        </Box>
                    ))}
                </Box>

                <Box className={styles.list}>
                    <Typography color="textPrimary" variant="h5">
                        Design tools:
                    </Typography>
                    {skills.design.map((skill) => (
                        <Box className={styles.listItem}>
                            <SubdirectoryArrowRightIcon color="secondary" />
                            <Link
                                className={styles.listItemLink}
                                color="textSecondary"
                                rel="noopener noreferrer"
                                target="_blank"
                                href={skill.link}
                            >
                                {skill.name}
                            </Link>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Skills;
