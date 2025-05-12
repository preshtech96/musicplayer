import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { FaBars } from "react-icons/fa"; 
import backg from "../src/assets/backg.png";
import Sidebar from "../components/Sidebar";
import Footer from "../pages/Footer";
import preshtech from "../src/assets/preshtech.png";
import melodies from "../src/assets/melodies.png";

const AboutUs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="flex min-h-screen relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${backg})` }}
    >
     
      <div
        className={`absolute md:relative w-64 bg-neutral-800 pl-6 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out 
        border-b-3 border-r-3 border-pink-500 rounded-r-2xl shadow-[5px_0_5px_rgba(200,0,0,0.4)]`}
      >
      
       <Sidebar />
      </div>

     
      <div className="flex flex-col flex-1">
        
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden absolute top-4 left-4 text-white focus:outline-none"
        >
          {sidebarOpen ? <FiX size={24} /> : <FaBars size={24} />}
        </button>

       
        <div className="flex flex-col flex-1 items-center justify-start p-4 md:p-12">
          <section className="w-full flex items-start justify-center text-center">
            <div className="max-w-3xl mx-auto bg-gray-900 bg-opacity-90 text-white p-6 sm:p-8 md:p-12 rounded-lg shadow-lg mt-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-pink-500">
                About Us
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4">
                Welcome to{" "}
                <span className="text-pink-500 font-semibold">Melodies</span>,
                where passion meets melody. We bring you the latest and greatest
                in music, from trending hits to underground gems. Whether you're
                here to discover new artists, explore different genres, or
                simply vibe to your favorite tunes, we've got you covered.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6">
                Music is more than sound; it's an experience. Join us as we
                celebrate the rhythm of life and make every beat count.
              </p>

              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-pink-500">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6">
                Our vision is to create a global community where music is the
                language that unites people across all cultures. We aim to inspire
                and empower individuals to discover the beauty of music in its
                purest form, transcending borders and bringing people together to
                celebrate life’s most powerful rhythms.
              </p>

              {/* Our Mission */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-pink-500">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                Our mission is to provide a platform that allows artists to
                showcase their work and reach audiences who will appreciate their
                craft. We strive to provide a seamless experience for listeners
                to explore, engage, and enjoy music that speaks to their soul.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <img src={preshtech} alt="Preshtech" className="h-16 sm:h-20" />
                <img src={melodies} alt="Melodies" className="h-16 sm:h-20" />
              </div>
            </div>
          </section>
        </div>

        {/* Footer spans the full width of the right content */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
