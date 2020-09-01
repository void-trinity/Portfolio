import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

import styles from './styles';
import projects from '../../../constants/projects';
import ProjectCard from './projectCard';

const Projects = () => {
    const classes = styles();
    return (
        <Paper elevation={0} className={classes.paper}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h4'>
                        Projects
                    </Typography>
                </Grid>
                <Grid item>
                    {projects.map((item, index) => {
                        return <ProjectCard data={item} key={index} />
                    })}
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Projects;