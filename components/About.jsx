import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "../pages/Footer";
import { FiMenu, FiX } from "react-icons/fi";
import backg from "../src/assets/backg.png"; 

const About = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="flex min-h-screen relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${backg})` }}
    >
      
      <div className="absolute inset-0 "></div>

     
      <div
        className={`absolute md:relative w-64 bg-neutral-800 h-fullpl-6 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out 
        border-r-3 border-b-3 rounded-r-2xl border-pink-500 shadow-[5px_0_5px_rgba(200,0,0,0.4)]`}
      >
        <Sidebar />
      </div>

      
      <div className="flex flex-col flex-1 min-h-screen relative z-10">
       
        <div className="md:hidden p-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white focus:outline-none"
          >
            {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        <h1 className="font-bold text-2xl text-center text-pink-500">About</h1>
        <section className="max-w-4xl mx-auto p-6 text-center flex-1 text-white">
        
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-100">
              Discover, Stream, and Enjoy Music Like Never Before
            </h1>
            <p className="text-gray-300 mt-4">
              In the digital age, music is more accessible than ever. Our platform offers an immersive and seamless
              listening experience for casual listeners, music enthusiasts, and artists looking for exposure.
            </p>
          </div>

          
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Key Features:</h2>
            <ul className="space-y-3">
              <li><strong className="text-pink-500">🎵 Vast Music Library:</strong> Explore diverse tracks across multiple genres, from chart-topping hits to indie gems.</li>
              <li><strong className="text-pink-500">📜 Personalized Playlists:</strong> Enjoy curated playlists tailored to your taste or create your own for any occasion.</li>
              <li><strong className="text-pink-500">🌟 Artist Discovery:</strong> Find emerging artists, learn about their journey, and connect with their latest releases.</li>
              <li><strong className="text-pink-500">💬 Interactive Experience:</strong> Engage with other music lovers through community features, reviews, and real-time sharing.</li>
              <li><strong className="text-pink-500">🚀 Seamless Streaming:</strong> Experience high-quality audio streaming across all your devices.</li>
            </ul>
          </div>

         
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">For Artists:</h2>
            <p className="text-gray-300">
              Our platform isn’t just for listeners—it’s a space where artists can upload, promote, and gain insights into their audience.
              With analytics tools and promotional features, independent musicians can reach a wider audience and grow their fan base.
            </p>
          </div>

        
          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Why Choose Us?</h2>
            <p className="text-gray-300">
              Music is more than just sound—it’s an experience. We provide an intuitive interface, ad-free premium options, and a
              space where both listeners and artists can thrive. Join us today and redefine the way you experience music!
            </p>
          </div>
        </section>

        <Footer />
      </div>     
    </div>
  );
};

export default About;