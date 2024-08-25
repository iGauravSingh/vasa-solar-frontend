import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useGallery from "../hooks/useGallery";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

interface Image {
  imageUrl: string;
  imageName: string;
}



const ImageGallery = () => {

  const { getAllGalleryImages } = useGallery()
  
  
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  

  useEffect(() => {
    const getGallery = async () => {
      try {
        getAllGalleryImages()
      } catch (error) {
        alert("network error in fetching images")
      }
    }

    getGallery()
  },[])

  const gallery = useSelector((state:RootState) => state.gallery.value)


  if(gallery.isLoading){
    return (
      <div>
        <Header />
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          {/* Tailwind Loading Spinner */}
          <div className="w-12 h-12 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        <Footer />
      </div>
    )
  }

  

  // Handle image click
  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  // Handle modal close
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mt-8 mb-8 px-4 min-h-screen">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Image Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.gallery?.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={`${image?.imageUrl}`}
                alt={image?.imageName || "Gallery Image"}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>

        

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-lg">
              <button
                className="absolute text-2xl top-2 right-4 text-red-600 hover:text-gray-900"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.imageName || "Gallery Image"}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ImageGallery;
