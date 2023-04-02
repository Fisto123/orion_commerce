import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { Error } from "../components/Error";
import Loading from "../components/Loading";
import ReccommendedCard from "../components/ReccommendedCard";
import { newRequest } from "../utils/newRequest";

const Search = () => {
  const { search } = useLocation();
  const location = useLocation();
  const parts = location.search.split("=");
  const searchItem = parts[parts.length - 1];
  const { isLoading, error, data } = useQuery({
    queryKey: [search],
    queryFn: () =>
      search &&
      newRequest.get(`/api/product/searchProduct${search}`).then((res) => {
        return res.data;
      }),
  });

  if (error) {
    return (
      <Error message={`${error.response.data.message} for ${searchItem} `} />
    );
  }
  if (isLoading) {
    return <Loading count={30} />;
  }
  return (
    <div className="w-full h-auto max-w-[1120px] mx-auto ">
      <div className="w-full py-6">
        <h4 className="font-bold p-5 border-b-2 border-b-black uppercase">
          SEARCH RESULTS FOR <span className="text-red-600">{searchItem}</span>
        </h4>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1  mx-auto gap-2 ">
          {data &&
            data?.map((items) => (
              <ReccommendedCard items={items} isLoading={isLoading} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
