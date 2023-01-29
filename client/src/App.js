import React, { useState ,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Container, Grow, Grid} from '@mui/material'

import Posts from './components/Posts'
import Form from './components/Form'

import {getPosts} from './actions/posts'

import memories from './images/flashcard.png'
import {Header, Heading,Image} from './styles'

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    },[dispatch])
    return(
        <Container>
            <Header 
            position='static' color='inherit'>
                <Heading 
                 variant='h2' align='center'>Memórias</Heading>
                <Image src={memories} 
                 alt='Memórias' height="60" />
            </Header>
            <Grow in >
                <Container>
                    <Grid container justify="space-between" alignItems="stretch"  spacing={6}>
                        <Grid item xs={12} sm={7} md={6} width="70%">
                            <Posts setCurrentId={currentId}/>
                        </Grid>
                        <Grid item xs={12} sm={7} md={5}>
                            <Form currentId={currentId} setCurrentId = {setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}


export default App; 