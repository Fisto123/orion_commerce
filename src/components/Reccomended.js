import React from "react";
import ReccommendedCard from "./ReccommendedCard";

const Reccomended = () => {
  return (
    <div className="w-full h-auto max-w-[1120px] mx-auto ">
      <div className="w-full py-6">
        <h4 className="font-bold p-5 border-2 border-b-black">
          RECCOMENDED FOR YOU
        </h4>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2  mx-auto gap-2 ">
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
          <ReccommendedCard />
        </div>
      </div>
    </div>
  );
};

export default Reccomended;
