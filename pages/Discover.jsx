import React, { useState } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { FiMenu, FiX } from "react-icons/fi";
import Newrealsesongs from "../components/Newrealsesongs";
import Popularartist from "../components/Popularartist";
import Musicvideo from "../components/Musicvideo";
import Topalbum from "../components/Topalbum";
import Moodplaylist from "../components/Moodplaylist";
import Footer from "./Footer";
import Genmusic from "../components/Genmusic";

const Discover = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-[100%] w-[100%] bg-neutral-800">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden text-white text-3xl cursor-pointer pt-10 absolute top-4 left-2 z-50"
      >
        {sidebarOpen ? <FiX /> : <FiMenu />}
      </button>

      
      <h1 className="md:hidden font-bold text-2xl text-[30px] text-center  text-pink-500">
        Discover
      </h1>

      <div
        className={`absolute md:relative w-64 bg-neutral-800 h-240 pl-6 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out 
        border-r-3 border-b-3 rounded-r-2xl border-pink-500 shadow-[5px_0_5px_rgba(200,0,0,0.4)]`}
      >
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1 ">
        <div className="flex-1 flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl p-10 text-white ml-4">
          <Nav />
        </div>
        <Genmusic />
        <Moodplaylist />
        <Popularartist />
        <Musicvideo />
        <Newrealsesongs />
        <Topalbum />
        <Footer />
      </div>
    </div>
  );
};

export default Discover;
