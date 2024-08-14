import { useState } from "react";

const ImageUploadSection = () => {
  const [galleryImage, setGalleryImage] = useState(null);

  // Handlers for Gallery Image upload form
  const handleGalleryImageChange = (e: any) => {
    setGalleryImage(e.target.files[0]);
  };

  const handleGallerySubmit = (e: any) => {
    e.preventDefault();
    console.log("Gallery image uploaded:", galleryImage);
    // Implement the logic to handle gallery image upload
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
