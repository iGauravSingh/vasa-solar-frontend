import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"


const Error404 = () => {
  return (
    <>
    <Header />

    <div className="bg-gray-100 h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mt-4">Page Not Found</h2>
        <p className="text-gray-700 mt-2">
          Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
        </p>
        <p className="text-gray-700 mt-1">
          But don’t worry, we’ll help you get back on track.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Go to Homepage
          </Link>
        </div>
        {/* <div className="mt-8">
          <img
            src="https://via.placeholder.com/400" // Replace with an actual image URL representing your company
            alt="Solar Panels"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div> */}
      </div>
    </div>

    <Footer />
    </>
  )
}

export default Error404