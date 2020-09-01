import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

import styles from './styles';
import EducationCard from './educationCard';
import education from '../../../constants/education';

const Education = () => {
    const classes = styles();
    return (
        <Paper elevation={0} className={classes.paper}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h4'>
                        Education
                    </Typography>
                </Grid>
                <Grid item>
                    {education.map((item, index) => {
                        return (
                            <EducationCard data={item} />
                        );
                    })}
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Education;