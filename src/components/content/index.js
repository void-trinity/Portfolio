import React from 'react';
import Grid from '@material-ui/core/Grid';

import About from './about';
import WorkExperience from './workexp';
import styles from './styles';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';
import Education from './education';
import Achievements from './achievements';

const Content = () => {
    const classes = styles();
    return (
        <div className={classes.div}>
            <Grid container justify='space-around'>
                <Grid item xs={12} sm={12} md={6}>
                    <About />
                    <WorkExperience />
                    <Projects />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Contact />
                    <Skills />
                    <Education />
                    <Achievements />
                </Grid>
            </Grid>
        </div>
    );
}

export default Content;