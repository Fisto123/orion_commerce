import React from "react";
import Skeleton from "react-skeleton-loader";

const Loading = ({ count }) => {
  return (
    <div className=" ">
      <Skeleton count={count} color="#f5f5f5" width="1800px" />
    </div>
  );
};

export default Loading;
