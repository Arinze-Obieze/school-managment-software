import React from "react";
import { FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <div className="space-y-8">
      <div className="py-8 text-center space-y-4 mx-8  text-white bg-indigo-500">
        <FaFacebook className="mx-auto text-3xl" />
        <h2>Like us on facebook</h2>
        <h2 className="text-xl font-semibold">30,000</h2>
      </div>
      <div className="py-8 text-center space-y-4 mx-8  text-white bg-blue-600">
        <FaFacebook className="mx-auto text-3xl" />
        <h2>Like us on facebook</h2>
        <h2 className="text-xl font-semibold">30,000</h2>
      </div>
      <div className="py-8 text-center space-y-4 mx-8  text-white bg-red-500">
        <FaFacebook className="mx-auto text-3xl" />
        <h2>Like us on facebook</h2>
        <h2 className="text-xl font-semibold">30,000</h2>
      </div>
      <div className="py-8 text-center space-y-4 mx-8  text-white bg-blue-600">
        <FaFacebook className="mx-auto text-3xl" />
        <h2>Like us on facebook</h2>
        <h2 className="text-xl font-semibold">30,000</h2>
      </div>

      <div>
        <h2 className="text-gray-700 mx-4 text-center">
          © Copyrights akkhor 2019. All rights reserved. Designed by EnDer
        </h2>
      </div>
    </div>
  );
}

export default Footer;
