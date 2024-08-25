
import { PiSunHorizon } from "react-icons/pi";
import { FaWater } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";


const Advantage = () => {
  return (
    <>
    <div className=' w-screen bg-[#4698d2] px-4 flex  justify-center gap-11 text-[#f6fbff] font-Montserrat z-40 py-7 '>
        {/* text on right  */}
        <div>
            <h3 className=" text-4xl text-center">Discover The Advantages</h3>
            <p className=" mt-10 tracking-wide">We provide best services in market at most resonable rates</p>

            <div className=" mt-10">

                <div className=" flex items-center gap-4">
                    <PiSunHorizon color="#fcf05a" size={40} />
                    <div className=" space-y-2">
                        <h4 className=" text-xl font-semibold">Solar Panels Service</h4>
                        <p>Efficient solar panel installations for sustainable energy and cost savings.</p>
                    </div>
                    
                </div>

                <div className=" flex items-center gap-4 mt-5">
                <FaWater color="#fcf05a" size={40} />
                    <div className=" space-y-2">
                        <h4 className=" text-xl font-semibold">Solar Heater Service</h4>
                        <p>Expert solar heater installations for reliable warmth and energy efficiency.</p>
                    </div>
                </div>

                <div className=" flex items-center gap-4 mt-5">
                <GiElectric color="#fcf05a" size={40} />
                    <div className=" space-y-2">
                        <h4 className=" text-xl font-semibold">Extended Guarantee</h4>
                        <p>Offering extended guarantees for lasting peace of mind and protection</p>
                    </div>
                </div>
            </div>
        </div>

        {/* image on left  */}
        <div className=" hidden md:block w-[455px] h-[480px] bg-advantage-background-image rounded-2xl">
            <img className=" w-full h-full hover:-translate-x-10 hover:translate-y-10 rounded-2xl ease-linear duration-200" src="/disc_lft.jpg" alt="advantages of solar power" />
        </div>
    </div>
    <div className=" w-screen z-10 bg-[#f6fbff]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#4698d2" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,117.3C640,149,800,235,960,245.3C1120,256,1280,192,1360,160L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </div>
    </>
  )
}

export default Advantage