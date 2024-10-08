import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import usePosts from "../../hooks/usePosts";


interface Post {
  heading: string;
    location: string;
    completionDate: string;
    description: string;
    image: File | null,
}

const PostsSection = () => {

  const { createPosts } = usePosts()

    // States for each form
   const [post, setPost] = useState<Post>({
    heading: '',
    location: '',
    completionDate: '',
    description: '',
    image: null,
  });

     // Handlers for Post creation form
  const handlePostInputChange = (e:any) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handlePostImageChange = (e:any) => {
    setPost({ ...post, image: e.target.files[0] });
  };

  const handlePostSubmit = async (e:any) => {
    e.preventDefault();
    console.log('Post submitted:', post);

    

    const formData = new FormData()
    if (post.image) {
      formData.append('file', post.image); // Only append if image is not null
      const newName = post.image.name + uuidv4()
      formData.append('imagename',newName)
    }
    
    formData.append('heading',post.heading)
    formData.append('location',post.location)
    formData.append('completionDate',post.completionDate)
    formData.append('description',post.description)
    
    const resp = await createPosts(formData)
    if(resp.message === "ok created"){
      alert("Project created success fully.")
    }
  };

  return (
    <div className=" w-screen">
     <div className=" max-w-2xl ml-8">
           {/* Create Post Section */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Create Post</h2>
        <form onSubmit={handlePostSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="heading">
              Heading
            </label>
            <input
              type="text"
              id="heading"
              name="heading"
              value={post.heading}
              onChange={handlePostInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter heading"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={post.location}
              onChange={handlePostInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter location"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="completionDate">
              Completion Date
            </label>
            <input
              type="date"
              id="completionDate"
              name="completionDate"
              value={post.completionDate}
              onChange={handlePostInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Short Description
            </label>
            <textarea
              id="description"
              name="description"
              value={post.description}
              onChange={handlePostInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Enter a short description"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handlePostImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit Post
          </button>
        </form>
      </div>
     </div>
    </div>
  )
}

export default PostsSection