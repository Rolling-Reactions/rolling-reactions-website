import React from "react";

const Homepage = () => {
  return (
    <div className="flex h-screen w-screen bg-black justify-center items-center">
      <div className="w-1/2 h-1/2">
        <iframe
          title="demo"
          className="h-full w-full"
          src="https://www.youtube.com/embed/x70-3mPJzX0"
        />
      </div>
    </div>
  );
};

export default Homepage;
