import React, { useState } from "react";
import Nav from "../components/Nav";
import backg from "../src/assets/backg.png";
import Sidebar from "../components/Sidebar";
import { FiMenu, FiX } from "react-icons/fi";
import Topsongs from "../components/Topsongs";
import Newrealsesongs from "../components/Newrealsesongs";
import Trending from "../components/Trending";
import Popularartist from "../components/Popularartist";
import Musicvideo from "../components/Musicvideo";
import Topalbum from "../components/Topalbum";
import Moodplaylist from "../components/Moodplaylist";
import Platform from "../components/Platform";
import Footer from "./Footer";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-800">
      <div className="flex flex-col md:flex-row flex-1">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden text-white text-3xl cursor-pointer pt-10 absolute top-4 left-2 z-50"
        >
          {sidebarOpen ? <FiX /> : <FiMenu />}
        </button>

        <div
        className={`absolute md:relative w-64 bg-neutral-800 h-240 pl-6 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out 
        border-r-3 border-b-3 rounded-r-2xl border-pink-500 shadow-[5px_0_5px_rgba(200,0,0,0.4)]`}
      >
        <Sidebar />
      </div>

        <div className="flex flex-col flex-1">
          <div
            className="flex-1 flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl p-6 text-white"
            style={{ backgroundImage: `url(${backg})` }}
          >
            <Nav />

            <div className="pt-24 md:pt-48 pl-5 md:pl-10 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-roboto leading-snug">
                All the <span className="text-pink-600">Best Songs</span> <br />{" "}
                in one place
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg">
                On PreshMusic, access an amazing collection of popular and
                new songs. <br />
                Stream your favorite tracks in high quality and enjoy without
                interruptions. <br />
                Whatever your taste in music, we have it for you!
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6 md:mt-10 items-center sm:items-start">
                <button className="border-2 border-blue-600 px-6 py-3 font-bold rounded-md text-blue-600 hover:bg-pink-600 hover:text-white cursor-pointer hover:border-pink-600 w-40">
                  Discover Now
                </button>
                <button className="border-2 border-blue-600 px-6 py-3 font-bold rounded-md text-blue-600 hover:bg-pink-600 hover:text-white cursor-pointer hover:border-pink-600 w-40 mt-3 sm:mt-0">
                  Create Playlist
                </button>
              </div>
            </div>
          </div>
          <Topsongs />
          <Newrealsesongs />
          <Trending />
          <Popularartist />
          <Musicvideo />
          <Topalbum />
          <Moodplaylist />
          <Platform />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
