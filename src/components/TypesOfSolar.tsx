// import { useState } from "react";

// const services = [
//   {
//     title: "On-grid Solar Power Plant",
//     description:
//       "Ideal for areas with areas with 22 to 24 hrs electricity, This system generates electricity and feeds excess power back to the grid.",
//     image: "./ongrid.gif",
//   },
//   {
//     title: "Off-grid Solar Power Plant",
//     description:
//       "Perfect for remote locations, off-grid systems provide reliable energy independence without needing a power connection.",
//     image: "./offgrid.gif",
//   },
//   {
//     title: "Hybrid Solar Power Plant",
//     description:
//       "Combined on grid with off grid solar power plant for optimal performance.",
//     image: "./hybrid.gif",
//   },
//   {
//     title: "Pure Hybrid Solar Plant",
//     description:
//       "Pure hybrid systems ensure uninterrupted power supply only in daytime.",
//     image: "/hybrid.gif",
//   },
//   {
//     title: "Solar Water Heaters",
//     description:
//       "Efficient, eco-friendly solar water heaters meets your hot water needs while also significantly reducing energy costs.",
//     image: "/solargif.gif",
//   },
//   {
//     title: "Flexible Solar Panels",
//     description:
//       "Flexible solar panels are lightweight and very versatile, making them ideal for both mobile and portable setups.",
//     image: "flexsolar.jpg",
//   },
// ];

// const TypesOfSolar = () => {
//   const [isModalOpenOnGrid, setIsModalOpenOnGrid] = useState(false);
//   const [isModalOpenOffGrid, setIsModalOpenOffGrid] = useState(false);
//   const [isModalOpenHybrid, setIsModalOpenHybrid] = useState(false);
//   const [isModalOpenPureHybrid, setIsModalOpenPureHybrid] = useState(false);
//   const [isModalOpenWaterHeater, setIsModalWaterHeater] = useState(false);
//   const [isModalOpenFlexiblePanel, setIsModalOpenFlexiblePanel] =
//     useState(false);

//   const handleOpenModalOnGrid = () => {
//     setIsModalOpenOnGrid(true);
//   };

//   const handleCloseModalOnGrid = () => {
//     setIsModalOpenOnGrid(false);
//   };

//   // //////////////////

//   const handleOpenModalOffGrid = () => {
//     setIsModalOpenOffGrid(true);
//   };

//   const handleCloseModalOffGrid = () => {
//     setIsModalOpenOffGrid(false);
//   };

//   ///////////////////////////////

//   const handleOpenModalHybrid = () => {
//     setIsModalOpenHybrid(true);
//   };

//   const handleCloseModalHybrid = () => {
//     setIsModalOpenHybrid(false);
//   };

//   //////////////////////////////

//   const handleOpenModalPureHybrid = () => {
//     setIsModalOpenPureHybrid(true);
//   };

//   const handleCloseModalPureHybrid = () => {
//     setIsModalOpenPureHybrid(false);
//   };

//   ////////////////////////////

//   const handleOpenModalWaterHeater = () => {
//     setIsModalWaterHeater(true);
//   };

//   const handleCloseModalWaterHeater = () => {
//     setIsModalWaterHeater(false);
//   };

//   ///////////////////////////////

//   const handleOpenModalFlexiblePanel = () => {
//     setIsModalOpenFlexiblePanel(true);
//   };

//   const handleCloseModalFlexiblePanel = () => {
//     setIsModalOpenFlexiblePanel(false);
//   };

//   //////////////////////////////////

//   return (
//     <>
//       <div className=" font-Roboto text-[#1d3571] bg-[#f6fbff] ">
//         <h1 className=" text-3xl font-semibold mb-16 text-center font-Montserrat">
//           Our Product & Services
//         </h1>
//         {/* gif container  */}
//         <div className="w-screen px-6">
//           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
//             <div className=" cursor-pointer" onClick={handleOpenModalOnGrid}>
//               {/* <h2 className=" text-xl font-semibold text-center mb-2">
//               On-grid solar power plant
//             </h2>
//             <img
//               className=" w-[300px] h-[250px]"
//               src="/ongrid.gif"
//               alt="ongrid"
//             /> */}
//               <div className="h-[500px] bg-white p-6 rounded-lg shadow-lg">
//                 <img
//                   src="/ongrid.gif"
//                   alt="on grid solar plant"
//                   className="w-full h-[20rem] object-contain rounded-t-lg mb-4"
//                 />
//                 <h3 className="text-2xl font-semibold text-[#1d3571] mb-4">
//                   {services[0].title}
//                 </h3>
//                 <p className="text-gray-600">{services[0].description}</p>
//               </div>
//             </div>

