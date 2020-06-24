import React from 'react';
import { Component } from 'react';
import { Container, Box, Typography, Button } from '@material-ui/core';

class ErrorBoundary extends Component {
    state = { hasError: false };

    componentDidCatch(error, info) {
        if (process.env.NODE_ENV === 'development') {
            // tslint:disable-next-line: no-console
            console.log(error);
            // tslint:disable-next-line: no-console
            console.log(info);
        }
    }

    static getDerivedStateFromError(error) {
        if (process.env.NODE_ENV === 'development') {
            // tslint:disable-next-line: no-console
            console.log(error);
        }

        return {
            hasError: true,
        };
    }

    render() {
        if (this.state.hasError) {
            return (
                <Box style={{ margin: '2rem' }}>
                    <Typography color="textPrimary" align="center" variant="h3">
                        Error 404
                    </Typography>

                    <Box m="2rem" />

                    <img
                        style={{
                            width: '75%',
                            maxWidth: 400,
                            borderRadius: 10,
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                        src="https://i.imgur.com/A040Lxr.png"
                        alt=""
                    />

                    <Box m="2rem" />

                    <Container maxWidth="md">
                        <Typography color="textPrimary" variant="h6" align="center">
                            Looks like you've lost your way.
                        </Typography>

                        <Box m="1rem" />

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button color="primary" variant="outlined" href="/">
                                Back home
                            </Button>
                        </div>
                    </Container>
                </Box>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;

/*

<ErrorImageOverlay>
                    <ErrorImageText>
                        You thought this mission to the moon would be a quick six month thing. Your neighbor offered to
                        look after your dog. Your high school math teacher was impressed. He once said you wouldn’t
                        amount to anything.You sure showed him. But now here you are, fifty feet from your spaceship
                        with no way to get back. Your dog will be so sad. Your math teacher will be so smug. Pretty
                        devastating.
                    </ErrorImageText>
                </ErrorImageOverlay>

*/
