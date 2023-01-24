import React from 'react'
import {useSelector} from 'react-redux'
import {Container} from './styles'

const Post = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
    return (
        <Container>
            <h1>Post</h1>
        </Container>
    )
}

export default Post