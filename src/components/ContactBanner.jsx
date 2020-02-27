import React, { Component } from "react";
import Map from "../images/map.png";

export default class ContactBanner extends Component {
  render() {
    return (
      <div class="relative bg-gray-800">
        <div class="h-56 bg-primary-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            class="w-full h-full object-cover"
            src={Map}
            alt="Support team"
          />
        </div>
        <div class="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div class="md:ml-auto md:w-1/2 md:pl-10">
            <div class="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
              Commencez maintenant
            </div>
            <h2 class="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
              Contactez-nous !
            </h2>
            <p class="mt-3 text-lg leading-7 text-gray-300">
              ZenOps360 et ses experts se tiennent à votre disposition pour
              répondre à vos demandes ! N'hésitez pas à nous laisser un message
              et nous reviendrons vers vous rapidement.
            </p>
            <form class="mt-8 sm:flex flex-col">
              <input
                aria-label="Email address"
                type="email"
                required
                class="mt-3 appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
                placeholder="Enter your email"
              />
              <input
                aria-label="Message"
                type="textarea"
                required
                class="mt-3  appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
                placeholder="Enter your message"
              />
              <div class="my-3 mt-3 rounded-md shadow sm:flex-shrink-0">
                <button class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out sm:max-w-xs">
                  Notify me
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div class="bg-white">
        <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Want product news and updates?
            <br class="hidden sm:inline" />
            <span class="text-primary-600">Sign up for our newsletter.</span>
          </h2>
          <form class="mt-8 sm:flex">
            <input
              aria-label="Email address"
              type="email"
              required
              class="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div> */
}
