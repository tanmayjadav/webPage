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
    <div className="bg-gray-800 h-screen w-screen flex overflow-hidden">

    <div className="p-6 bg-gray-800 h-screen w-screen flex overflow-hidden">
      <div className="LeftSection relative flex basis-8/12 flex-col">
        <div className="text-4xl font-bold TitleContainer text-orange-400">
            * Astrix.
        </div>
        <div className="absolute pt-16 inset-0 flex">
          <span className="text-6xl font-bold w-24 text-gray-300 opacity-30 capitalize">
            ASTER X LOREM IS GREAT COMPANY LOREM IN ON GO.
          </span>
        </div>
        <div className="relative z-10 m-[-40px] max-w-full flex items-center h-dvh">
          <CoroselContainer/>
          {/* <Slider /> */}
        </div>
      </div>
      <div className="rightSection relative z-10 basis-4/12 flex overflow-hidden items-center flex-col">
      <div className="loop-container overflow-hidden h-screen absolute z-50 left-26">
        <h1 className="loop-text ">Your Text Goes Here Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam natus eos velit excepturi omnis distinctio, hic reprehenderit temporibus similique, dicta assumenda commodi impedit!</h1>
      </div>
        <div className="">
        <DetailsCard />
        <PhotoSet />
        <div className="flex gap-48 pt-16 ">
          <div className="object-fit-cover rounded-lg overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2023/02/28/01/51/qr-code-7819654_640.jpg" alt="" style={{ width: '100px', height: '100px' }}/>
          </div>
          <Button className="bg-yellow-600">
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