import React from 'react'
import Post from './Post'
import {Grid, CircularProgress} from '@mui/material'
import {Container} from './styles'
import { useSelector } from 'react-redux'

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts)
    
    return (
        !posts.length? <CircularProgress/> : (
            <Container container alignItems="stretch" spacing={3}>
                {posts.map((post) =>(
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid> 
                ))}
            </Container>

        )
        
    )
}

export default Posts