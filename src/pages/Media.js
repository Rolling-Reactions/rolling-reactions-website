import React from "react";
import test1 from "../test1.jpeg";
import test2 from "../test2.jpeg";
import test3 from "../test3.jpeg";
import { Carousel, Typography } from "@material-tailwind/react";

const Media = () => {
  return (
    <div id="media" className="">
      <Carousel>
        <div className="relative h-screen w-full overflow-hidden ">
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black">
            <div className="w-3/4 text-center lg:w-2/4">
            <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl lg:text-4xl lg:text-5xl py-5"
              >
                Media
              </Typography>
              <img
                className="h-fit"
                src={test3}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black">
            <div className="w-3/4 text-center lg:w-2/4">
            <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl lg:text-4xl lg:text-5xl py-5"
              >
                Media
              </Typography>
              <img
                className="h-fit"
                src={test1}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black">
            <div className="w-3/4 text-center lg:w-2/4">
            <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl lg:text-4xl lg:text-5xl py-5"
              >
                Media
              </Typography>
              <img
                className="h-fit"
                src={test2}
                alt=""
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Media;
