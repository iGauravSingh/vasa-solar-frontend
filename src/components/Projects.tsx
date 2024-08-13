interface projectGridData {
  id: number;
  image: string;
  text: string;
}

const projectGridData = [
  { id: 1, image: "/projectgrid/pj_1.jpg", text: "sample text" },
  { id: 2, image: "/projectgrid/pj_2.jpg", text: "sample text" },
  { id: 3, image: "/projectgrid/pj_3.jpg", text: "sample text" },
  { id: 4, image: "/projectgrid/pj_4.jpg", text: "sample text" },
  { id: 5, image: "/projectgrid/pj_5.jpg", text: "sample text" },
  { id: 6, image: "/projectgrid/pj_6.jpg", text: "sample text" },
  { id: 7, image: "/projectgrid/pj_7.jpg", text: "sample text" },
  { id: 8, image: "/projectgrid/pj_8.jpg", text: "sample text" },
  { id: 9, image: "/projectgrid/pj_9.jpg", text: "sample text" },
  { id: 10, image: "/projectgrid/pj_10.jpg", text: "sample text" },
];

const Projects = () => {
  return (
    <div className=" font-Montserrat text-[#1d3571]">
      <h2 className=" text-center text-3xl mt-8">Our Incredible Projects</h2>
      <p className=" text-center mt-5 mb-2">Lorem ipsum dolor, </p>
      <p className="text-center mb-16">
        sit amet consectetur adipisicing elit. Assumenda, officia.
      </p>

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
