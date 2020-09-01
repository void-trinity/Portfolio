import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import styles from './styles';

const AchievementCard = (props) => {
    const classes = styles();
    return (
        <Grid item className={classes.grid}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='p' className={classes.award}>
                        {props.data.award}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='p' className={classes.description}>
                        {props.data.description}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default AchievementCard;