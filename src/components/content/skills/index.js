import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

import styles from './styles';
import skills from '../../../constants/skills';

const Skills = () => {
    const classes = styles();
    return (
        <Paper elevation={0} className={classes.paper}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h4'>
                        Skills
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container direction='column'>
                        {skills.map((item, index) => {
                            return (
                                <Grid item className={classes.grid}>
                                    <Typography variant='p'>
                                        {item}
                                    </Typography>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Skills;