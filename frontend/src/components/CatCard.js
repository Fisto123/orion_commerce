import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import { Card } from "@mui/material";
import { slicy } from "../utils/slice";
import Loading from "./Loading";
const CatCard = ({ items, isLoading, title }) => {
  return (
    <div className=" max-w-[940px] mx-auto h-[40vh]  mt-10">
      <div className="pb-10">
        <h4 className="font-bold border-b-2 border-b-black">{title}</h4>
      </div>

      {isLoading ? (
        <Loading count={10} />
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {items &&
            items.map((item) => (
              <SwiperSlide>
                <Link to={`./product/${item._id}`}>
                  <Card
                    sx={{
                      width: "200px",
                      position: "relative",
                      minHeight: "270px",
                    }}
                  >
                    <img
                      src={item?.images[0]}
                      alt=""
                      className="w-[172px] max-h-[142px]  mx-auto"
                    />
                    <MdOutlineFavoriteBorder className="absolute top-0 right-0 m-2 text-black font-bold " />
                    <h2 className="text-gray-600 text-xs font-bold m-2 ">
                      {slicy(item?.desc)}
                    </h2>
                    <div className="flex justify-between text-sm m-1 py-2 font-bold">
                      <h4 className="text-black font-bold text-xs ">
                        ${item?.price}
                      </h4>
                      <h4 className="text-gray-600 text-xs">{item?.inStock}</h4>
                    </div>
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default CatCard;