//             <div className=" cursor-pointer" onClick={handleOpenModalOffGrid}>
//               {/* <h2 className=" text-xl font-semibold text-center mb-2">
//               Off-grid solar power plant
//             </h2>
//             <img
//               className=" w-[300px] h-[250px]"
//               src="/offgrid.gif"
//               alt="offgrid"
//             /> */}

//               <div className="h-[500px] bg-white p-6 rounded-lg shadow-lg">
//                 <img
//                   src={services[1].image}
//                   alt={services[1].title}
//                   className="w-full h-[20rem] object-contain rounded-t-lg mb-4"
//                 />
//                 <h3 className="text-2xl font-semibold text-[#1d3571] mb-4">
//                   {services[1].title}
//                 </h3>
//                 <p className="text-gray-600">{services[1].description}</p>
//               </div>
//             </div>

//             <div className=" cursor-pointer" onClick={handleOpenModalHybrid}>
//               {/* <h2 className=" text-xl font-semibold text-center mb-2">
//                 Hybrid solar power plant
//               </h2>
//               <img
//                 className=" w-[300px] h-[250px]"
//                 src="/hybrid.gif"
//                 alt="hybrid"
//               /> */}
//               <div className="h-[500px] bg-white p-6 rounded-lg shadow-lg">
//                 <img
//                   src={services[2].image}
//                   alt={services[2].title}
//                   className="w-full h-[20rem] object-contain rounded-t-lg mb-4"
//                 />
//                 <h3 className="text-2xl font-semibold text-[#1d3571] mb-4">
//                   {services[2].title}
//                 </h3>
//                 <p className="text-gray-600">{services[2].description}</p>
//               </div>
//             </div>

//             <div className=" cursor-pointer" onClick={handleOpenModalPureHybrid}>
//               {/* <h2 className=" text-xl font-semibold text-center mb-2">
//                 Pure hybrid solar power plant
//               </h2>
//               <img
//                 className=" w-[300px] h-[250px]"
//                 src="/hybrid.gif"
//                 alt="ongrid"
//               /> */}
//               <div className="h-[500px] bg-white p-6 rounded-lg shadow-lg">
//                 <img
//                   src={services[3].image}
//                   alt={services[3].title}
//                   className="w-full h-[20rem] object-contain rounded-t-lg mb-4"
//                 />
//                 <h3 className="text-2xl font-semibold text-[#1d3571] mb-4">
//                   {services[3].title}
//                 </h3>
//                 <p className="text-gray-600">{services[3].description}</p>
//               </div>
//             </div>

//             <div className=" cursor-pointer" onClick={handleOpenModalWaterHeater}>
//               {/* <h2 className=" text-xl font-semibold text-center mb-2">
//                 Solar water heaters
//               </h2>
//               <img
//                 className=" w-[300px] h-[250px]"
//                 src="/solargif.gif"
//                 alt="ongrid"
//               /> */}
//               <div className="h-[500px] bg-white p-6 rounded-lg shadow-lg">
//                 <img
//                   src={services[4].image}
//                   alt={services[4].title}
//                   className="w-full h-[20rem] object-contain rounded-t-lg mb-4"
//                 />
//                 <h3 className="text-2xl font-semibold text-[#1d3571] mb-4">
//                   {services[4].title}
//                 </h3>
//                 <p className="text-gray-600">{services[4].description}</p>
//               </div>
//             </div>

//             <div className=" cursor-pointer" onClick={handleOpenModalFlexiblePanel}>
//               {/* <h2 className=" text-xl font-semibold text-center mb-2">
//                 Flexible solar panels
//               </h2>
//               <img
//                 className=" w-[300px] h-[250px]"
//                 src="/flexsolar.jpg"
//                 alt="ongrid"
//               /> */}
//               <div className="h-[500px] bg-white p-6 rounded-lg shadow-lg">
//                 <img
//                   src={services[5].image}
//                   alt={services[5].title}
//                   className="w-full h-[20rem] object-contain rounded-t-lg mb-4"
//                 />
//                 <h3 className="text-2xl font-semibold text-[#1d3571] mb-4">
//                   {services[5].title}
//                 </h3>
//                 <p className="text-gray-600">{services[5].description}</p>
//               </div>
//             </div>

