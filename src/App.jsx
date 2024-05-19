import React, { useState } from "react";
import { Button } from "@/components/ui/button";
// import { LocationMarkerIcon, ClockIcon } from '@heroicons/react/outline';
import DetailsCard from "./components/ui/components/DetailsCard";
import PhotoSet from "./components/ui/components/PhotoSet";
import {CoroselContainer} from "./components/ui/components/CoroselContainer";
import Slider from "./components/ui/components/Slider";
import "./App.css"
function App() {
  return (
    <div className="bg-gray-800 h-screen w-screen flex flex-col lg:flex-row overflow-x-hidden">
  <div id="loop" className="w-full lg:w-auto lg:pl-6 py-4 lg:py-0 lg:border-r-2 border-gray-500">
    <h1 className="text-white"><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>ASTRIX.</i></span></h1>
    <h1 className="text-white"><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>ASTRIX.</i></span></h1>
    <h1 className="text-white"><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>ASTRIX.</i></span></h1>
  </div>
  <div className="pt-16 bg-gray-800 h-auto lg:h-screen w-full flex flex-col lg:flex-row">
    <div className="LeftSection relative flex flex-col basis-full lg:basis-4/6 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-500">
      <div className="pl-6 text-4xl font-bold TitleContainer text-orange-400">
        * Astrix.
      </div>
      <div className="absolute pt-16 inset-0 flex">
        <span className="text-6xl pl-10 font-bold w-24 text-gray-300 opacity-30 capitalize">
          ASTER X LOREM IS GREAT COMPANY LOREM IN ON.
        </span>
      </div>
      <div className="relative z-10 max-w-full flex items-center h-auto lg:h-dvh sm:justify-center ">
        <CoroselContainer />
        {/* <Slider /> */}
      </div>
    </div>
    <div className="rightSection p-6 border-t-2 lg:border-t-0 lg:border-l-2 border-gray-500 relative z-10 basis-full lg:basis-2/6 flex items-center flex-col">
      <div className="flex flex-col items-center">
        <DetailsCard />
        <PhotoSet />
        <div className="flex gap-28 justify-between pt-12 pb-8">
          <div className="border-l-2 border-gray-500 object-cover rounded-lg overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2023/02/28/01/51/qr-code-7819654_640.jpg" alt="" className="w-24 h-24 lg:w-32 lg:h-32" />
          </div>
          <Button className="bg-yellow-600 p-4 mt-4 lg:mt-0">
            Join Waitlist
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;