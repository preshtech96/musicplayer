import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FiMenu, FiX, FiUser, FiFacebook, FiTwitter, FiMail, FiLink } from "react-icons/fi";
import { Link, useLocation, useParams } from "react-router-dom";
import arrow from "../src/assets/arrow.png";
import Download from "../src/assets/download.jpg";
import Popular from "../components/Popular";
import Artistalbum from "../components/Artistalbum";
import Singlesongs from "../components/Singlesongs";
import Footer from "./Footer";
import useArtistStore from "../src/api/Artistapi"; // ✅ confirm path

const Artist = () => {
  const { artistId } = useParams(); // from route /artist/:artistId
  const { artist, fetchArtistById, loading, error } = useArtistStore();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (artistId) fetchArtistById(artistId);
  }, [artistId, fetchArtistById]);

  const handleCopyLink = () => {
    const musicLink = `${window.location.href}?music=true`;
    navigator.clipboard.writeText(musicLink);
    alert("Music link copied to clipboard!");
  };

  console.log(artist)
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-neutral-800">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden text-white text-3xl cursor-pointer absolute top-4 left-2 z-50"
      >
        {sidebarOpen ? <FiX /> : <FiMenu />}
      </button>

      <h1 className="md:hidden font-bold text-2xl text-center text-pink-500 mt-12">Discover</h1>

      {/* Sidebar */}
      <div
        className={`absolute md:relative w-64 bg-neutral-800 h-full pl-6 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out border-r-3 border-b-3 rounded-r-2xl border-pink-500 shadow-[5px_0_5px_rgba(200,0,0,0.4)]`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-4 md:p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4 relative">
          <Link to="/">
            <img src={arrow} className="h-8 w-8 md:h-10 md:w-10 cursor-pointer" alt="Back" />
          </Link>
          <div className="flex gap-2 md:gap-4 relative">
            {/* Share Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShareOpen(!shareOpen)}
                className="text-sm md:text-lg px-3 py-1 md:px-4 md:py-2 rounded-md cursor-pointer transition-colors text-gray-300 hover:text-pink-500 hover:bg-gray-800"
              >
                Share
              </button>
              {shareOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-gray-800 text-white rounded-md shadow-lg z-50">
                  <Link to="/share/facebook" className="flex items-center px-4 py-2 hover:bg-pink-500">
                    <FiFacebook className="mr-2" /> Facebook
                  </Link>
                  <Link to="/share/twitter" className="flex items-center px-4 py-2 hover:bg-pink-500">
                    <FiTwitter className="mr-2" /> Twitter
                  </Link>
                  <Link to="/share/email" className="flex items-center px-4 py-2 hover:bg-pink-500">
                    <FiMail className="mr-2" /> Email
                  </Link>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 hover:bg-pink-500"
                  >
                    <FiLink className="mr-2" /> WhatsApp
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center w-full text-left px-4 py-2 hover:bg-pink-500"
                  >
                    <FiLink className="mr-2" /> Copy Link
                  </button>
                </div>
              )}
            </div>

            {/* Nav */}
            <NavLink to="/About" label="About" active={location.pathname === "/About"} />
            <NavLink to="/Premium" label="Premium" active={location.pathname === "/Premium"} />
            <Link
              to="/Profile"
              className={`p-2 rounded-md transition-colors ${
                location.pathname === "/Profile"
                  ? "bg-pink-500 text-white"
                  : "text-gray-300 hover:text-pink-500 hover:bg-gray-800"
              }`}
            >
              <FiUser size={24} />
            </Link>
          </div>
        </div>

        {/* Hero Banner */}
        <div
          className="flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl text-white p-10 md:p-[150px] mx-4 md:mx-10"
          style={{ backgroundImage: `url(${artist?.picture_xl || Download})` }}
        >
          {loading ? (
            <h1 className="text-3xl md:text-[60px] font-bold text-center text-gray-400">Loading...</h1>
          ) : error ? (
            <h1 className="text-3xl md:text-[60px] font-bold text-center text-red-500">{error}</h1>
          ) : (
            <h1 className="text-3xl md:text-[60px] font-bold text-white text-center sm:text-left">
              {artist?.name || "Unknown Artist"}
            </h1>
          )}
        </div>
        {artist.map((item)=>{
          <h1 key={item}>{artist.tittle}</h1>
        })}

        {/* Artist Content */}
        <div className="flex-1">
          <Popular />
          <Artistalbum />
          <Singlesongs />
          <Footer />
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ to, label, active }) => (
  <Link
    to={to}
    className={`text-sm md:text-lg px-3 py-1 md:px-4 md:py-2 rounded-md transition-colors ${
      active ? "bg-pink-500 text-white" : "text-gray-300 hover:text-pink-500 hover:bg-gray-800"
    }`}
  >
    {label}
  </Link>
);

export default Artist;
