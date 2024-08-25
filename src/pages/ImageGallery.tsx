import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useGallery from "../hooks/useGallery";

interface Image {
  imageUrl: string;
  imageName: string;
}



const ImageGallery = () => {

  const { getAllGalleryImages } = useGallery()
  const [imgesp, setimagep] = useState<Image[] | null>(null)
  
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  

  useEffect(() => {
    const getGallery = async () => {
      try {
        const respo = await getAllGalleryImages()
        console.log(respo)
        setimagep(respo)
      } catch (error) {
        alert("network error in fetching images")
      }
    }

    getGallery()
  },[])

  

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
      <div className="container mx-auto mt-8 mb-8 px-4">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Image Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imgesp?.map((image, index) => (
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
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
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
