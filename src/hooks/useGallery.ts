import axios from "axios"

const urllocal = "http://localhost:8080"


const useGallery = () => {


    const addGalleryImage = async (data: any) => {
        try {
            const response = await axios.post(`${urllocal}/gallery`,data)
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
            return galleryData
        } catch (error) {
            console.log(error)
            alert("Network error")
        }
    }

    // 

    return { addGalleryImage, getAllGalleryImages}
}

export default useGallery