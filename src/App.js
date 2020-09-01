import React from 'react';
import Container from './components';
import { Grid } from '@material-ui/core';

const App = () => {
    return (
        <Grid container alignContent='center' justify='space-around' alignItems='center'>
            <Container />
        </Grid>
    )
}

export default App;
