import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-screen min-h-[250px] py-2 bg-[#4698d2] text-slate-100 font-Montserrat">
        <div className=" px-8 w-full h-full flex justify-between items-center">

            {/* quicklinks  */}
        <div className=" flex flex-col ">
            <p className=" text-lg font-semibold">Quicklinks</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
            <div className=" md:hidden mt-4 ">
            <p className=" text-lg font-semibold">Social Media</p>
            <div className="flex gap-4 mt-2">
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaXTwitter size={30} />
            </div>
        </div>

        <div className=" md:hidden mt-4">
            <p className=" text-lg font-semibold">Address</p>
           <div>
           <p>address line 1/.....</p>
            <p>address line 2/.....</p>
            <p>Phone number .....</p>
           </div>
        </div>
        </div>

        {/* social media  */}
        <div className="hidden md:block ">
            <p className=" text-lg font-semibold">Social Media</p>
            <div className="flex gap-4 mt-6">
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaXTwitter size={30} />
            </div>
        </div>
        

        {/* contact  */}
        <div className=" hidden md:block pr-6">
            <p className=" text-lg font-semibold">Address</p>
           <div>
           <p>address line 1/.....</p>
            <p>address line 2/.....</p>
            <p>Phone number .....</p>
           </div>
        </div>

        </div>
    </div>
  )
}

export default Footer