import React from "react";

export default function HeaderTitle() {
  return (
    <div className="flex flex-col justify-center items-center 2xl:float-left 2xl:ml-20 lg:mx-auto 3xl:float-none">
      <h1 className=" mt-20 font-Bungee text-3xl text-white text-center font-bold sm:text-4xl md:text-5xl lg:mt-5 xl:text-6xl 2xl:mt-64 3xl:text-8xl 3xl:mt-12 3xl:mr-12">
        Mmemoirs
      </h1>
      <h2 className="font-Festive text-sm sm:text-lg md:text-xl xl:text-2xl 3xl:text-5xl 3xl:mr-12 text-white text-center font-light ">
        Nostalgia Re-lived
      </h2>
    </div>
  );
}
