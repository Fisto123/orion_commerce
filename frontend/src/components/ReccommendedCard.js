import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { slicy } from "../utils/slice";
import Loading from "./Loading";

const ReccommendedCard = ({ items, isLoading }) => {
  return (
    <Link to={`/product/${items?._id}`}>
      {isLoading ? (
        <Loading count={30} />
      ) : (
        <div className="max-w-[940px] mx-auto h-[40vh] py-20 mt-10 ">
          <Card
            sx={{
              width: "183px",
              position: "relative",
              height: "234px",
              margin: "auto",
            }}
          >
            <CardMedia
              sx={{ height: 114, width: 171 }}
              image={items?.images[0]}
              title="green iguana"
            />
            <h3 className="absolute top-0 right-0">
              <MdOutlineFavoriteBorder size={20} className="m-2" />
            </h3>
            <Typography
              sx={{
                color: "gray",
                fontWeight: "bold",
                fontSize: "0.7rem",
                marginTop: "10px",
                margin: "3px",
                paddingTop: "10px",
              }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {slicy(items?.desc)}
            </Typography>
            <div className="bg-red-500 bottom-0 ">
              <div className="flex justify-between text-sm m-1 py-2 font-bold absolute bottom-0 w-full">
                <h4 className="text-black font-bold text-xs ">
                  ${items?.price}
                </h4>
                <h4 className="text-gray-600 text-xs mr-4">{items?.inStock}</h4>
              </div>
            </div>
          </Card>
        </div>
      )}
    </Link>
  );
};

export default ReccommendedCard;
