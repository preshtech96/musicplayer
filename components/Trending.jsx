import React from 'react';
import download from '../src/assets/download.jpg';
import love2 from '../src/assets/love2.png';
import plus from '../src/assets/plus.png';

const Trending = () => {
    return (
        <div className="pb-10 px-4 sm:px-10 ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pt-10 pb-6 text-white">
                Trending <span className="text-pink-600">Songs</span>
            </h1>
            {/* Responsive Table Wrapper */}
            <div className="overflow-x-auto mb-2">
                <table className="w-full min-w-[300px] sm:min-w-[500px] md:min-w-[600px]">
                    <thead>
                        <tr className="bg-neutral-800 text-white text-xs sm:text-sm">
                            <th className="px-2 sm:px-4 py-2"></th>
                            <th className="px-2 sm:px-4 py-2"></th>
                            <th className="px-2 sm:px-4 py-2 font-bold">Released Date</th>
                            <th className="px-2 sm:px-4 py-2 font-bold">Album</th>
                            <th className="px-2 sm:px-4 py-2 font-bold">Time</th>
                        </tr>
                    </thead>
                    <tbody className="bg-neutral-700 border-2 border-neutral-700">
                        <tr className="text-center text-xs sm:text-sm ">
                            <td className="px-2 sm:px-4 py-2 text-white">#1</td>
                            <td className="px-2 sm:px-4 py-2 flex items-center space-x-2">
                                <img src={download} alt="Album Cover" className="h-8 w-8 sm:h-10 sm:w-10 rounded-md" />
                                <div className="text-left">
                                    <h3 className="text-white text-xs sm:text-base">Song Name</h3>
                                    <h5 className="text-gray-300 text-[10px] sm:text-sm">Artist</h5>
                                </div>
                            </td>
                            <td className="px-2 sm:px-4 py-2 text-white">Nov. 28, 2025</td>
                            <td className="px-2 sm:px-4 py-2 text-white">Album Playing</td>
                            <td className="px-2 sm:px-4 py-2">
                                <div className="flex items-center justify-center gap-1 sm:gap-2 text-white">
                                    <img src={love2} alt="Like Icon" className="h-4 w-4 sm:h-5 sm:w-5" />
                                    <span>2.9</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex flex-row gap-5 justify-center items-center '>
            <button className='text-white  cursor-pointer flex flex-row gap-2  bg-neutral-700 rounded-10 p-3 rounded-[5px]'>
              <img src={plus} alt="" className='w-5 h-5'/>
              <p className='text-white'>View all</p>
            </button>
            
          </div>
        </div>
    );
};

export default Trending;
