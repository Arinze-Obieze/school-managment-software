import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { MdDownloading } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
function AdminNavbar() {
  return (
    <>
      <div className="flex border-b-2 justify-between place-items-center">
        <div className="bg-orange-500 flex space-x-4 py-4 px-2">
          <div className="rounded-full p-2 bg-white">
            <LuGraduationCap />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Admin</h1>
          </div>
        </div>

        {/* left */}
        <div className="flex text-2xl space-x-4 pr-2">
          <div>
            <MdDownloading />
          </div>
          <div>
            <IoMdMenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNavbar;
