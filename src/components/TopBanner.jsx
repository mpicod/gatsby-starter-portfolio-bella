import React, { Component, useState } from "react";
import Modale from "./Modale";

const TopBanner = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTrueFalse = () => setIsOpen(!isOpen);

  const initialBanner = props.redirect == "pr" ? true : false;

  const [isBannerOpen, setIsBannerOpen] = useState(initialBanner);
  const toggleBannerTrueFalse = () => setIsBannerOpen(false);

  // console.log(props.redirect, "PROPS REDIRECT");
  // console.log(initialBanner, "INITIAL STATE");
  return (
    <div
      className={`relative bg-primary-600 ${isBannerOpen ? "flex" : "hidden"}`}
      style={{ zIndex: "99999" }}
    >
      <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">
              Big news! Préstige Réseaux devient ZenOps !
            </span>
            <span className="hidden md:inline">
              Big news! Préstige Réseaux devient ZenOps !
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <a
                href="#"
                className="text-white font-bold underline"
                onClick={() => setIsOpen(true)}
              >
                En savoir plus &rarr;
              </a>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
            onClick={toggleBannerTrueFalse}
            className="flex p-2 rounded-md hover:bg-primary-500 focus:outline-none focus:bg-primary-500 transition ease-in-out duration-150"
          >
            <svg
              className="h-6 w-6 text-white "
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <Modale isOpen={isOpen} onClick={toggleTrueFalse} />
    </div>
  );
};

export default TopBanner;
