import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import styles from './styles';

const ProjectCard = (props) => {
    const classes = styles();
    return (
        <Grid item className={classes.grid}>
            <a href={props.data.link}>
                <Typography variant='p' className={classes.jd}>
                    {props.data.title}
                </Typography>
            </a>
            <Grid direction='column'>
                <Grid item className={classes.desc}>
                    <Typography variant='p' className={classes.companyDate}>
                        {`${props.data.description}`}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ProjectCard;