import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import useMusicStore from "../Storemusicapi"; // Adjust path as needed
import srrch from "../src/assets/srrch.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { query, setQuery, searchSongs, songs } = useMusicStore();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
  
    if (value.trim() !== "") {
      searchSongs();
    } else {
      useMusicStore.setState({ songs: [] }); // Clear song list when input is empty
    }
  };
  
  const handleSongClick = (songId) => {
    navigate(`/song/${songId}`); 
  };

  return (
    <nav className="text-white p-5 relative">
      <div className="flex justify-between items-center">
        
        <div className="flex items-center border border-neutral-800 rounded-lg bg-neutral-700 px-3 py-2 relative">
          <img src={srrch} alt="Search" className="w-6 h-6 mr-2" />
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search for music, artists..."
            className="bg-transparent w-40 sm:w-60 md:w-72 lg:w-80 h-8 outline-none placeholder-gray-400 text-white"
          />
          {/* Overlay for search results */}
          {songs.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-neutral-800 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
              {songs.map((song) => (
                <div 
                  key={song.id} 
                  className="p-2 hover:bg-neutral-600 cursor-pointer border-b border-neutral-700"
                  onClick={() => handleSongClick(song.id)}
                >
                  {song.title} - {song.artist.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-lg">
          <Link to="/AboutUs" className="hover:text-pink-500">About Us</Link>
          <Link to="/ContactUs" className="hover:text-pink-500">Contact Us</Link>
          <Link to="/Premium" className="hover:text-pink-500">Premium</Link>
        </div>

        
        <div className="hidden md:flex gap-4">
          <button className="border-2 border-pink-500 px-4 py-2 rounded-md text-pink-500 hover:bg-pink-500 hover:text-white">
            Login
          </button>
          <button className="border-2 border-pink-500 px-4 py-2 rounded-md text-pink-500 hover:bg-pink-500 hover:text-white">
            Signup
          </button>
        </div>

        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="mt-4 flex flex-col items-center gap-4 md:hidden">
          <Link to="/AboutUs" className="hover:text-pink-500">About Us</Link>
          <Link to="/ContactUs" className="hover:text-pink-500">Contact Us</Link>
          <Link to="/Premium" className="hover:text-pink-500">Premium</Link>
          <button className="border-2 border-pink-500 px-4 py-2 rounded-md text-pink-500 hover:bg-pink-500 hover:text-white">
            Login
          </button>
          <button className="border-2 border-pink-500 px-4 py-2 rounded-md text-pink-500 hover:bg-pink-500 hover:text-white">
            Signup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
