import * as api from '../api'

//Funções que retornam actionsm que são objetos que tem type e payload
export const getPosts =  () => async (dispatch) =>{
    try {
        const {data} = await api.fetchPosts()
        dispatch({type:'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
    

}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post)
        console.log('aqui')

        dispatch({type:'CREATE', payload: data})
    
    } catch (error) {

        console.log(error.message)
    }
}