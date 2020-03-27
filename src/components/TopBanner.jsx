import React, { Component, useState } from "react";
import Modale from "./Modale";

const TopBanner = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTrueFalse = () => setIsOpen(!isOpen);

  const initialBanner = props.redirect == "pr" ? true : false;

  const [isBannerOpen, setIsBannerOpen] = useState(initialBanner);
  const toggleBannerTrueFalse = () => setIsBannerOpen(false);

  console.log(props.redirect, "PROPS REDIRECT");
  console.log(initialBanner, "INITIAL STATE");
  return (
    <div
      className={`relative bg-primary-600 ${isBannerOpen ? "flex" : "hidden"}`}
      style={{ zIndex: "99999" }}
    >
      <div class="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="pr-16 sm:text-center sm:px-16">
          <p class="font-medium text-white">
            <span class="md:hidden">
              Big news! Préstige Réseaux devient ZenOps !
            </span>
            <span class="hidden md:inline">
              Big news! Préstige Réseaux devient ZenOps !
            </span>
            <span class="block sm:ml-2 sm:inline-block">
              <a
                href="#"
                class="text-white font-bold underline"
                onClick={() => setIsOpen(true)}
              >
                En savoir plus &rarr;
              </a>
            </span>
          </p>
        </div>
        <div class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
            onClick={toggleBannerTrueFalse}
            class="flex p-2 rounded-md hover:bg-primary-500 focus:outline-none focus:bg-primary-500 transition ease-in-out duration-150"
          >
            <svg
              class="h-6 w-6 text-white"
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
