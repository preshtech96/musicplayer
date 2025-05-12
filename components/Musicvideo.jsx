import React from "react";
import download from "../src/assets/download.jpg";
import plus from "../src/assets/plus.png";

const MusicVideo = () => {
  return (
    <div className="pb-10 px-4 sm:px-10">
      <h1 className="text-3xl sm:text-4xl font-bold pt-10 pb-5 text-white">
        Music <span className="text-pink-600">Video</span>
      </h1>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center justify-center">
        <div className="bg-neutral-700 p-4 rounded-lg w-full sm:w-[300px]">
          <img
            src={download}
            alt="Song cover"
            className="w-full h-40 rounded-lg object-cover"
          />
          <div className="flex flex-col gap-3 mt-3 sm:mt-2">
            <h3 className="text-white text-lg sm:text-xl">Song Title</h3>
            <div className="text-sm text-white flex flex-col sm:flex-row justify-between gap-2 pb-2">
              <p>Artist Name</p>
              <p>5m Views</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start mt-5 sm:mt-0 w-full sm:w-auto">
          <button className="text-white bg-neutral-700 rounded-full p-4 cursor-pointer">
            <img src={plus} alt="Add icon" className="w-5 h-5" />
          </button>
          <p className="text-white font-bold mt-2 sm:mt-0 text-sm sm:text-base">View All</p>
        </div>
      </div>
    </div>
  );
};

export default MusicVideo;
