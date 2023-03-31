import { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { HiOutlineInformationCircle } from "react-icons/hi";

export default function Banner({ item }) {

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        <img
          src={item.image}
          alt={item.name}
          className="object-fill"
        />
      </div>

      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-white">
        {item.name}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
        {item.description}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7 cursor-not-allowed" />
          Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setShowModal(true);
            setCurrentitem(item);
          }}
        >
          More Info <HiOutlineInformationCircle className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}