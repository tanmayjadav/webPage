import React from 'react'
import { LocationMarkerIcon, ClockIcon } from '@heroicons/react/outline';

const DetailsCard = () => {
  return (
    <div className="bg-gray-800 text-white  max-w-sm rounded-lg p-8">
          <h2 className="text-lg font-semibold">Explore Your First Event</h2>
          <h1 className="text-2xl font-bold my-2">Event Name</h1>
          <div className="flex items-center my-1">
            <LocationMarkerIcon className="h-5 w-5" />
            <span className="ml-2">Venue</span>
          </div>
          <div className="flex items-center my-1">
            <ClockIcon className="h-5 w-5" />
            <span className="ml-2">04/3/2024 @19:00</span>
          </div>
          <p className="text-gray-400 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lorem
            massa in morbi et sed ipsum. Pellentesque mattis condimentum ut
            nulla.
          </p>
          <h3 className="text-lg font-semibold">Artist Lineup</h3>
          {/* Add artist names here */}
        </div>
  )
}

export default DetailsCard
