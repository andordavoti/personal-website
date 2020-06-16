import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    NavBar: {
        height: 80,
        backgroundColor: theme.palette.background.paper,
        padding: 0,
        paddingLeft: 30,
        paddingRight: 30,
    },
    Nav: {
        maxWidth: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
}));

const Navbar: React.FC = ({ children }) => {
    const styles = useStyles();
    return (
        <Container component="nav" className={styles.NavBar}>
            <Container component="ul" className={styles.Nav}>
                {children}
            </Container>
        </Container>
    );
};

export default Navbar;
