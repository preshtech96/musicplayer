import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import backg from "../src/assets/backg.png";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const profileData = {
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    banner: "https://via.placeholder.com/600x200", // Replace with actual banner URL
    name: "John Doe",
    bio: "Music lover and front-end developer passionate about creating user-friendly web applications.",
    location: "San Francisco, CA",
    genres: ["Rock", "Jazz", "Pop", "Blues", "Electronic"],
    songs: [
      "Bohemian Rhapsody",
      "Imagine",
      "Shape of You",
      "Hotel California",
      "Billie Jean",
    ],
    socialLinks: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
  };

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([
        ...chatHistory,
        { sender: profileData.name, text: message },
      ]);
      setMessage("");
    }
  };

  // useEffect to handle the 5-second delay before logout
  useEffect(() => {
    if (isLoggingOut) {
      const timer = setTimeout(() => {
        // Redirect to home page after 5 seconds
        navigate("/"); // Navigate to the home page
      }, 3000);

      // Cleanup the timer if the component is unmounted or if isLoggingOut is false
      return () => clearTimeout(timer);
    }
  }, [isLoggingOut, navigate]);

  const handleLogout = () => {
    setIsLoggingOut(true);
  };

  return (
    <div
      className="w-full min-h-screen bg-gray-100 flex flex-col items-center relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backg})` }}
    >
      {/* Navigation Bar */}
      <nav className="w-full  py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Profile</h1>
        <div className="flex space-x-4">
          <button className="text-white font-bold hover:text-pink-500 cursor-pointer">Settings</button>
          <button
            className="text-white font-bold hover:text-red-700 cursor-pointer"
            onClick={handleLogout} // Trigger logout
          >
            Log Out
          </button>
        </div>
      </nav>

      {/* Banner */}
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${profileData.banner})` }}
      ></div>

      {/* Profile Card */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center relative mb-6">
        <img
          src={profileData.image}
          alt={profileData.name}
          className="w-28 h-28 rounded-full border-4 border-white shadow-md"
        />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          {profileData.name.slice(0, 10)}...
        </h2>
        <p className="text-gray-600 text-center px-4">{profileData.bio}</p>
        <p className="text-gray-500 mt-2">📍 {profileData.location}</p>

        {/* Favorite Genres */}
        <div className="mt-6 w-full px-6">
          <h3 className="text-lg font-semibold text-gray-700">Favorite Genres</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {profileData.genres.map((genre, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Favorite Songs */}
        <div className="mt-6 w-full px-6">
          <h3 className="text-lg font-semibold text-gray-700">Favorite Songs</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            {profileData.songs.map((song, index) => (
              <li key={index} className="border-b py-1">
                {song}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="mt-6 w-full px-6 flex space-x-4">
          {Object.entries(profileData.socialLinks).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </a>
          ))}
        </div>
      </div>

      {/* Contact Service Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        Contact Support
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-6 bg-white w-96 h-96 shadow-lg rounded-lg p-4 flex flex-col">
          <div className="flex-1 overflow-auto mb-4">
            <div className="space-y-2">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`${
                    chat.sender === profileData.name ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`${
                      chat.sender === profileData.name
                        ? "bg-blue-100"
                        : "bg-gray-100"
                    } p-2 rounded-lg max-w-xs mx-auto`}
                  >
                    <span className="font-semibold">{chat.sender}: </span>
                    {chat.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded-l-lg"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
      <Footer className="w-full bg-gray-800 text-white py-4 text-center mt-auto" />
    </div>
  );
};

export default Profile;
