const Hero = () => {
  const text = "Welcome To VASA";
  const descp =
    "VASA provides reliable solar solutions to save energy costs and create a sustainable future.";

  return (
    <>
      <div className=" w-screen h-screen realtive font-Montserrat">
        <video
          src="/solarvid2.mp4"
          className="w-full h-full object-cover brightness-[60%] transition duration-500"
          autoPlay
          muted
          loop
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
                className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div className="space-y-2">
                    <p className="text-slate-800 font-semibold text-center">Explore</p>
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
