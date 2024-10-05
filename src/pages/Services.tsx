import Footer from "../components/Footer"
import Header from "../components/Header"

const services = [
  {
    title: 'On-grid Solar Power Plant',
    description: 'Ideal for areas with reliable utility service, this system allows you to generate electricity and feed excess power back into the grid.',
    image: './ongrid.gif',
  },
  {
    title: 'Off-grid Solar Power Plant',
    description: 'Perfect for remote locations, our off-grid systems provide reliable energy independence without the need for a utility grid connection.',
    image: './offgrid.gif', 
  },
  {
    title: 'Hybrid Solar Power Plant',
    description: 'Combine the best of both worlds with a hybrid solar power plant that offers grid-tied reliability with the flexibility of backup power storage.',
    image: './hybrid.gif', 
  },
  {
    title: 'Pure Hybrid Solar Power Plant',
    description: 'Our pure hybrid systems ensure uninterrupted power supply by seamlessly switching between solar, battery, and grid power.',
    image: '/purehybrid.gif', 
  },
  {
    title: 'Solar Water Heaters',
    description: 'Efficient and eco-friendly solar water heaters to meet your hot water needs while reducing energy costs.',
    image: '/solargif.gif',
  },
  {
    title: 'Flexible Solar Panels',
    description: 'Our flexible solar panels are lightweight and versatile, ideal for a variety of applications, including mobile and portable setups.',
    image: 'flexsolar.jpg', 
  },
];


const Services = () => {
  return (
    <>
    <Header />


    <div className="bg-gray-100 py-12 px-6 font-Montserrat">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#1d3571] mb-8">
          Our Products & Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[20rem] object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#1d3571] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>


    <Footer />
    </>
  )
}

export default Services