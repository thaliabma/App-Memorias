import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Container, Grow, Grid} from '@mui/material'

import Posts from './components/Posts'
import Form from './components/Form'

import {getPosts} from './actions/posts'

import memories from './images/flashcard.png'
import {Header, Heading,Image} from './styles'

const App = () => {
    // const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    },[dispatch])
    return(
        <Container>
            <Header 
            // className={classes.appBar} 
            position='static' color='inherit'>
                <Heading 
                // className={classes.heading}
                 variant='h2' align='center'>Memórias</Heading>
                <Image src={memories} 
                // className={classes.image}
                 alt='Memórias' height="60" />
            </Header>
            <Grow in >
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                        <Grid item xs={12} sm={7} md={6}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={7} md={6}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}


export default App; 