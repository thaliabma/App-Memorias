import React, {useState} from 'react'
import {Container} from './styles'
import FileBase from 'react-file-base64'
import { TextField, Button, Typography, Paper } from '@mui/material'
import { useDispatch } from 'react-redux'
import {createPost} from '../../actions/posts'
const Form = () => {
    const [postData, setPostData] = useState({creator: '', title:'', message:'', tags:'', selectedFile: ''})
    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(createPost(postData))
    }
    const clear = () => {

    } 
    return (
        <Container>
            <Paper className='paper'>
                <form autoComplete="off" noValidate className='form' onSubmit={handleSubmit}  >
                    <Typography variant="h6">Criando Memórias</Typography>
                    <TextField className='input' name='creator' variant="outlined"label='Criador'fullWidth value={postData.creator}onChange={(e)=> setPostData({...postData, creator : e.target.value })} />
                    <TextField className='input' name='title' variant="outlined"label='Título'fullWidth value={postData.title}onChange={(e)=> setPostData({...postData, title : e.target.value })} />
                    <TextField className='input' name='message' variant="outlined"label='Mensagem'fullWidth value={postData.message}onChange={(e)=> setPostData({...postData, message : e.target.value })} />
                    <TextField className='input' name='tags' variant="outlined"label='Tags'fullWidth value={postData.tags}onChange={(e)=> setPostData({...postData, tags : e.target.value })} />
                    <div className='fileInput'>
                        <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
                    </div>
                    <Button className='buttonSubmit' variant='container' color='primary' size='large' type='submit' fullWidth>Postar</Button>
                    <Button className='buttonClear' variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Limpar</Button>

                </form>
            </Paper>
        </Container>
    )
}

export default Form