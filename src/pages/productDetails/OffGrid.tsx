import Footer from "../../components/Footer";
import Header from "../../components/Header";

const OffGrid = () => {
  return (
    <>
      <Header />

      <div className=" w-screen flex justify-center pb-16 pt-16 px-4">
        <div className=" max-w-3xl min-h-screen font-sans px-7">
          {/* image  */}
          <img
            src="/offgrid.gif"
            alt="on grid solar plant"
            className="w-full h-[20rem] object-contain rounded-t-lg mb-4"
          />

          <div className=" flex flex-col justify-between items-center gap-4">
            {/* title  */}
          <h3 className="text-2xl font-semibold text-[#1d3571] mb-4">
          Off-grid Solar Power Plant
          </h3>

          {/* details  */}

          
          <ul className=" list-decimal space-y-2 text-xl text-justify text-wrap tracking-wide">
                <li>
                  This type of plant is installed at a place where there is no
                  power or there is regular power cut that is daily.
                </li>
                <li> This type of system has permanently battery back-up</li>
                <li className=" flex flex-col gap-2">
                  <span>From morning till evening all your equipments will run
                  directly from solar, weather power is there or not.</span> <span>In evening
                  it will shift to meter power & from evening till night if there is
                  power cut, it will give back-up from battery.</span>
                </li>
                <li> There is no subsidy on this type of system.</li>
                <li>
                  Capacity of this system is not according to sanctioned load of power meter.
                </li>
                <li>
                  Capacity can be calculated according to the starting load of
                  all your equipments like lights,fans,water pump,A.c's,fridge
                  etc
                </li>
              </ul>
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OffGrid;
