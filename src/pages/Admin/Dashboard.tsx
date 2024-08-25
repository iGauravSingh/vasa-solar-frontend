import { useState } from "react";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
import PostsSection from "./PostsSection";
import ImageUploadSection from "./ImageUploadSection";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ListPosts from "./ListPosts";
import ListImages from "./ListImages";
import ChangePassword from "./ChangePassword";

const Dashboard = () => {
  const navigate = useNavigate()
  const [selectedSection, setSelectedSection] = useState("post")

  const user = useSelector((state: RootState) => state.user.value)


  if(!user.user){
    return (
      <div className=" h-screen w-screen flex justify-center items-center">
        <h1 className=" text-4xl font-bold">Invaild Access</h1>
      </div>
    )
  }

  const { logout } = useAuth()

  // post, image, youtube
  

  const handleLogout = () => {
    logout()
    navigate("/")
  }


  return (
    <>
      <div className="min-h-screen flex">
        {/* side pannel left  */}
        <div className=" w-[20%] flex justify-center pt-8  bg-blue-500 text-slate-100">
          <ul className=" font-Montserrat font-semibold text-lg space-y-7">
            <li onClick={() => setSelectedSection("post")} className={`${selectedSection === 'post' ? 'border-b-4 border-blue-800' : ''} cursor-pointer ease-in`}>Post Projects</li>
            <li onClick={() => setSelectedSection("listp")} className={`${selectedSection === 'listp' ? 'border-b-4 border-blue-800' : ''} cursor-pointer ease-in`}>List Projects</li>
            <li onClick={() => setSelectedSection("image")} className={`${selectedSection === 'image' ? 'border-b-4 border-blue-800' : ''} cursor-pointer ease-in`}>Image Upload</li>
            <li onClick={() => setSelectedSection("listi")} className={`${selectedSection === 'listi' ? 'border-b-4 border-blue-800' : ''} cursor-pointer ease-in`}>List Images</li>
            <li onClick={() => setSelectedSection("change")} className={`${selectedSection === 'change' ? 'border-b-4 border-blue-800' : ''} cursor-pointer ease-in`}>Change Password</li>
          </ul>
        </div>

        {/* main section  */}
        <div className=" w-[80%] bg-blue-200 text-slate-800">

          {/* header  */}
          <div className=" flex justify-between items-center px-5 py-5">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              Admin Dashboard
            </h1>
            <button onClick={handleLogout} className=" bg-blue-900 text-slate-100 px-4 py-2 rounded-lg">Logout</button>
          </div>

          {/* content  */}

          {selectedSection === 'post' && <PostsSection />}
          {selectedSection === 'listp' && <ListPosts />}
          {selectedSection === 'image' && <ImageUploadSection />}
          {selectedSection === 'listi' && <ListImages />}
          {selectedSection === 'change' && <ChangePassword />}

        </div>
      </div>
    </>
  );
};

export default Dashboard;
