import React, { useState } from "react";
import { Button } from "@/components/ui/button";
// import { LocationMarkerIcon, ClockIcon } from '@heroicons/react/outline';
import DetailsCard from "./components/ui/components/DetailsCard";
import PhotoSet from "./components/ui/components/PhotoSet";
import {CoroselContainer} from "./components/ui/components/CoroselContainer";
import Slider from "./components/ui/components/Slider";
function App() {
  return (
    <div className="container p-6 bg-gray-800 h-screen w-full flex">
      <div className="LeftSection relative flex basis-8/12 flex-col">
        <div className="text-4xl font-bold TitleContainer text-orange-400">
            * Astrix.
        </div>
        <div className="absolute pt-32 inset-0 flex">
          <span className="text-6xl font-bold w-12 text-gray-300 opacity-30 capitalize">
            ASTER X LOREM IS GREAT COMPANY.
          </span>
        </div>
        <div className="relative z-10 p-4">
          <CoroselContainer></CoroselContainer>
          {/* <Slider /> */}
        </div>
      </div>
      <div className="rightSection basis-4/12 flex justify-center items-center flex-col">
        <DetailsCard />
        <PhotoSet />
      </div>
    </div>
  );
}

export default App;
