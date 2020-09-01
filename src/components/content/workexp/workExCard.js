import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import styles from './styles';

const WorkExCard = (props) => {
    const classes = styles();
    return (
        <Grid item className={classes.grid}>
            <Typography variant='p' className={classes.jd}>
                {props.data.title}
            </Typography>
            <Typography variant='p' className={classes.companyDate}>
                {` - ${props.data.company}`}
            </Typography>
            <Typography variant='p' className={classes.companyDate}>
                {` (${props.data.date})`}
            </Typography>
            <Grid direction='column'>
                {props.data.description.map((item, index) => {
                    return (
                        <Grid key={index} item className={classes.desc}>
                            <Typography variant='p'>
                                {item}
                            </Typography>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    );
}

export default WorkExCard;