import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />

      <div className="bg-gray-100 py-12 px-6 font-Montserrat">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-[#1d3571] mb-6">
            About Us
          </h2>
          <div>
            <p className="text-lg  text-justify text-gray-700 mb-8">
              At VASA Enterprises, we are passionate about harnessing the power
              of the sun to provide clean and efficient energy solutions. With a
              commitment to sustainability and innovation, our expert team is
              dedicated to making solar energy accessible and affordable for
              everyone.
            </p>
            <p className="text-lg  text-justify text-gray-700 mb-8">
              VASA Enterprises was established in the year 2010. Since then it
              is working in the field of solar & providing best solutions &
              service to its customers. We want our customer to have bert solar
              product at best & afordable prices which inturn will help minimise
              people's dependency on coal energy which costly not good for our
              environment we help our customers in reducing their electricity
              bills upto 90%; free from power cut's & also helping in changing
              the growing global warming.
            </p>
            <p className="text-lg  text-justify text-gray-700 mb-8">
              We provide best products directly from the manufacturers. We have
              best team for installation who have many year of experience in the
              field.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
              To empower communities by providing reliable and cost-effective solar energy solutions, contributing to a sustainable future for generations to come.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
              To lead the transition to a greener, more sustainable world by becoming the top choice for solar panel installations and renewable energy services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Values
              </h3>
              <p className="text-gray-600">
              Sustainability, Innovation, Quality, and Customer Satisfaction. We are committed to delivering solutions that not only meet our clients' needs but also protect our planet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
