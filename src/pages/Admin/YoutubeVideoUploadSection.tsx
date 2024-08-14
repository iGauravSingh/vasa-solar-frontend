import { useState } from "react";

const YoutubeVideoUploadSection = () => {
  const [videoLink, setVideoLink] = useState("");

  // Handlers for YouTube Video link form
  const handleVideoLinkChange = (e: any) => {
    setVideoLink(e.target.value);
  };

  const handleVideoSubmit = (e: any) => {
    e.preventDefault();
    console.log("Video link submitted:", videoLink);
    // Implement the logic to handle video link submission
  };

  return (
    <>
      <div className=" w-screen">
        <div className=" max-w-2xl ml-8">
          {/* Add YouTube Video Links Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Add YouTube Video Link
            </h2>
            <form onSubmit={handleVideoSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="videoLink"
                >
                  YouTube Video Link
                </label>
                <input
                  type="url"
                  id="videoLink"
                  name="videoLink"
                  value={videoLink}
                  onChange={handleVideoLinkChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter YouTube video link"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Submit Video Link
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default YoutubeVideoUploadSection;
