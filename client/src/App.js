import React from 'react';

import {Container, AppBar, Typography, Grow, Grid} from '@mui/material'

import Posts from './components/Posts'
import Form from './components/Form'


import memories from './images/memories.png'

const App = () => {
    return(
        <Container>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Memórias</Typography>
                <img src={memories} alt='Memórias' height="60" />
            </AppBar>
            <Grow in >
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}


export default App; 