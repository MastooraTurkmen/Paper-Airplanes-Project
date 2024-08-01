import React from "react";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const pathname = useLocation();

  return (
    <div className="navbar font-pop bg-[#1D1E2F] w-full px-10 lg:px-20 flex justify-between items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-[#E87900] border-none btn-circle lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#1D1E2F] rounded-md z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              {navigation.map((item) => (
                <a
                  id="menuItems"
                  key={item.id}
                  href={item.url}
                  className={`font-pop overflow-hidden ${
                    item.url == pathname.hash
                      ? "z-2 text-white"
                      : "text-white/70"
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </li>
          </ul>
        </div>
        <a className="text-white text-lg lg:text-xl font-semibold ml-2">Paper Airplanes</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((item) => (
            <li>
              <a
                id="menuItems"
                key={item.id}
                href={item.url}
                className={`font-pop overflow-hidden ${
                  item.url == pathname.hash ? "z-2 text-white" : "text-white/70"
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="bg-[#E87900] border-none text-white rounded-full text-sm font-pop px-3 py-1">
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
