import React, { useEffect, useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { Error } from "../components/Error";
import Footer2 from "../components/Footer2";
import ReccommendedCard from "../components/ReccommendedCard";
import { newRequest } from "../utils/newRequest";
import Loading from "../components/Loading";

const Products = () => {
  const location = useLocation();
  const [sort, setSort] = useState("createdAt");
  const parts = location.search.split("=");
  const category = parts[parts.length - 1];
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [category, sort],
    queryFn: () =>
      newRequest
        .get(
          `/api/product/getProductCat?cat=${category}&min=${min}&max=${max}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });
  if (isLoading) {
    return <Loading count={30} />;
  }
  if (error) {
    return <Error message={error.response.data.message} />;
  }
  const handleSort = (e) => {
    e.preventDefault();
    setSort(e.target.value);
    refetch();
  };
  console.log(sort);

  const fetchData = () => {
    refetch();
  };

  return (
    <div className="w-full h-auto pb-20 ">
      <div className="max-w-[1240px]  mx-auto ">
        <div className=" mt-10 py-7 max-w-[60px] ">
          <ul className="flex justify-between font-semi-bold text-gray-600 gap-2 font-semibold">
            <li>Home</li>
            <li>/</li>
            <li>Products</li>
          </ul>
        </div>
        <div className="grid md:grid-cols-3 bg-white h-auto gap-7">
          <div className="md:col-span-1 sm:col-span-2 h-full sm:w-full w-full shadow-xl rounded-lg p-4 xs:mx-auto">
            <div className="flex flex-col">
              <h3 className="text-gray-600 font-bold py-2  sm:mx-auto md:m-0">
                CATEGORIES
              </h3>
              <p className="font-bold text-black text-2xl py-2  sm:mx-auto md:m-0 uppercase">
                {category ? category : "All products"}
              </p>
              <p className="text-sm text-gray-600 pb-4  sm:mx-auto md:m-0">
                Mobile accessories
              </p>
              <p className="text-sm text-gray-600 py-3  sm:mx-auto md:m-0 ">
                Smart Phones
              </p>
              <p className="pb-4 font-gray-600  sm:mx-auto md:m-0">Laptops</p>
            </div>
            <div className="flex flex-col py-4 max-w-[400px] sm:mx-auto md:m-0">
              <h3 className="font-bold pb-4">Price</h3>
              <div className="flex justify-between">
                <div className="">
                  <input
                    onChange={(e) => setMin(e.target.value)}
                    placeholder="Min"
                    type="number"
                    className=" sm:w-full border p-1 border-gray-400 md:w-[95px] rounded-md"
                  />
                </div>
                <div>
                  <h3 className="font-bold px-3">to</h3>
                </div>
                <div>
                  <input
                    onChange={(e) => setMax(e.target.value)}
                    placeholder="Max"
                    type="number"
                    className=" sm:w-full p-1 border border-gray-400 md:w-[95px] rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="w-full my-2 py-5 max-w-[400px] mx-auto md:m-0">
              <button
                className="   text-white  bg-[#33A0FF] p-3 w-full rounded-lg"
                onClick={fetchData}
              >
                APPLY
              </button>
            </div>
            <div className="py-3 max-w-[400px] mx-auto">
              <div className="flex justify-between">
                <h3 className="font-bold">Brand</h3>
                <BsArrowDownCircle />
              </div>
              <div className="flex justify-between py-9">
                <h3 className="font-bold">Color</h3>
                <BsArrowDownCircle />
              </div>
            </div>
          </div>
          <div className="col-span-2 h-full w-full shadow-xl rounded-lg pb-20">
            <div className="flex flex-col shadow-lg p-4 m-3 rounded-lg">
              <div className="flex justify-between">
                <h3 className="text-gray-600 font-bold">
                  {data?.length} product(s) found
                </h3>
                <select onChange={handleSort}>
                  <option value="disabled">sort </option>

                  <option value="price">sort by price</option>
                  <option value="createdAt">sort by arrival</option>
                </select>
              </div>
            </div>
            <div className="py-4">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 p-2 ">
                {data &&
                  data.map((items) => (
                    <ReccommendedCard items={items} isLoading={isLoading} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
