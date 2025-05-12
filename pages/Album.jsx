import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Footer from "./Footer";
import { FiMenu, FiX } from "react-icons/fi";
import backg from "../src/assets/backg.png";

const Album = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!id) {
    return (
      <div
        className="text-white w-full h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${backg})` }}
      >
        No song selected
      </div>
    );
  }

  useEffect(() => {
    const fetchSongInfo = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
          {
            headers: {
              "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
              "X-RapidAPI-Key":
                "854660b5bemshdd177fb04fbf564p1bb694jsn9571180e5941",
            },
          }
        );
        setSong(response.data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch song details. Please try again later.");
      }
      setLoading(false);
    };

    fetchSongInfo();
  }, [id]);

  if (loading)
    return <div className="text-center text-white mt-10">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <div className="text-white w-full min-h-screen flex flex-col bg-neutral-800 relative">
      <div className="flex-grow flex flex-row">
        
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute top-4 left-4 bg-pink-500 text-white p-2 rounded-md md:hidden z-50"
        >
          {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        
        <div
        className={`absolute md:relative w-64 bg-neutral-800 h-fullpl-6 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out 
        border-r-3 border-b-3 rounded-r-2xl border-pink-500 shadow-[5px_0_5px_rgba(200,0,0,0.4)]`}
      >
        <Sidebar />
      </div>

        <div className="flex-1 p-4 mt-16 md:mt-0">
          {song && song.preview ? (
            <div className="w-full max-w-2xl mx-auto">
              <img
                src={song.album.cover_big || "/fallback.jpg"}
                alt={song.title}
                className="w-full h-auto object-cover rounded-md"
              />

              <h1 className="text-2xl sm:text-3xl font-bold mt-4">
                {song.title}
              </h1>
              <p className="text-gray-400 text-sm sm:text-base mt-1">
                By {song.artist.name}
              </p>
              <p className="mt-2 text-base">{song.album.title}</p>
              <audio controls className="w-full mt-4">
                <source src={song.preview} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <a
                href={song.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-pink-500 hover:underline"
              >
                Listen on Deezer
              </a>
            </div>
          ) : (
            <div className="text-center text-white text-xl">
              No song is currently playing
            </div>
          )}
        </div>
      </div>

      
      <div className="w-full bg-neutral-800 ">
        <Footer />
      </div>
    </div>
  );
};

export default Album;
