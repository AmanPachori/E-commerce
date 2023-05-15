"use client";
import React, { useState } from "react";
import Image from "next/image";

import LogoWhite from "../../Garden360Images/LogoWhiteBG.png";
const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <>
      <nav className="bg-white font-sans shadow-lg max-w-screen-l  ">
        <div className="max-w-screen-l flex    items-center justify-between mx-auto px-5 py-2">
          <div className="flex items-center my-auto w-50  ">
            <a href="#" className="flex items-center my-auto w-50  ">
              <div className="h-8 mr-3">
                <Image
                  src={LogoWhite}
                  width={40}
                  height={40}
                  alt="Flowbite Logo"
                />
              </div>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-dark mr-5 ">
                Garden 360
              </span>
            </a>
            <div className="ml-8 relative self-center ">
              <button
                className=" text-black font-black flex justify-between w-full px-4 py-2 text-center text-dark-700 bg-white focus:outline-none focus:shadow-outline-blue"
                onClick={toggleMenu}
              >
                More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 self-center ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute z-10 w-56 mt-2 space-y-2 bg-white rounded-sm shadow-lg overflow-y-auto max-h-60 my-3">
                  <ul className="py-1">
                    <li className="px-4 py-2 hover:bg-gray-50">
                      <a href="#">Option 1</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-50">
                      <a href="#">Option 2</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-50">
                      <a href="#">Option 3</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="mx-10" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-3 md:p-0 mt-4 md:flex-row ">
              <li className="flex self-center">
                <input
                  type="Search"
                  className="w-full h-7 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="Search..."
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </li>
              <li className="mx-2">
                <button className="px-2 py-2 border border-gray-250  text-black font-semibold flex justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mx-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  0
                </button>
              </li>
              <li>
                <button className="px-2 py-2 border border-gray-250  font-semibold flex justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>

                  <div className="relative" onClick={toggleDropdown}>
                    <button className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 self-center "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                    {isOpen1 && (
                      <div
                        className="absolute origin-top right-0.5 ml-2 w-56 space-y-2 mt-2.5 bg-white border border-gray-200 font-normal shadow-lg"
                        onClick={toggleDropdown}
                      >
                        <button className=" w-full px-4 py-2 hover:bg-gray-100 flex font-semibold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mx-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                          </svg>
                          Login
                        </button>
                        <button className="flex w-full px-4 py-2 hover:bg-gray-100 font-semibold mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mx-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                            />
                          </svg>
                          Orders
                        </button>
                      </div>
                    )}
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Index;
