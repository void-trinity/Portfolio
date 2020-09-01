import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import styles from './styles';

const EducationCard = (props) => {
    const classes = styles();
    return (
        <Grid item className={classes.grid}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='p' className={classes.degree}>
                        {props.data.degree}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='p' className={classes.school}>
                        {props.data.school}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='p' className={classes.marks}>
                        {`${props.data.score} | ${props.data.time}`}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default EducationCard;