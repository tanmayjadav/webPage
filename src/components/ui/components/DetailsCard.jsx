import React from 'react'
import { LocationMarkerIcon, ClockIcon } from '@heroicons/react/outline';

const DetailsCard = () => {
  return (
    <div className="bg-gray-800 text-white max-w-sm rounded-lg pb-8">
          <h2 className="text-2xl font-bold">Explore Your First Event</h2>
          <h1 className="text-5xl font-bold my-2 pt-8 pb-4">Event Name</h1>
          <div className="flex font-semibold items-center my-1">
            <LocationMarkerIcon className="h-5 w-5" />
            <span className="ml-2 font-semibold">Venue</span>
          </div>
          <div className="flex items-center my-1 font-semibold">
            <ClockIcon className="h-5 w-5 " />
            <span className="ml-2">04/3/2024 @19:00</span>
          </div>
          <p className="text-white my-4 text-sm font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lorem
            massa in morbi et sed ipsum. Pellentesque mattis condimentum ut
            nulla.
          </p>
          <h3 className="text-2xl pt-4 font-semibold">Artist Lineup</h3>
          {/* Add artist names here */}
        </div>
  )
}

export default DetailsCard
