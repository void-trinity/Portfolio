import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';

import styles from './styles';
import aboutMe from '../../../constants/aboutMe';

const About = () => {
    const classes = styles();
    return (
        <Paper elevation={0} className={classes.paper}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h4'>
                        About Me
                    </Typography>
                </Grid>
                <Grid item className={classes.grid}>
                    <Typography variant='p'>
                        {aboutMe}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default About;