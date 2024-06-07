import Layout from "@/components/Admin/layout";
import Barchart from "@/components/BarChart";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/Card";
import DoughnutChart from "@/components/DoughnutChart";
import React from "react";
import { FaChildren } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import Footer from "@/components/Admin/Footer";
function Admin() {
  // Example data
  const cardData = [
    {
      icon: FaChildren,
      title: "Students",
      value: 15000,
      bgColor: "bg-green-200",
      iconColor: "text-green-700",
    },
    {
      icon: FaChildren,
      title: "Students",
      value: 15000,
      bgColor: "bg-green-200",
      iconColor: "text-green-700",
    },
    {
      icon: FaChildren,
      title: "Students",
      value: 15000,
      bgColor: "bg-blue-200",
      iconColor: "text-blue-700",
    },
    {
      icon: FaChildren,
      title: "Students",
      value: 15000,
      bgColor: "bg-green-200",
      iconColor: "text-green-700",
    },
  ];

  return (
    <Layout>
      <div className="bg-gray-100 ">
        <div>
          <Breadcrumb />
        </div>

        <div className="flex justify-center items-center flex-wrap">
          {cardData.map((data, index) => (
            <div key={index} className="m-2">
              <Card
                icon={data.icon}
                title={data.title}
                value={data.value}
                bgColor={data.bgColor}
                iconColor={data.iconColor}
              />
            </div>
          ))}
        </div>

        <Barchart />

        <div className="flex bg-white justify-center items-center ">
          <div>
            <div className="flex pt-4 pb-8 place-items-center justify-between">
              <h2 className="font-semibold text-xl">Students</h2>
              <div>
                <BsThreeDots />
              </div>
            </div>
            <div className="px-4">
              {" "}
              <DoughnutChart />
            </div>
            <div className="flex w-full pb-8 max-w-2xl justify-between pt-4 text-sm mx-auto mt-20">
              <div className="space-y-2 px-4">
                <div className="bg-blue-600 h-2 w-16 rounded-md"></div>
                <h2 className="text-sm text-gray-600">Female Students</h2>
                <h2 className="font-semibold text-lg">45,000</h2>
              </div>
              <div className="border-l px-4 border-gray-300"></div>{" "}
              {/* Vertical Separator */}
              <div className="space-y-2">
                <div className="bg-red-600 h-2 w-16 rounded-md"></div>
                <h2 className="text-sm text-gray-600">Male Students</h2>
                <h2 className="font-semibold text-lg">55,000</h2>
              </div>
            </div>
          </div>
        </div>

        {/* website traffic */}
        <div className="my-8 bg-white py-8 px-2 mx-2">
          <div className="">
            <div>
              <div className="flex place-items-center justify-between">
                <h1>Website Traffic</h1>
                <div>
                  <BsThreeDots />
                </div>
              </div>

              <h2 className="text-gray-700">Unique Visitors</h2>
              <h3 className="font-semibold text-xl">2590</h3>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-center px-4 pt-4">
              <div className="flex w-full max-w-xl h-2 ">
                <div className="flex-1 bg-cyan-500 rounded-l-xl"></div>
                <div className="flex-1 bg-indigo-500"></div>
                <div className="flex-1 bg-yellow-500 rounded-r-xl"></div>
                <div className="flex-1 bg-red-500 rounded-r-xl"></div>
              </div>
            </div>{" "}
          </div>
          <div className="grid-cols-1 space-y-2 py-4">
            <div className="flex justify-between  border-b-2 border-gray-100 py-1 place-items-center px-4">
              <div className="flex place-items-center">
                {" "}
                <div className="w-2 h-2 bg-blue-600 mr-2 rounded-full"></div>
                <h2>Direct</h2>
              </div>
              <h2>12,890</h2>
              <h2>50%</h2>
            </div>

            <div className="flex justify-between place-items-center px-4 border-b-2 border-gray-100 py-1 ">
              <div className="flex place-items-center">
                {" "}
                <div className="w-2 h-2 bg-blue-600 mr-2 rounded-full"></div>
                <h2>Direct</h2>
              </div>
              <h2>12,890</h2>
              <h2>50%</h2>
            </div>
            <div className="flex justify-between place-items-center border-b-2 border-gray-100 py-1 px-4">
              <div className="flex place-items-center">
                {" "}
                <div className="w-2 h-2 bg-blue-600 mr-2 rounded-full"></div>
                <h2>Direct</h2>
              </div>
              <h2>12,890</h2>
              <h2>50%</h2>
            </div>
            <div className="flex justify-between place-items-center border-b-2 border-gray-100 py-1 px-4">
              <div className="flex place-items-center">
                {" "}
                <div className="w-2 h-2 bg-blue-600 mr-2 rounded-full"></div>
                <h2>Direct</h2>
              </div>
              <h2>12,890</h2>
              <h2>50%</h2>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <Footer />
        </div>
      </div>
    </Layout>
  );
}

export default Admin;