//             {/* // */}
//           </div>
//         </div>
//         {/* #f6fbff */}
//         <div className=" w-screen  rotate-180 z-10">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
//             <path
//               fill="#4698d2"
//               fill-opacity="1"
//               d="M0,128L80,117.3C160,107,320,85,480,117.3C640,149,800,235,960,245.3C1120,256,1280,192,1360,160L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
//             ></path>
//           </svg>
//         </div>
//       </div>

//       {/* Modal ongrid */}
//       {isModalOpenOnGrid && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[22rem] md:w-[30rem] mx-4 my-8 md:my-16">
//             <h3 className="text-lg font-semibold mb-4">
//               On-grid Solar Power Plant
//             </h3>
// <p>
//   <ul className=" list-decimal space-y-2">
//     <li>
//       This type of plant is installed at a place where there is no
//       power cut or rarely power cut, like once or twice a month.
//     </li>
//     <li> This type of plant does not have battery back-up.</li>
//     <li>
//       This type of plant produces electricity & gives directly to
//       power meter.
//     </li>
//     <li>
//       This type of plant is directly connected to power meter & will stop
//       working if there is power cut even if there is sunlight also.
//     </li>
//     <li>
//       Government subsidy is there on this type of plant only for
//       residential/group housing, plywood factory/cold storage.
//     </li>
//     <li>
//       Whatever the sanctioned load of power meter, we can install
//       solar upto the load of power meter only .
//     </li>
//   </ul>
// </p>
//             <button
//               onClick={handleCloseModalOnGrid}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Modal offgrid */}
//       {isModalOpenOffGrid && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[22rem] md:w-[30rem] mx-4 my-8 md:my-16">
//             <h3 className="text-lg font-semibold mb-4">
//               Off-grid solar power plant
//             </h3>
//             <p>
// <ul className=" list-decimal space-y-2">
//   <li>
//     This type of plant is installed at a place where there is no
//     power or there is regular power cut that is daily.
//   </li>
//   <li> This type of system has permanently battery back-up</li>
//   <li>
//     From morning till evening all your equipments will run
//     directly from solar, weather power is there or not. In evening
//     it will shift to meter power & from evening till night if there is
//     power cut, it will give back-up from battery.
//   </li>
//   <li> There is no subsidy on this type of system.</li>
//   <li>
//     Capacity of this system is not according to sanctioned load of power meter.
//   </li>
//   <li>
//     Capacity can be calculated according to the starting load of
//     all your equipments like lights,fans,water pump,A.c's,fridge
//     etc
//   </li>
// </ul>
//             </p>
//             <button
//               onClick={handleCloseModalOffGrid}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Modal Hybrid */}
//       {isModalOpenHybrid && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[22rem] md:w-[30rem] mx-4 my-8 md:my-16">
//             <h3 className="text-lg font-semibold mb-4">
//               Hybrid solar power plant
//             </h3>
//             <p>
// <ul className=" list-decimal space-y-2">
// <li>
//   This type of system is installed at a place where there is
//   frequent power cuts but not regular or where power cut will
//   affect customer's work.
// </li>
// <li> This type of system has permanent battery back-up.</li>
// <li>
//   From morning till evening if there is no power cut then all
//   electricity produced will be sent to power meter reducing your bill
//   .If there will be power cut anytime from morning till evening
//   then your equipments will run directly from solar energy. In
//   evening plant will shift to electricity. From evening till night
//   if there is power cut it will give you power from battery
//   back-up.
// </li>
// <li>
//   This type of system capacity will be whatever is the
//   sanctioned load of the power meter.
// </li>
// <li>Government subsidy is available only for residential customers.</li>
// </ul>
//             </p>
//             <button
//               onClick={handleCloseModalHybrid}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* ////////////////// */}

