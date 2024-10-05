import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Hybrid = () => {
  return (
    <>
      <Header />

      <div className=" w-screen flex justify-center pb-16 pt-16 px-4">
        <div className=" max-w-3xl min-h-screen font-sans px-7">
          {/* image  */}
          <img
            src="/hybrid.gif"
            alt="on grid solar plant"
            className="w-full h-[20rem] object-contain rounded-t-lg mb-4"
          />

          <div className=" flex flex-col justify-between items-center gap-4">
            {/* title  */}
          <h3 className="text-2xl font-semibold text-[#1d3571] mb-4">
          Hybrid solar power plant
          </h3>

          {/* details  */}

          
          <ul className=" list-decimal space-y-2 text-xl text-justify text-wrap tracking-wide">
          <li>
                  This type of system is installed at a place where there is
                  frequent power cuts but not regular or where power cut will
                  affect customer's work.
                </li>
                <li> This type of system has permanent battery back-up.</li>
                <li>
                  From morning till evening if there is no power cut then all
                  electricity produced will be sent to power meter reducing your bill
                  .If there will be power cut anytime from morning till evening
                  then your equipments will run directly from solar energy. In
                  evening plant will shift to electricity. From evening till night
                  if there is power cut it will give you power from battery
                  back-up.
                </li>
                <li>
                  This type of system capacity will be whatever is the
                  sanctioned load of the power meter.
                </li>
                <li>Government subsidy is available only for residential customers.</li>
              </ul>
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Hybrid;
