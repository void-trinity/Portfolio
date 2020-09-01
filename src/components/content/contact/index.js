import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import Mail from '@material-ui/icons/Mail';
import Call from '@material-ui/icons/Call';

import styles from './styles';
import contact from '../../../constants/contact';

const Contact = () => {
    const classes = styles();
    return (
        <Paper elevation={0} className={classes.paper}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h4'>
                        Contact
                    </Typography>
                </Grid>
                <Grid item className={classes.grid}>
                    <a href={`mailto:${contact.email}`} className={classes.a}>
                        <Grid container alignItems='center'>
                            <Mail style={{ marginRight: 20 }}/>
                            <Typography variant='p'>
                                {contact.email}
                            </Typography>
                        </Grid>
                    </a>
                </Grid>
                <Grid item className={classes.grid}>
                    <Grid container alignItems='center'>
                        <Call style={{ marginRight: 20 }}/>
                        <Typography variant='p'>
                            {contact.mobile}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Contact;