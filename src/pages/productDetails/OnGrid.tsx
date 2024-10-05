import Footer from "../../components/Footer";
import Header from "../../components/Header";

const OnGrid = () => {
  return (
    <>
      <Header />

      <div className=" w-screen flex justify-center pb-16 pt-16 px-4">
        <div className=" max-w-3xl min-h-screen font-sans px-7">
          {/* image  */}
          <img
            src="/ongrid.gif"
            alt="on grid solar plant"
            className="w-full h-[20rem] object-contain rounded-t-lg mb-4"
          />

          <div className=" flex flex-col justify-between items-center gap-4">
            {/* title  */}
          <h3 className="text-2xl font-semibold text-[#1d3571] mb-4">
            On-grid Solar Power Plant
          </h3>

          {/* details  */}

          
            <ul className=" list-decimal space-y-2 text-xl text-justify tracking-wide">
              <li>
                This type of plant is installed at a place where there is no
                power cut or rarely power cut, like once or twice a month.
              </li>
              <li> This type of plant does not have battery back-up.</li>
              <li>
                This type of plant produces electricity & gives directly to
                power meter.
              </li>
              <li>
                This type of plant is directly connected to power meter & will
                stop working if there is power cut even if there is sunlight
                also.
              </li>
              <li>
                Government subsidy is there on this type of plant only for
                residential/group housing, plywood factory/cold storage.
              </li>
              <li>
                Whatever the sanctioned load of power meter, we can install
                solar upto the load of power meter only .
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OnGrid;
