import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import useGallery from "../../hooks/useGallery";

const ImageUploadSection = () => {

  const { addGalleryImage } = useGallery()

  const [galleryImage, setGalleryImage] = useState<File | null>(null);

  // Handlers for Gallery Image upload form
  const handleGalleryImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setGalleryImage(e.target.files[0]); 
    }
  };

  const handleGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Gallery image uploaded:", galleryImage);
    if(!galleryImage){
      alert("Please select Image to upload")
    } else {
        // console.log(galleryImage.name)
        const newName = galleryImage.name + uuidv4()
        // console.log(newName)
        const formData = new FormData()
        formData.append('file',galleryImage)
        formData.append('imagename',newName)
        // console.log(formData)
        const repp = await addGalleryImage(formData)
        setGalleryImage(null)
        if(repp?.message){
          alert("Image uploaded successfully")
        }
    }
  };

  return (
    <div className=" w-screen">
      <div className=" max-w-2xl ml-8">
        {/* Upload Images for Gallery Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Upload Images for Gallery
          </h2>
          <form onSubmit={handleGallerySubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="galleryImage"
              >
                Select Image
              </label>
              <input
                type="file"
                id="galleryImage"
                name="galleryImage"
                accept="image/*"
                onChange={handleGalleryImageChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Upload Image
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadSection;
