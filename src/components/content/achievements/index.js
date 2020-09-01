import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

import styles from './styles';
import AchievementCard from './achievementCard';
import achievements from '../../../constants/achievements';

const Achievements = () => {
    const classes = styles();
    return (
        <Paper elevation={0} className={classes.paper}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h4'>
                        Achievements
                    </Typography>
                </Grid>
                <Grid item>
                    {achievements.map((item, index) => {
                        return (
                            <AchievementCard data={item} />
                        );
                    })}
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Achievements;