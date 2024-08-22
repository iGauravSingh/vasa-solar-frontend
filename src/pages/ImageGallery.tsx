import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Image {
  url: string;
  alt?: string;
}

interface ImageGalleryProps {
  images: Image[];
}

const images = [
  { url: "https://via.placeholder.com/300", alt: "Image 1" },
  { url: "https://via.placeholder.com/300", alt: "Image 2" },
  { url: "https://via.placeholder.com/300", alt: "Image 3" },
  { url: "https://via.placeholder.com/300", alt: "Image 4" },
  { url: "https://via.placeholder.com/300", alt: "Image 5" },
  { url: "https://via.placeholder.com/300", alt: "Image 6" },
  { url: "https://via.placeholder.com/300", alt: "Image 7" },
  { url: "https://via.placeholder.com/300", alt: "Image 8" },
  { url: "https://via.placeholder.com/300", alt: "Image 9" },
  { url: "https://via.placeholder.com/300", alt: "Image 10" },
  // Add more images as needed
];

const ImageGallery: React.FC<ImageGalleryProps> = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);
    const imagesPerPage = 8;
  
    // Calculate the indices for the images to display
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  
    // Handle pagination
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
    // Generate page numbers
    const pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(images.length / imagesPerPage); i++) {
      pageNumbers.push(i);
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
      <div className="container mx-auto mt-8 mb-8 px-4">
        <h2 className="text-center text-3xl font-semibold mb-8">Image Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentImages.map((image, index) => (
            <div key={index} className="relative cursor-pointer" onClick={() => openModal(image)}>
              <img
                src={image.url}
                alt={image.alt || 'Gallery Image'}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <nav>
            <ul className="flex list-none">
              {pageNumbers.map((number) => (
                <li key={number} className="mx-1">
                  <button
                    onClick={() => paginate(number)}
                    className={`px-4 py-2 border rounded-md ${
                      number === currentPage ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
                    }`}
                  >
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
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
                src={selectedImage.url}
                alt={selectedImage.alt || 'Gallery Image'}
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
