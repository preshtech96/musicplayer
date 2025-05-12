import React from "react";
import download from "../src/assets/download.jpg";
import plus from "../src/assets/plus.png";

const PopularArtist = () => {
  return (
    <section className="">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pl-10 pt-10 pb-10 text-white">
        Popular <span className="text-pink-600">Artist</span>
      </h1>
      <article className="flex flex-col gap-2 pb-10 px-4 sm:px-10 items-center ">
        <div className="flex flex-row gap-5 items-center">
        <div className="flex flex-col items-center gap-2">
          <img
            src={download}
            alt="Popular Artist"
            className="w-32 h-32 rounded-full object-cover"
          />
          <p className="text-white font-bold ">Artist Name</p>
          </div>
            
            <div className="flex flex-col items-center sm:items-start mt-5 sm:mt-0">
              <button className="text-white bg-neutral-700 rounded-full p-5 cursor-pointer">
                <img src={plus} alt="Add icon" className="w-5 h-5" />
              </button>
              <p className="text-white font-bold mt-2 sm:mt-0">View All</p>
            </div>
          
        </div>
      </article>
    </section>
  );
};

export default PopularArtist;
