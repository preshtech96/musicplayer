import React from "react";
import download from "../src/assets/download.jpg";
import plus from "../src/assets/plus.png";

const Genmusic = () => {
  return (
    <div className="pb-10 px-4 sm:px-10 ">
      <h1 className="text-3xl sm:text-4xl font-bold pt-10 pb-5 text-white text-center sm:text-left">
        Music <span className="text-pink-600">Genres</span>
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-center gap-4 sm:gap-10">
        <div className="w-full sm:w-[300px] flex justify-center sm:justify-center">
          <img
            src={download}
            alt="Song cover"
            className="w-60 h-40 sm:w-72 sm:h-48 rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start sm:mt-0 w-full sm:w-auto">
          <button className="text-white bg-neutral-700 rounded-full p-4 cursor-pointer hover:bg-neutral-600 transition">
            <img src={plus} alt="Add icon" className="w-5 h-5" />
          </button>
          <p className="text-white font-bold mt-2 sm:mt-0 text-sm sm:text-base text-center sm:text-left">View All</p>
        </div>
      </div>
    </div>
  );
};

export default Genmusic;
