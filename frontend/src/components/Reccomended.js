import React from "react";
import { useQuery } from "react-query";
import { newRequest } from "../utils/newRequest";
import ReccommendedCard from "./ReccommendedCard";

const Reccomended = () => {
  const { isLoading, data } = useQuery({
    queryKey: [Reccomended],
    queryFn: () =>
      newRequest.get(`/api/product/getReccomendedProducts`).then((res) => {
        return res.data;
      }),
  });
  return (
    <div className="w-full h-auto max-w-[1120px] mx-auto ">
      <div className="w-full py-6">
        <h4 className="font-bold p-5 border-b-2 border-b-gray">
          RECCOMENDED FOR YOU
        </h4>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1  mx-auto gap-2  ">
          {data &&
            data?.map((items) => (
              <ReccommendedCard items={items} isLoading={isLoading} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Reccomended;
