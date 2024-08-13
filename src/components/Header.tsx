import { Link } from "react-router-dom"
import { IoMdMenu } from "react-icons/io";


const Header = () => {
  return (
    <div className=' w-screen flex items-center justify-between bg-[#4698d2] px-8 font-Montserrat'>

        {/* logo  */}
        <img className=" w-[200px] h-[105px]" src="./vasalogo2.png" alt="vasa logo" />

        {/* menu  */}

        <div className=" hidden lg:block">
        <ul className=' flex items-center gap-6 text-slate-50 text-[14px] leading-3'>
            <li className=" cursor-pointer"><Link to='/'>Home</Link></li>
            <li className=" cursor-pointer"><Link to='/aboutus'>About Us</Link></li>
            <li className=" cursor-pointer"><Link to='/services'>Services</Link></li>
            <li className=" cursor-pointer"><Link to='/projects'>Projects</Link></li>
            <li className=" cursor-pointer"><Link to='/contact'>Contact Us</Link></li>

        </ul>
        </div>

        {/* button white  */}
        <button className=' hidden lg:block w-[150px] h-[45px] rounded-2xl text-blue-950 font-semibold text-lg bg-slate-50 px-2 py-1'>Qoute</button>
    </div>
  )
}

export default Header