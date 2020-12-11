// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));
// eslint-disable-next-line
export default function () {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            {/* Footer */}
            <Container className={classes.cardGrid} maxWidth="xs">
                {/* End hero unit */}
                <Grid container spacing={12}>
                    <footer className={classes.footer}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Footer
        </Typography>
                        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            Something here to give the footer a purpose!
        </Typography>
                        <Copyright />
                    </footer>
                </Grid>
            </Container>
            {/* End footer */}
        </React.Fragment>
    );
}
