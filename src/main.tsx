import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Projects from "./pages/Projects.tsx";
import Services from "./pages/Services.tsx";
import Error404 from "./pages/Error404.tsx";
import Dashboard from "./pages/Admin/Dashboard.tsx";
import Signin from "./pages/Signin.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />

      <Route path="/signin" element={<Signin />} />

      {/* // */}
      <Route path="/admin" element={<Dashboard />} />
      {/* // */}
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
