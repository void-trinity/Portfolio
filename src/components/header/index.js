import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { GitHub, LinkedIn, Facebook, Twitter, YouTube } from '@material-ui/icons';

import styles from './styles';
import intro from '../../constants/intro';

const getSocialButtons = (data) => {
    const classes = styles();
    const { name, link } = data;
    switch(name) {
        case 'github':
            return (
                <Grid item className={classes.icon}>
                    <a href={link} target="_blank" rel="noopener noreferrer" className={classes.a}>
                        <GitHub fontSize='large' />
                    </a>
                </Grid>
            );
        case 'linkedin':
            return (
                <Grid item className={classes.icon}>
                    <a href={link} target="_blank" rel="noopener noreferrer" className={classes.a}>
                        <LinkedIn fontSize='large' />
                    </a>
                </Grid>
            );
        case 'facebook':
            return (
                <Grid item className={classes.icon}>
                    <a href={link} target="_blank" rel="noopener noreferrer" className={classes.a}>
                        <Facebook fontSize='large' />
                    </a>
                </Grid>
            );
        case 'twitter':
            return (
                <Grid item className={classes.icon}>
                    <a href={link} target="_blank" rel="noopener noreferrer" className={classes.a}>
                        <Twitter fontSize='large' />
                    </a>
                </Grid>
            );
        case 'youtube':
            return (
                <Grid item className={classes.icon}>
                    <a href={link} target="_blank" rel="noopener noreferrer" className={classes.a}>
                        <YouTube fontSize='large' />
                    </a>
                </Grid>
            );
        default:
            return <></>;
    }
}

const Header = () => {
    const classes = styles();
    const { name, profile, links } = intro;
    return (
        <Grid container>
            <Grid item xs={12} >
                <Paper elevation={0} className={classes.paper}>
                    <Typography variant='h3' style={{ color: '#272A34', fontWeight: 'bold' }}>
                        {name}
                    </Typography>
                    <Typography variant='h5' style={{ color: '#7d7d7d' }}>
                        {profile}
                    </Typography>
                    <Grid style={{ marginTop: '20px' }} xs={12} sm={4} container justify='space-between' direction='row'>
                        
                        {links.map((item, index) => {
                            return getSocialButtons(item);
                        })}
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Header;