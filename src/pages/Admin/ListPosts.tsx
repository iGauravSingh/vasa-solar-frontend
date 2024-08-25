import { useEffect } from "react";
import usePosts from "../../hooks/usePosts";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const ListPosts = () => {

    const { fetchPostsList, deletePostswithId } = usePosts()
    

    useEffect(()=> {
        const fetchProject = () => {
            try {
                fetchPostsList()
              } catch (error) {
                console.log("error fetching data")
              }
        }
        fetchProject()
    },[])

    const posts = useSelector((state: RootState) => state.posts.value)

    const handleDelete = (id: any) => {
      console.log(id)
      deletePostswithId(id)
  }

    return (
        <div className="container mx-auto mt-8 px-4">
          <h2 className="text-2xl font-semibold mb-4">Project List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="py-3 px-4 text-left text-gray-600">ID</th>
                  <th className="py-3 px-4 text-left text-gray-600">Heading</th>
                  <th className="py-3 px-4 text-right text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.posts?.map((project: any) => (
                  <tr key={project.id} className="border-b">
                    <td className="py-3 px-4 text-gray-800">{project.id}</td>
                    <td className="py-3 px-4 text-gray-800">{project.heading}</td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };


export default ListPosts