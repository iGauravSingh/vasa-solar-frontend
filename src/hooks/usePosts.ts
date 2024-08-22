import axios from "axios";
import Cookie from "universal-cookie";
import { useDispatch } from "react-redux";
import { setposts, clearposts, deletePosts } from "../features/postsSlice"

const cookie = new Cookie();

const urllocal = "http://localhost:8080"

const usePosts = () => {
    const sessionToken = cookie.get("session_token");
    const dispatch = useDispatch()
// 
    const fetchPostsList = async () => {
        try {
            const response = await axios.get(`${urllocal}/posts`)
            const postsData = response.data;
            if(!postsData){
                return dispatch(clearposts())
            }

            // console.log(postaData)
            dispatch(setposts(postsData))
        } catch (error) {
            return dispatch(clearposts())
        }
    }

// 
    const createPosts = async (data:any) => {
        try {
            const response = await axios.post(`${urllocal}/posts`, data,{
                headers: {
                  ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                },
              });
    
    console.log(response.data)
    return response.data;
        } catch (error) {
            alert("Error in creating new Project")
            return dispatch(clearposts())

        }
    }

// 

    const deletePostswithId = async (id:number) => {
        try {
            const response = await axios.delete(`${urllocal}/posts/${id}`,{
                headers: {
                  ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                },
              });
      const postsData = response.data;

      if(postsData.success) {
        dispatch(deletePosts(id))
      }
        } catch (error) {
            return dispatch(clearposts())
        }
    }

    return { fetchPostsList, createPosts, deletePostswithId }
}

export default usePosts