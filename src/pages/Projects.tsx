import { useSelector } from "react-redux";
import Footer from "../components/Footer"
import Header from "../components/Header"
import { RootState } from "../app/store";
import usePosts from "../hooks/usePosts";
import { useEffect } from "react";


// const projects = [
//   {
//     title: 'Community Solar Farm',
//     description: 'A large-scale solar farm providing clean energy to over 1,000 homes in the region.',
//     image: 'https://via.placeholder.com/150', // Replace with actual image URL
//     location: 'Springfield, IL',
//     date: 'Completed: June 2023',
//   },
//   {
//     title: 'Off-grid Solar Installation for Remote Village',
//     description: 'A fully off-grid solar power system that supplies electricity to a remote village, ensuring energy independence.',
//     image: 'https://via.placeholder.com/150', // Replace with actual image URL
//     location: 'Lake Tahoe, CA',
//     date: 'Completed: January 2023',
//   },
//   {
//     title: 'Hybrid Solar System for Commercial Building',
//     description: 'Installation of a hybrid solar power system for a commercial building, reducing energy costs and providing backup power.',
//     image: 'https://via.placeholder.com/150', // Replace with actual image URL
//     location: 'Austin, TX',
//     date: 'Completed: March 2024',
//   },
//   {
//     title: 'Residential Solar Water Heating',
//     description: 'Installed solar water heaters in a residential community, significantly reducing energy consumption.',
//     image: 'https://via.placeholder.com/150', // Replace with actual image URL
//     location: 'Boulder, CO',
//     date: 'Completed: August 2022',
//   },
//   {
//     title: 'Flexible Solar Panels for Mobile Applications',
//     description: 'Developed and installed flexible solar panels for mobile food trucks and RVs.',
//     image: 'https://via.placeholder.com/150', // Replace with actual image URL
//     location: 'San Diego, CA',
//     date: 'Completed: October 2023',
//   },
//   {
//     title: 'University Hybrid Solar Project',
//     description: 'A hybrid solar power plant installed at a university campus, enhancing sustainability and energy efficiency.',
//     image: 'https://via.placeholder.com/150', // Replace with actual image URL
//     location: 'Boston, MA',
//     date: 'Completed: December 2023',
//   },
// ];


const Projects = () => {

  const { fetchPostsList } = usePosts()

  // const PostData = fetchPostsList()

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const PostData = fetchPostsList()
      } catch (error) {
        console.log("error fetching data")
      }
    }

    fetchProjectData()
  },[])

  const posts = useSelector((state: RootState) => state.posts.value)
  console.log(posts.posts)

  return (
    <>
    <Header />


    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#1d3571] mb-8">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.posts?.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={project.imageUrl}
                alt={project.heading}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.heading}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{project.location}</p>
              <p className="text-sm text-gray-500 mb-4">{project.completionDate}</p>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>





    <Footer />
    </>
  )
}

export default Projects