import Footer from "../../components/Footer";
import Header from "../../components/Header";

const SolarHeater = () => {
  return (
    <>
      <Header />

      <div className=" w-screen flex justify-center pb-16 pt-16 px-4">
        <div className=" max-w-3xl min-h-screen font-sans px-7">
          {/* image  */}
          <img
            src="/solargif.gif"
            alt="on grid solar plant"
            className="w-full h-[20rem] object-contain rounded-t-lg mb-4"
          />

          <div className=" flex flex-col justify-between items-center gap-4">
            {/* title  */}
            <h3 className="text-2xl font-semibold text-[#1d3571] mb-4">
              There are mainly two types of SWH i.e. ETC & FPC.
            </h3>

            {/* details  */}

            <div className=" space-y-4 mt-4">
              <div>
                <p className=" text-lg font-semibold mb-2">ETC</p>
                <ul className=" list-disc space-y-1 tracking-wide">
                  <li> ETC is tube based system</li>
                  <li>
                    Tubes are easily breakable & should be installed at a place
                    where no one comes or no one can throw anything.
                  </li>
                  <li> These are low on cost</li>
                </ul>
              </div>

              <div>
                <p className=" text-lg font-semibold mb-2">FPC</p>
                <ul className=" list-disc space-y-1 tracking-wide">
                  <li> FPC is copper tube base system</li>
                  <li> It is costly but long lasting.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SolarHeater;
