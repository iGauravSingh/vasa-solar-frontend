import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

// id: string | number;
//     heading: string;
//     location: string;
//     completionDate: string;
//     description: string;
//     imageUrl: string;
//     createdAt: string

const ProjectDetails = () => {

    const locationn = useLocation()

    const { heading, location, imageUrl, completionDate, description } = locationn.state


    const projectUrl = window.location.href; // Get current page URL

  const handleFacebookShare = () => {
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(projectUrl)}`;
    window.open(fbShareUrl, '_blank', 'noopener,noreferrer');
  };

  const handleInstagramShare = () => {
    const instagramShareUrl = `https://www.instagram.com/?url=${encodeURIComponent(projectUrl)}`;
    window.open(instagramShareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Header />

      <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      {/* Image Section */}
      <div className="w-full h-64 overflow-hidden rounded-t-lg">
        <img
          src={imageUrl}
          alt={heading}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{heading}</h1>
        
        {/* Location and Date */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 text-sm">{location}</span>
          <span className="text-gray-600 text-sm">{new Date(completionDate).toLocaleDateString()}</span>
        </div>
        
        {/* Description */}
        <p className="text-gray-700 mb-4">{description}</p>
        
        {/* Share Buttons */}
        <div className="flex space-x-4 mt-4">
          {/* <button 
            onClick={handleFacebookShare} 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Share on Facebook
          </button> */}
          <div className=" cursor-pointer" onClick={handleFacebookShare} >
          <FaFacebook size={50} color="blue"/>
          </div>
          {/* <button 
            onClick={handleInstagramShare} 
            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-lg hover:opacity-80"
          >
            Share on Instagram
          </button> */}
          <div className=" cursor-pointer" onClick={handleInstagramShare}>
          <FaInstagramSquare size={50} color="red" />
          </div>
        </div>
      </div>
    </div>

      <Footer />
    </>
  );
};

export default ProjectDetails;
