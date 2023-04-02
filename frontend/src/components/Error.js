import React from "react";
import { Link } from "react-router-dom";

export const Error = ({ message }) => {
  return (
    <div className="text-center text-3xl py-10 font-bold text-red-500 uppercase">
      <h3 className="text-red-600 font-bold">{message}</h3>
      <div className="py-3">
        <Link to="/">
          <button className="bg-orange-700 p-4 text-white rounded-full text-sm text-center">
            GO TO HOME PAGE
          </button>
        </Link>
      </div>
      <img src="/img/error.png " className="mx-auto" alt="" />
    </div>
  );
};
