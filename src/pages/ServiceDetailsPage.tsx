import { useLocation } from 'react-router-dom';

const ServiceDetailsPage = () => {
  const location = useLocation();
  const { title, description, image, modalData } = location.state; // Get passed data

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6fbff]">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
        <img src={image} alt={title} className="w-full h-64 object-contain mb-4" />
        <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
        <p className="text-gray-700">{description}</p>
        {modalData}
      </div>
    </div>
  );
};

export default ServiceDetailsPage;