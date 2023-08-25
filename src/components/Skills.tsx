import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import skills from '../lib/data/skills';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: 40,
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
        display: 'flex',
        alignItems: 'center',
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
                Skills
            </Typography>

            <Box m="1rem" />

            <Box className={styles.listsContainer}>
                <Box className={styles.list}>
                    <Typography color="textPrimary" variant="h5">
                        Development:
                    </Typography>
                    {skills.development.map((skill) => (
                        <Typography key={skill.name} className={styles.listItem}>
                            <img style={{ width: 20 }} src={skill.imgUrl} alt={skill.name} />
                            <Link
                                className={styles.listItemLink}
                                color="textSecondary"
                                rel="noopener noreferrer"
                                target="_blank"
                                href={skill.link}
                            >
                                {skill.name}
                            </Link>
                        </Typography>
                    ))}
                </Box>

                <Box
                    className={styles.list}
                    style={{ marginTop: useMediaQuery('only screen and (max-width: 420px)') ? '2rem' : 10 }}
                >
                    <Typography color="textPrimary" variant="h5">
                        Design tools:
                    </Typography>
                    {skills.design.map((skill) => (
                        <Typography key={skill.name} className={styles.listItem}>
                            <img style={{ width: 20 }} src={skill.imgUrl} alt={skill.name} />
                            <Link
                                className={styles.listItemLink}
                                color="textSecondary"
                                rel="noopener noreferrer"
                                target="_blank"
                                href={skill.link}
                            >
                                {skill.name}
                            </Link>
                        </Typography>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Skills;
