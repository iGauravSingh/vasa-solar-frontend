import Footer from "../../components/Footer";
import Header from "../../components/Header";

const FlexibleSolar = () => {
  return (
    <>
      <Header />

      <div className=" w-screen flex justify-center pb-16 pt-16 px-4">
        <div className=" max-w-3xl min-h-screen font-sans px-7 mb-11">
          {/* image  */}
          <img
            src="/flexsolar.jpg"
            alt="on grid solar plant"
            className="w-full h-[20rem] object-contain rounded-t-lg mb-4"
          />

          <div className=" flex flex-col justify-between items-center gap-4">
            {/* title  */}
          <h3 className="text-2xl font-semibold text-[#1d3571] mb-4">
          Flexible solar panels
          </h3>

          {/* details  */}

          
          <ul className=" list-decimal space-y-2 text-xl text-justify text-wrap tracking-wide">
          <li>
                  Lightweight & Easy to Install: Flexible solar panels are
                  significantly lighter than traditional panels, making them
                  easy to install on various surfaces, including frontface of buildings.
                </li>
                <li>
                  Highly Durable & Weather-Resistant: Designed to withstand
                  harsh environmental conditions, flexible solar panels are
                  resistant to impacts, corrosion, and extreme temperatures,
                  ensuring long-lasting performance.
                </li>
                <li>
                  Versatile Applications: Ideal for placeswhere there is less spaces on rofftop of a building like multi story , commercial building, corporate office building, multistory hospital, multistory malls etc.
                </li>
                <li>
                  Efficient Energy Generation: Despite their thin and
                  lightweight and flexible design, Flexible solar panels can be customized in higher power and different shapes for high efficiency and maximum outputs, maximizing power output
                  even in low-light conditions.
                </li>
                <li>
                  Aesthetic Appeal: If you have or planning to apply ACP/Glass Panelling on your multi storey buildings then these flexible solar pannel With their sleek and unobtrusive design,
                  flexible solar panels blend seamlessly with modern
                  architecture, enhancing the visual appeal of your property
                  while harnessing clean energy.
                </li>
              </ul>
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FlexibleSolar;