//       {/*  Pure hybrid solar power plant*/}
//       {isModalOpenPureHybrid && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[22rem] md:w-[30rem] mx-4 my-8 md:my-16">
//             <h3 className="text-lg font-semibold mb-4">
//               Pure hybrid solar power plant
//             </h3>
//             <p>
//               <ul className=" list-decimal space-y-2">
// <li>
//   This type of system is installed where there is regular power
//   cut / frequent power cuts in the daytime & customer's work is
//   affected in daytime for example schools, college, commercial and industrial activities till daytime .
// </li>
// <li>
//   This type of system has optional battery back-up i.e. if
//   customers work is only for day time then he can have battery
//   less system also.
// </li>
// <li>
//   From morning till evening if there is no power cut then all
//   electricity produced will be sent to meter reducing your bill. If there will be power cut anytime from morning till evening
//   then your equipments will run directly from solar energy. In
//   evening it will shift to electricity. From evening till night
//   if there is power cut it will give you power from battery
//   back-up if you install battery otherwise there will be no backup.
// </li>
// <li> There is subsidy on this type of system only for residential customers and for rural industries.</li>
// <li>
//   Capacity of this system depends on both i.e. meter load &
//   actual equipment load.
// </li>
//               </ul>
//             </p>
//             <button
//               onClick={handleCloseModalPureHybrid}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* /////////////////////////// */}

//       {/*  Solar water heaters */}
//       {isModalOpenWaterHeater && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[22rem] md:w-[30rem] mx-4 my-8 md:my-16">
//             <h3 className="text-lg font-semibold mb-4">Solar water heaters</h3>
//             <p>There are mainly two types of SWH i.e. ETC & FPC.</p>

// <div className=" space-y-4 mt-4">
//   <div>
//     <p className=" text-lg font-semibold mb-2">ETC</p>
//     <ul className=" list-disc space-y-1">
//       <li> ETC is tube based system</li>
//       <li>

//         Tubes are easily breakable & should be installed at a place
//         where no one comes or no one can throw anything.
//       </li>
//       <li> These are low on cost</li>
//     </ul>
//   </div>

//   <div>
//     <p className=" text-lg font-semibold mb-2">FPC</p>
//     <ul className=" list-disc space-y-1">
//       <li> FPC is copper tube base system</li>
//       <li> It is costly but long lasting.</li>
//     </ul>
//   </div>
// </div>
//             <button
//               onClick={handleCloseModalWaterHeater}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* /////////////////////////////////// */}

//       {/*  Flexible solar panels */}
//       {isModalOpenFlexiblePanel && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[22rem] md:w-[30rem] mx-4 my-8 md:my-16">
//             <h3 className="text-lg font-semibold mb-4">
//               Flexible solar panels
//             </h3>
//             <p>
//               <ul className=" list-decimal space-y-2">
// <li>
//   Lightweight & Easy to Install: Flexible solar panels are
//   significantly lighter than traditional panels, making them
//   easy to install on various surfaces, including frontface of buildings.
// </li>
// <li>
//   Highly Durable & Weather-Resistant: Designed to withstand
//   harsh environmental conditions, flexible solar panels are
//   resistant to impacts, corrosion, and extreme temperatures,
//   ensuring long-lasting performance.
// </li>
// <li>
//   Versatile Applications: Ideal for placeswhere there is less spaces on rofftop of a building like multi story , commercial building, corporate office building, multistory hospital, multistory malls etc.
// </li>
// <li>
//   Efficient Energy Generation: Despite their thin and
//   lightweight and flexible design, Flexible solar panels can be customized in higher power and different shapes for high efficiency and maximum outputs, maximizing power output
//   even in low-light conditions.
// </li>
// <li>
//   Aesthetic Appeal: If you have or planning to apply ACP/Glass Panelling on your multi storey buildings then these flexible solar pannel With their sleek and unobtrusive design,
//   flexible solar panels blend seamlessly with modern
//   architecture, enhancing the visual appeal of your property
//   while harnessing clean energy.
// </li>
//               </ul>
//             </p>
//             <button
//               onClick={handleCloseModalFlexiblePanel}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* //////////////////////////////////////////// */}
//     </>
//   );
// };

// export default TypesOfSolar;

// =============================

import { useNavigate } from "react-router-dom";

// const ongridModal = [
//   "This type of plant is installed at a place where there is no power cut or rarely power cut, like once or twice a month.",
//   "This type of plant does not have battery back-up.",
//   "This type of plant produces electricity & gives directly to power meter.",
//   "This type of plant is directly connected to power meter & will stop working if there is power cut even if there is sunlight also.",
//   "Government subsidy is there on this type of plant only for residential/group housing, plywood factory/cold storage.",
//   "Whatever the sanctioned load of power meter, we can install solar up to the load of power meter only."
// ];

