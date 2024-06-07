// components/Card.js
import React from "react";
import { FaChildren } from "react-icons/fa6";

const Card = ({ icon: Icon, title, value, bgColor, iconColor }) => {
  return (
    <div className="bg-white w-fit flex justify-between space-x-20 px-12 py-4">
      <div className={`rounded-full ${bgColor} p-4`}>
        <Icon className={`${iconColor} text-2xl`} />
      </div>
      <div>
        <h2 className="text-gray-600">{title}</h2>
        <h1>{value}</h1>
      </div>
    </div>
  );
};

export default Card;
