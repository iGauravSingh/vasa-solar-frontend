import axios from "axios"
import { useDispatch } from "react-redux"
import Cookie from "universal-cookie"
import { setgallery, cleargallery, deletegallery } from '../features/gallerySlice'

const cookie = new Cookie();

const urllocal = "http://localhost:8080"




const useGallery = () => {

    const sessionToken = cookie.get("session_token");
const dispatch = useDispatch()

    const addGalleryImage = async (data: any) => {
        try {
            const response = await axios.post(`${urllocal}/gallery`,data, {
                headers: {
                  ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                },
              })
            const galleryData = response.data
            // console.log(galleryData)
            
            return galleryData
        } catch (error) {
            console.log(error)
            alert("Network error unable to upload image")

        }
    }

    // 

    const getAllGalleryImages = async () => {
        try {
            const response = await axios.get(`${urllocal}/gallery`)
            const galleryData = response.data
            // console.log(galleryData)
            // return galleryData
            dispatch(setgallery(galleryData))
        } catch (error) {
            
            alert("Network error")
            return dispatch(cleargallery())
        }
    }

    // 

    //
    const deleteGallerywithId = async (id:number) => {
        try {
            const response = await axios.delete(`${urllocal}/gallery/${id}`,{
                headers: {
                  ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                },
              });
      const postsData = response.data;

      if(postsData.success) {
        dispatch(deletegallery(id))
      }
        } catch (error) {
            return dispatch(cleargallery())
        }
    }

    //

    return { addGalleryImage, getAllGalleryImages, deleteGallerywithId}
}

export default useGallery