interface projectGridData {
  id: number;
  image: string;
  text: string;
}

const projectGridData = [
  { id: 1, image: "/projectgrid/pro1.jpg", text: "Vasa Solar" },
  { id: 2, image: "/projectgrid/pro2.jpg", text: "Vasa Solar" },
  { id: 3, image: "/projectgrid/pro3.jpg", text: "Vasa Solar" },
  { id: 4, image: "/projectgrid/pro4.jpg", text: "Vasa Solar" },
  { id: 5, image: "/projectgrid/pro5.jpg", text: "Vasa Solar" },
  { id: 6, image: "/projectgrid/pro6.jpg", text: "Vasa Solar" },
  { id: 7, image: "/projectgrid/pro7.jpg", text: "Vasa Solar" },
  { id: 8, image: "/projectgrid/pro8.jpg", text: "Vasa Solar" },
  { id: 9, image: "/projectgrid/pro9.jpg", text: "Vasa Solar" },
  { id: 10, image: "/projectgrid/pro10.jpg", text: "Vasa Solar" },
];

const Projects = () => {
  return (
    <div className=" font-Montserrat text-[#1d3571]">
      <h2 className="text-center text-3xl font-semibold mt-8">
        Our Incredible Projects
      </h2>
      <p className="text-center mt-5 mb-2">
        Harnessing the Power of the Sun, One Project at a Time
      </p>
      <p className="text-center mb-2">
        VASA has completed numerous solar panel installations that stand as a
        testament to our commitment to quality and innovation.
      </p>
      <p className="text-center mb-16">We are in the feild of solar and Solar services since 2010</p>

      {/* images grid  */}

      <div className=" w-screen grid grid-cols-5 grid-rows-2">
        {projectGridData.map((item) => (
          <div className="group " key={item.id}>
            <div className="relative overflow-clip">
              <img className=" z-10" src={item.image} alt={item.text} />
              <div className="absolute top-0 left-0 w-full h-full hidden duration-200 ease-in group-hover:block bg-gradient-to-t from-cyan-800 to-cyan-600 opacity-85 z-30 animate-slide-up">
                <div className=" w-full h-full flex justify-center items-center z-40 ">
                  <p className=" text-[#f6fbff]">{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
