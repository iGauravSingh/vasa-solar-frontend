import Footer from "../components/Footer"
import Header from "../components/Header"


const Contact = () => {
  return (
    <>
    <Header />


    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={5}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <p className="text-gray-700 mb-4">
              Feel free to reach out to us through the following channels, or fill out the form to send us a direct message.
            </p>
            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-800">Address</h4>
              <p className="text-gray-600">123 Solar St, Green City, CA 90210</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-800">Phone</h4>
              <p className="text-gray-600">+1 (123) 456-7890</p>
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