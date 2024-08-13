import { MdConnectWithoutContact } from "react-icons/md";

const Consultancy = () => {
  return (
    <div className=" w-screen h-[120px] bg-[#4698d2] flex justify-between items-center px-2 md:px-8 lg:px-16 ">
        <MdConnectWithoutContact color="#fcf05a" size={50} />
        <p className=" text-base md:text-xl lg:text-3xl text-[#f6fbff]">Get Free Consultancy About Your Project</p>
        <button className=' w-[150px] h-[45px] rounded-2xl text-blue-950 font-semibold text-lg bg-slate-50 px-2 py-1'>Qoute</button>
    </div>
  )
}

export default Consultancy