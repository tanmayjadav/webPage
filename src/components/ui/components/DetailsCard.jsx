import React from 'react'
import { LocationMarkerIcon, ClockIcon } from '@heroicons/react/outline';

const DetailsCard = () => {
  return (
    <div className="bg-gray-800 text-white max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg p-4 sm:p-6 md:p-8 pb-8 mx-auto">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Explore Your First Event</h2>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold my-2 pt-4 sm:pt-6 md:pt-8 pb-4">Event Name</h1>
  <div className="flex items-center my-1">
    <LocationMarkerIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
    <span className="ml-2 text-lg sm:text-xl md:text-2xl font-semibold">Venue</span>
  </div>
  <div className="flex items-center my-1">
    <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
    <span className="ml-2 text-lg sm:text-xl md:text-2xl font-semibold">04/3/2024 @19:00</span>
  </div>
  <p className="text-white my-4 text-sm sm:text-base md:text-lg font-semibold">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.
  </p>
  <h3 className="text-2xl sm:text-3xl md:text-4xl pt-4 font-semibold">Artist Lineup</h3>
  {/* Add artist names here */}
</div>
  )
}

export default DetailsCard
