import { useState } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"
import axios from "axios";


const Contact = () => {

  const urllocal = "https://api.vasaenterprises.in";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${urllocal}/email/send-email`, formData);
      console.log(response)
      setStatus('Message sent successfully!');
    } catch (error) {
      setStatus('Failed to send the message.');
    }
  };


  return (
    <>
    <Header />


    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#1d3571] mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-red-500">{status}</p>}
        </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <p className="text-gray-700 mb-4">
              Feel free to reach out to us through the following channels, or fill out the form to send us a direct message.
            </p>
            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-800">Address</h4>
              <p className="text-gray-600">88/16 Post Office building, near</p>
              <p className="text-gray-600">Lalkuan crossing Lucknow 226001</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-800">Phone</h4>
              <p className="text-gray-600">+91 9455004100</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-800">Email</h4>
              <p className="text-gray-600">info@solarcompany.com</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-800">Working Hours</h4>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Sat: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </>
  )
}

export default Contact