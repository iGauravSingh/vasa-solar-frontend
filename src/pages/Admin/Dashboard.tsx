import { useState } from "react";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
import PostsSection from "./PostsSection";
import ImageUploadSection from "./ImageUploadSection";
import YoutubeVideoUploadSection from "./YoutubeVideoUploadSection";

const Dashboard = () => {
// post, image, youtube
  const [selectedSection, setSelectedSection] = useState("post")

  return (
    <>
      <div className="min-h-screen flex">
        {/* side pannel left  */}
        <div className=" w-[20%] flex justify-center pt-8  bg-blue-500 text-slate-100">
          <ul className=" font-Montserrat font-semibold text-lg space-y-7">
            <li onClick={() => setSelectedSection("post")} className={`${selectedSection === 'post' ? 'border-b-4 border-blue-800' : ''} cursor-pointer ease-in`}>Projects Posts</li>
            <li onClick={() => setSelectedSection("image")} className={`${selectedSection === 'image' ? 'border-b-4 border-blue-800' : ''} cursor-pointer ease-in`}>Image Upload</li>
            <li onClick={() => setSelectedSection("youtube")} className={`${selectedSection === 'youtube' ? 'border-b-4 border-blue-800' : ''} cursor-pointer ease-in`}>Youtube Video</li>
          </ul>
        </div>

        {/* main section  */}
        <div className=" w-[80%] bg-blue-200 text-slate-800">

          {/* header  */}
          <div className=" flex justify-between items-center px-5 py-5">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              Admin Dashboard
            </h1>
            <button className=" bg-blue-900 text-slate-100 px-4 py-2 rounded-lg">Logout</button>
          </div>

          {/* content  */}

          {selectedSection === 'post' && <PostsSection />}
          {selectedSection === 'image' && <ImageUploadSection />}
          {selectedSection === 'youtube' && <YoutubeVideoUploadSection />}

        </div>
      </div>
    </>
  );
};

export default Dashboard;
