import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

import workExp from '../../../constants/workExp';
import styles from './styles';
import WorkExCard from './workExCard';

const WorkExperience = () => {
    const classes = styles();
    return (
        <Paper elevation={0} className={classes.paper}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h4'>
                        Work Experience
                    </Typography>
                </Grid>
                <Grid item>
                    {workExp.map((item, index) => {
                        return <WorkExCard data={item} key={index} />;
                    })}
                </Grid>
            </Grid>
        </Paper>
    );
}

export default WorkExperience;