// const offgridModal = [
//   "This type of plant is installed at a place where there is no power or there is regular power cut that is daily.",
//   "This type of system has permanently battery back-up.",
//   "From morning till evening all your equipments will run directly from solar, whether power is there or not. In evening it will shift to meter power & from evening till night if there is power cut, it will give back-up from battery.",
//   "There is no subsidy on this type of system.",
//   "Capacity of this system is not according to sanctioned load of power meter.",
//   "Capacity can be calculated according to the starting load of all your equipments like lights, fans, water pump, A.C's, fridge, etc."
// ];

// const hybridModal = [
//   "This type of system is installed at a place where there are frequent power cuts but not regular, or where power cut will affect customer's work.",
//   "This type of system has permanent battery back-up.",
//   "From morning till evening if there is no power cut, then all electricity produced will be sent to the power meter, reducing your bill. If there is a power cut anytime from morning till evening, your equipment will run directly from solar energy. In the evening, the plant will shift to electricity. From evening till night, if there is a power cut, it will provide power from the battery back-up.",
//   "This type of system's capacity will be whatever is the sanctioned load of the power meter.",
//   "Government subsidy is available only for residential customers."
// ];

// const pureHybridModal = [
//   "This type of system is installed where there is regular power cut / frequent power cuts in the daytime & customer's work is affected in the daytime, for example, schools, colleges, commercial, and industrial activities till daytime.",
//   "This type of system has optional battery back-up i.e., if the customer's work is only for daytime, then they can have a battery-less system also.",
//   "From morning till evening if there is no power cut, all electricity produced will be sent to the meter, reducing your bill. If there is a power cut anytime from morning till evening, your equipment will run directly from solar energy. In the evening, it will shift to electricity. From evening till night, if there is a power cut, it will provide power from the battery back-up if you install a battery, otherwise, there will be no backup.",
//   "There is subsidy on this type of system only for residential customers and for rural industries.",
//   "Capacity of this system depends on both the meter load & actual equipment load."
// ];

const services = [
  {
    title: "On-grid Solar Power Plant",
    description:
      "Ideal for areas with 22 to 24 hrs electricity, this system generates electricity and feeds excess power back to the grid.",
    image: "./ongrid.gif",
    link: "/ongrid",
  },
  {
    title: "Off-grid Solar Power Plant",
    description:
      "Perfect for remote locations, off-grid systems provide reliable energy independence without needing a power connection.",
    image: "./offgrid.gif",
    link: "/offgrid",
  },
  {
    title: "Hybrid Solar Power Plant",
    description:
      "Combined on-grid with off-grid solar power plant for optimal performance.",
    image: "./hybrid.gif",
    link: "/hybrid",
  },
  {
    title: "Pure Hybrid Solar Plant",
    description:
      "Pure hybrid systems ensure uninterrupted power supply only in daytime.",
    image: "/purehybrid.gif",
    link: "/purehybrid",
  },
  {
    title: "Solar Water Heaters",
    description:
      "Efficient, eco-friendly solar water heaters meet your hot water needs while also significantly reducing energy costs.",
    image: "/solargif.gif",
    link: "/solarheater",
  },
  {
    title: "Flexible Solar Panels",
    description:
      "Flexible solar panels are lightweight and very versatile, making them ideal for both mobile and portable setups.",
    image: "/flexsolar.jpg",
    link: "/flexiblesolar",
  },
];

const TypesOfSolar = () => {
  const navigate = useNavigate();

  const handleCardClick = (service: any) => {
    navigate(service.link);
  };

  return (
    <div className="font-Roboto text-[#1d3571] bg-[#f6fbff]">
      <h1 className="text-3xl font-semibold mb-16 text-center font-Montserrat">
        Our Product & Services
      </h1>
      <div className="w-screen px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="cursor-pointer h-[500px] bg-white p-6 rounded-lg shadow-lg"
              onClick={() => handleCardClick(service)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[20rem] object-contain rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#1d3571] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-screen rotate-180 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path
            fill="#4698d2"
            fill-opacity="1"
            d="M0,128L80,117.3C160,107,320,85,480,117.3C640,149,800,235,960,245.3C1120,256,1280,192,1360,160L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default TypesOfSolar;
