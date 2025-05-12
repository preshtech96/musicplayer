import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-6 bg-gray-950 text-white">
      <div className="md:hidden flex justify-between items-center">
        <h1 className="text-[30px] font-bold text-pink-500">Melodies</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      <div className={`flex flex-col md:flex-row justify-between p-10 gap-10 ${menuOpen ? "block" : "hidden md:flex"}`}>
      
        <div className="max-w-sm">
          <h1 className="text-lg font-bold">About</h1>
          <p className="text-sm mt-2">
            Melodies is a music streaming website that has been running for over
            <span className="font-semibold text-pink-500"> 5 years</span>. It is one of the most famous music
            platforms worldwide. Here, you can listen to and download songs for
            free. For unlimited access, consider our <span className="font-semibold">Premium Plan</span>.
          </p>
        </div>
        
        {/* Navigation Section */}
        <div className="flex flex-row md:flex-row gap-8">
          <div>
            <h1 className="text-[20px] font-bold">Melodies</h1>
            <ul className="text-sm mt-2 space-y-1">
              <li>Songs</li>
              <li>Radio</li>
              <li>Podcast</li>
            </ul>
          </div>
          
          <div>
            <h1 className="text-[20px] font-bold">Access</h1>
            <ul className="text-sm mt-2 space-y-1">
              <li>Explore</li>
              <Link to={"/Artist"} className="cursor-pointer hover:text-pink-500">
              <li>Artists</li>
              </Link>
              <Link to={"/Playlists"} className="cursor-pointer hover:text-pink-500">
              <li>Playlists</li>
              </Link>
              <Link to={"/Albums"} className="cursor-pointer hover:text-pink-500">
              <li>Albums</li>
              </Link>
              <li>Trending</li>
            </ul>
          </div>
          
          <div>
            <h1 className="text-[20px] font-bold">Contact</h1>
            <ul className="text-sm mt-2 space-y-1">
              <Link to={"/About"} className="cursor-pointer hover:text-pink-500">
              <li>About</li>
              </Link>
              
              <li>Policy</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        
        {/* Social Media Section */}
        <div className="text-center">
          <h1 className="text-[40px] font-bold text-pink-500 hidden md:block ">Melodies</h1>
          <div className="flex gap-4 mt-3 text-xl justify-center">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaYoutube className="cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>
      <h3 className="text-center ">All right reserve © copy right 2025 by Pre<span className="text-orange-800 font-bold">ST</span>ech.</h3>
    </div>
  );  
};

export default Footer;