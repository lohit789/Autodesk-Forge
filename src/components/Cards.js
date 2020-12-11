// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <React.Fragment>
            <CssBaseline />
            <main style={{ marginTop: "14vh" }}>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            APIs & Services
              </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Access information on how to use Forge APIs and Services.
              </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Main call to action
                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                      </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                      </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                      </Button>
                                        <Button size="small" color="primary">
                                            Edit
                      </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
