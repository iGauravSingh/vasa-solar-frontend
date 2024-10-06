import { useState } from "react";
import { Link } from "react-router-dom";


const Hero = () => {

  

  

    const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false); // Hide the loader once the video can be played
  };

  const text = "Welcome To VASA";
  const descp =
    "VASA provides reliable solar solutions to save energy costs and create a sustainable future.";

  return (
    <>
      {/* <div className=" w-screen h-screen realtive font-Montserrat">
        <video
          src="/solarvid4.mp4"
          className="w-full h-full object-cover brightness-[60%] transition duration-500"
          autoPlay
          muted
          loop
        ></video> */}
        <div className="w-screen h-screen relative font-Montserrat">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-75">
          {/* Tailwind Loading Spinner */}
          <div>
    <h1 className="text-xl md:text-4xl font-bold flex items-center">L<svg stroke="currentColor" fill="currentColor" stroke-width="0"
        viewBox="0 0 24 24" className="animate-spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z">
        </path>
      </svg> ading . . .</h1>
  </div>
        </div>
      )}

      <video
        src="/solarvid4.mp4"
        className={`w-full h-full object-cover brightness-[60%] transition duration-500 ${isLoading ? "hidden" : "block"}`}
        autoPlay
        muted
        loop
        onCanPlayThrough={handleVideoLoad} // Detect when the video is ready to play
      ></video>
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <>
            <h1 className="overflow-hidden text-3xl md:text-4xl lg:text-6xl font-bold leading-[3.5rem] text-white text-center text-nowrap">
              {text.match(/./gu)!.map((char, index) => (
                <span
                  className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </>

          <>
            <p className=" mt-5 text-white text-sm md:text-base lg:text-lg text-center animate-slide-up delay-1000 ease-in">
              {descp}
            </p>
          </>

          <div className=" pt-10 w-full flex justify-center">
    <div className="relative group cursor-pointer w-[120px]">
            <div
                className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                className="relative px-5 py-3 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none  space-x-6">
                <div className="space-y-2">
                    <p className=" text-blue-950 font-semibold text-lg text-center"><Link to="/services">Explore</Link> </p>
                </div>
            </div>
        </div>
    </div>
        </div>
        
      </div>

      <div className=" w-screen bg-[#f6fbff]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4698d2"
            fill-opacity=".8"
            d="M0,128L80,117.3C160,107,320,85,480,117.3C640,149,800,235,960,245.3C1120,256,1280,192,1360,160L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      

      
    </>
  );
};

export default Hero;

{
  /* <div className=" relative w-screen h-screen bg-hero bg-cover bg-center overflow-clip">

</div>
<div className=" w-screen h-screen absolute top-[105px] left-0 bg-[#4698d2] opacity-70">
    
</div>
<div className="w-screen h-screen absolute top-[105px] left-0  flex flex-col justify-center items-center">
    <div className=" w-full flex items-center justify-between"> */
}
{
  /* heading text  */
}
// <div className=" space-y-5 pl-40">
// <h1 className=" text-5xl font-Montserrat text-slate-50">Wide Range of</h1>
// <h1 className=" text-5xl font-Montserrat text-slate-50">Solar Solutions</h1>
// <button className=' w-[150px] h-[45px] rounded-2xl text-blue-950 font-semibold text-lg bg-slate-50 px-2 py-1'>Read More</button>
// </div>

{
  /* heading gif  */
}
//     <div className=" pr-20">
//         <img className=" w-[630px] h-[670px]" src="/vi.gif" alt="pa" />
//     </div>
// </div>
// </div>
// <div className=" bg-[#f6fbff]">
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4698d2" fill-opacity=".8" d="M0,128L80,117.3C160,107,320,85,480,117.3C640,149,800,235,960,245.3C1120,256,1280,192,1360,160L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
// </div>
