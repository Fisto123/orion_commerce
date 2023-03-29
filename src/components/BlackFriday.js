import React from "react";
const myStyle = {
  backgroundImage: `url(${"/img/Rec2.png"})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
};
const BlackFriday = () => {
  return (
    <div className="h-[400px] w-full" style={myStyle}>
      <div className="max-w-[1240px] mx-auto">
        <div className="grid md:grid-cols-3">
          <div className="flex flex-col col-span-2 px-10  w-full">
            <h3 className="font-bold text-5xl py-8 mt-6">
              Black Friday deal is here
            </h3>
            <p className="text-xl font-bold">
              Lorem ipsidiumm Lorem ipsidiumm Lorem ipsidiummLorem
              ipsidiummLorem ipsidiumm
            </p>
            <p className="py-4 mt-4 font-bold">Lorem lo</p>
            <button className="bg-white w-[192px] font-bold p-3 rounded-lg items-center text-green-300">
              Go Now
            </button>
          </div>
          <div className="w-full   ">
            <img
              src="./img/bgg2.png  "
              className=" hidden lg:block w-full bg-cover  "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackFriday;
