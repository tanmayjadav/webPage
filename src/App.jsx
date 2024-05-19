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
    <div className="bg-gray-800 h-screen w-screen flex overflow-x-hidden">
      <div id="loop">
                <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
                <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
                <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
            </div>
    <div className=" pt-16 bg-gray-800 h-screen w-screen flex ">
      <div className="LeftSection relative flex basis-4/6 flex-col border-r-2 border-white-500">
        <div className="pl-6 text-4xl font-bold TitleContainer text-orange-400">
            * Astrix.
        </div>
        <div className="absolute pt-16 inset-0 flex">
          <span className="text-6xl pl-10 font-bold w-24 text-gray-300 opacity-30 capitalize">
            ASTER X LOREM IS GREAT COMPANY LOREM IN ON.
          </span>
        </div>
        <div className="relative z-10 max-w-full flex items-center h-dvh">
          <CoroselContainer/>
          {/* <Slider /> */}
        </div>
      </div>
      <div className="rightSection p-6 border-l-2 border-white-500 relative z-10 basis-4/12 flex items-center flex-col">
      
        <div className="">
        <DetailsCard />
        <PhotoSet />
        <div className="flex gap-36 pt-12 pb-8">
          <div className="border-l-2 border-white-500 object-fit-cover rounded-lg overflow-hidden">
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