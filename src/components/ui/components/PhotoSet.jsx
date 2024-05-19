const PhotoSet = () => {
  return (
    <div className="flex justify-center items-center ">
      {/* Photo 2 with blue overlay and text */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1598386867671-2f46bd1f68b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9jayUyMHN0YXJ8ZW58MHx8MHx8fDI%3D"
          alt="Photo 2"
          className="w-32 h-32 object-cover rounded-lg "
        />
        {/* <div className="absolute inset-0 bg-white bg-opacity-20 flex justify-center items-center">
        <span className="text-white text-xl font-bold">STAY HOME STAY SAFE</span>
        </div> */}
      </div>
      {/* Photo 1 with red overlay */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9jayUyMHN0YXJ8ZW58MHx8MHx8fDI%3D"
          alt="Photo 1"
          className="w-36 h-40 object-cover rounded-lg "
        />
        {/* <div className="absolute inset-0 bg-red-500 bg-opacity-50"></div> */}
      </div>

      {/* Photo 3 with green overlay */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1598387993211-5c4c0fda4248?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9jayUyMHN0YXJ8ZW58MHx8MHx8fDI%3D"
          alt="Photo 3"
          className="w-32 h-32 object-cover rounded-lg "
        />
        {/* <div className="absolute inset-0 bg-green-500 bg-opacity-50"></div> */}
      </div>
    </div>
  );
};

export default PhotoSet;
