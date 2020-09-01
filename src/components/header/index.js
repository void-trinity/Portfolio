import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { GitHub, LinkedIn, Facebook, Twitter, YouTube } from '@material-ui/icons';

import styles from './styles';

const Header = () => {
    const classes = styles();
    return (
        <Grid container>
            <Grid item xs={12} >
                <Paper elevation={0} className={classes.paper}>
                    <Typography variant='h3' style={{ color: '#272A34', fontWeight: 'bold' }}>
                        Siddharth Chandra
                    </Typography>
                    <Typography variant='h5' style={{ color: '#7d7d7d' }}>
                        Full Stack Developer
                    </Typography>
                    <Grid style={{ marginTop: '20px' }} xs={12} sm={4} container justify='space-between' direction='row'>
                        <Grid item className={classes.icon}>
                            <a href="https://github.com/void-trinity" target="_blank" rel="noopener noreferrer" className={classes.a}>
                                <GitHub fontSize='large' />
                            </a>
                        </Grid>
                        <Grid item className={classes.icon}>
                            <a href="https://www.linkedin.com/in/siddharth-chandra/" rel="noopener noreferrer" target="_blank" className={classes.a}>
                                <LinkedIn fontSize='large' />
                            </a>
                        </Grid>
                        <Grid item className={classes.icon}>
                            <a href="https://www.facebook.com/iamsiddharthchandra" target="_blank" rel="noopener noreferrer" className={classes.a}>
                                <Facebook fontSize='large' />
                            </a>
                        </Grid>
                        <Grid item className={classes.icon}>
                            <a href="https://twitter.com/tonne_machine" target="_blank" rel="noopener noreferrer" className={classes.a}>
                                <Twitter fontSize='large' />
                            </a>
                        </Grid>
                        <Grid item className={classes.icon}>
                            <a href="https://www.youtube.com/channel/UCng2Y_G4cznPQTFgITQiHZg" target="_blank" rel="noopener noreferrer" className={classes.a}>
                                <YouTube fontSize='large' />
                            </a>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Header;