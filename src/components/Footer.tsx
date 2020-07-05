import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        height: 60,
        padding: 0,
        margin: 0,
        width: '100%',
        minWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
        flexShrink: 0,
    },
    footerText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
}));

const Footer: React.FC = () => {
    const styles = useStyles();
    return (
        <Container component="footer" className={styles.footer}>
            <Typography className={styles.footerText} color="primary" variant="body1">
                © 2020 Andor Davoti
            </Typography>
        </Container>
    );
};

export default Footer;
