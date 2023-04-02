import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Error } from "../components/Error";
import Footer2 from "../components/Footer2";
import LeftProduct from "../components/LeftProduct";
import Loading from "../components/Loading";
import ReccommendedCard from "../components/ReccommendedCard";
import RightProduct from "../components/RightProduct";
import { newRequest } from "../utils/newRequest";

const Product = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: [id],
    queryFn: () =>
      newRequest.get(`/api/product/getProductId/${id}`).then((res) => {
        return res.data;
      }),
  });
  const {
    isLoading: isLoasingRec,
    error: isError,
    data: isDataRec,
  } = useQuery({
    queryKey: [data?.category],
    queryFn: () =>
      newRequest
        .get(`/api/product/getProductCat?cat=${data.category}`)
        .then((res) => {
          return res.data;
        }),
  });
  if (isLoading) {
    return (
      <div className="mx-auto text-center items-center">
        <Loading count={100} />
      </div>
    );
  }
  if (error) {
    return <Error message={error.response.data.message} />;
  }
  if (isError) {
    return <Error message={error.response.data.message} />;
  }

  return (
    <div className="w-full md:h-[130vh] pb-20 ">
      <div className="max-w-[1240px]  mx-auto ">
        <div className=" mt-10 py-7 max-w-[60px] ">
          <ul className="flex justify-between font-semi-bold text-gray-600 gap-2 font-semibold">
            <li>Home</li>
            <li>/</li>
            <li className="cursor-pointer" onClick={() => nav("/products")}>
              Products
            </li>
            <li>/</li>
            <li>Product</li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 bg-white h-auto gap-6">
          {error ? (
            <h3>error</h3>
          ) : (
            <>
              {" "}
              <div className="h-full w-full">
                <LeftProduct product={data} error={error} />
              </div>
              <div className="h-full w-full bg-white shadow-xl rounded-lg">
                <RightProduct product={data} />
              </div>
            </>
          )}
        </div>
        <div className="mt-20 py-20 ">
          <h4 className="font-bold p-5 border-2 border-b-black">
            RECCOMENDED FOR YOU
          </h4>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 p-2 ">
            {isDataRec &&
              isDataRec.map((items) => (
                <ReccommendedCard items={items} isLoading={isLoasingRec} />
              ))}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Product;
