import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const myStyle = {
  backgroundImage: `url(${"/img/bg.png"})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
};
const Hero = () => {
  return (
    <div className="lg:h-[100vh] w-full" style={myStyle}>
      <div className="max-w-[1140px] mx-auto py-20">
        <div className="grid md:grid-cols-2 ">
          <div className="flex flex-col px-2 w-full">
            <h3 className="text-white md:text-xl sm:mx-auto md:mx-0 sm:text-sm md:pb-8 sm:pb-3 pt-4">
              GAMING
            </h3>
            <h1 className="text-white sm:mx-auto md:mx-0 lg:text-6xl md:4xl sm:text-2xl font-bold md:py-3">
              PLAYSTATION 5
            </h1>
            <h3 className="text-white sm:mx-auto md:mx-0 md:text-xl sm:text-sm font-semibold md:py-3 md:pb-6 sm:py-0">
              Want something to take boring hangouts and have fun playing your
              favourite game
            </h3>
            <h3 className="md:text-3xl text-white md:py-5 sm:py-3  md:mx-0  sm:mx-auto">
              N450,000
            </h3>
            <div className="sm:mx-auto flex gap-3  md:mx-0 ">
              <button className="items-center  text-white sm:mx-auto md:mx-0 bg-blue-400 md:p-5 sm:p-2 rounded-full mr-4 hover:bg-blue-500">
                Add to cart
              </button>
              <button className="items-center  text-white  md:p-5 sm:p-3 border-2 border-blue-400 py-3 hover:bg-blue-400">
                More like this
              </button>
            </div>
          </div>
          <div className="  lg:w-full hidden md:flex md:w-[350px] ">
            <img
              src="./img/hreo1.png"
              alt=""
              className="w-full h-[500px] background-none "
            />
          </div>
        </div>
        <div className=" h-[132px] absolute bottom-0 max-w-[1060px] w-full p-3 mx-auto bg-[#56497A] items-center justify-center rounded-lg ">
          <div className="flex  justify-between items-center py-7 ">
            <div className="flex gap-4 text-white px-4">
              <div className="flex flex-col">
                <div className="font-bold ">PREV</div>
                <div>
                  <BsArrowLeft size={30} />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold">NEXT</div>
                <div>
                  <BsArrowRight size={30} className="" />
                </div>
              </div>
            </div>

            <div className="px-5">
              <button className="border-2 border-white text-white px-4 items-center text-center rounded-md">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
