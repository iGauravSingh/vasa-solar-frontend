import { Link } from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";


const Header2 = () => {

  const [mobileMenuOpen,setMobileMenuOpen] = useState(false)

  const onClickMobileMenuOpen = () => {
    setMobileMenuOpen(true)
  }

  const onClickMobileMenuClose = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
    <div className=' w-screen flex items-center justify-between  px-8 font-Montserrat absolute top-0 left-0 z-20'>

        {/* logo  */}
        <Link className="flex items-center" to='/'><img className=" w-[140px] h-[105px] mt-2" src="./newvasalogo.png" alt="vasa logo" /><h1 className=" text-xl md:text-xl lg:text-2xl  text-white">VASA ENTERPRISES</h1></Link>

        {/* menu  */}

        <div className=" hidden lg:block">
        <ul className=' flex items-center gap-6 text-slate-100 text-[14px] leading-3 font-sans tracking-wider'>
            <li className=" cursor-pointer"><Link to='/'>Home</Link></li>
            <li className=" cursor-pointer"><Link to='/aboutus'>About Us</Link></li>
            <li className=" cursor-pointer"><Link to='/services'>Services</Link></li>
            <li className=" cursor-pointer"><Link to='/projects'>Projects</Link></li>
            <li className=" cursor-pointer"><Link to='/gallery'>Gallery</Link></li>
            <li className=" cursor-pointer"><Link to='/contact'>Contact Us</Link></li>
            <li className=" cursor-pointer"><Link to='/signin'>Login</Link></li>

        </ul>
        </div>

        <div className=" lg:hidden text-slate-100 cursor-pointer" onClick={onClickMobileMenuOpen}>
          <IoMdMenu size={30} />
        </div>

        {/* button white  */}
        <button className=' hidden lg:block w-[150px] h-[45px] rounded-2xl text-blue-950 font-semibold text-lg bg-slate-50 px-2 py-1'>Qoute</button>
    </div>

    {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col justify-center items-center">
        <button
          onClick={onClickMobileMenuClose}
          aria-label="Close Menu"
          className="absolute top-6 right-6 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="text-center">
          <ul className="space-y-8">
            <li>
              <Link to="/" className="text-white text-2xl font-semibold hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="text-white text-2xl font-semibold hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white text-2xl font-semibold hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-white text-2xl font-semibold hover:text-gray-300">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white text-2xl font-semibold hover:text-gray-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      )}
    </>
  )
}

export default Header2