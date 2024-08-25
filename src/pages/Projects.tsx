import { useSelector } from "react-redux";

import { format } from 'date-fns';

import Footer from "../components/Footer"
import Header from "../components/Header"
import { RootState } from "../app/store";
import usePosts from "../hooks/usePosts";
import { useEffect } from "react";




const Projects = () => {

  const { fetchPostsList } = usePosts()

  // const PostData = fetchPostsList()

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        fetchPostsList()
      } catch (error) {
        console.log("error fetching data")
      }
    }

    fetchProjectData()
  },[])

  const posts = useSelector((state: RootState) => state.posts.value)
  // console.log(posts.posts)

  const toDate = (dateStr: string) => {
    const formattedDate = format(new Date(dateStr), "MMMM do, yyyy");
    return formattedDate
  }

  if(posts.isLoading){
    return (
      <div>
        <Header />
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-75">
          {/* Tailwind Loading Spinner */}
          <div className="w-12 h-12 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <>
    <Header />


    <div className="bg-gray-100 py-12 px-6 min-h-screen">
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
              <p className="text-sm text-gray-500 mb-4">{toDate(project.completionDate)}</p>
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