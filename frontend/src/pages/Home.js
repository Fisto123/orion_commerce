import React from "react";
import { useQuery } from "react-query";
import BlackFriday from "../components/BlackFriday";
import CatCard from "../components/CatCard";
import Categories from "../components/Categories";
import Deal from "../components/Deal";
import { Error } from "../components/Error";
import Footer2 from "../components/Footer2";
import Hero from "../components/Hero";
import Reccomended from "../components/Reccomended";
import { newRequest } from "../utils/newRequest";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      newRequest.get(`/api/product/getProduct`).then((res) => {
        return res.data;
      }),
  });
  if (error) {
    return <Error message={error.response.data.message} />;
  }
  const filteredData = data?.filter((item) => item?.price < 200);
  return (
    <div>
      <Hero />
      <CatCard title="New Arrivals" items={data} isLoading={isLoading} />
      <Deal />
      <Categories />
      <CatCard
        title="Products under $200"
        items={filteredData}
        isLoading={isLoading}
      />
      <BlackFriday />
      <Reccomended />
      <Footer2 />
    </div>
  );
};

export default Home;
