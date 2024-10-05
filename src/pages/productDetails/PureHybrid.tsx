import Footer from "../../components/Footer";
import Header from "../../components/Header";

const PureHybrid = () => {
  return (
    <>
      <Header />

      <div className=" w-screen flex justify-center pb-16 pt-16 px-4">
        <div className=" max-w-3xl min-h-screen font-sans px-7">
          {/* image  */}
          <img
            src="/purehybrid.gif"
            alt="on grid solar plant"
            className="w-full h-[20rem] object-contain rounded-t-lg mb-4"
          />

          <div className=" flex flex-col justify-between items-center gap-4">
            {/* title  */}
          <h3 className="text-2xl font-semibold text-[#1d3571] mb-4">
          Pure hybrid solar power plant
          </h3>

          {/* details  */}

          
          <ul className=" list-decimal space-y-2 text-xl text-justify text-wrap tracking-wide">
          <li>
                  This type of system is installed where there is regular power
                  cut / frequent power cuts in the daytime & customer's work is
                  affected in daytime for example schools, college, commercial and industrial activities till daytime .
                </li>
                <li>
                  This type of system has optional battery back-up i.e. if
                  customers work is only for day time then he can have battery
                  less system also.
                </li>
                <li>
                  From morning till evening if there is no power cut then all
                  electricity produced will be sent to meter reducing your bill. If there will be power cut anytime from morning till evening
                  then your equipments will run directly from solar energy. In
                  evening it will shift to electricity. From evening till night
                  if there is power cut it will give you power from battery
                  back-up if you install battery otherwise there will be no backup.
                </li>
                <li> There is subsidy on this type of system only for residential customers and for rural industries.</li>
                <li>
                  Capacity of this system depends on both i.e. meter load &
                  actual equipment load.
                </li>
              </ul>
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PureHybrid;
