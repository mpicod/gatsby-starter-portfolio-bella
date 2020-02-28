import React, { Component } from "react";
import Map from "../images/map.png";

export default class ContactBanner extends Component {
  render() {
    return (
      <div className="relative bg-gray-900">
        <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover p-16"
            src={Map}
            alt="Support team"
          />
        </div>
        <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
              Commencez maintenant
            </div>
            <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
              Contactez-nous !
            </h2>
            <p className="mt-3 text-lg leading-7 text-gray-300">
              ZenOps360 et ses experts se tiennent à votre disposition pour
              répondre à vos demandes ! N'hésitez pas à nous laisser un message
              et nous reviendrons vers vous rapidement.
            </p>
            <form
              className="mt-8 sm:flex flex-col"
              method="POST"
              action="https://gatsby-starter-portfolio-bella.now.sh"
              // onSubmit=handle()
            >
              <input
                aria-label="Email address"
                type="email"
                required
                className="mt-3 appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
                placeholder="Enter your email"
              />
              <input
                aria-label="Message"
                type="textarea"
                required
                className="mt-3  appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
                placeholder="Enter your message"
              />
              <div className="my-3 mt-3 rounded-md shadow sm:flex-shrink-0">
                <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out sm:max-w-xs">
                  Envoyer le message
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
  /* <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Want product news and updates?
            <br className="hidden sm:inline" />
            <span className="text-primary-600">Sign up for our newsletter.</span>
          </h2>
          <form className="mt-8 sm:flex">
            <input
              aria-label="Email address"
              type="email"
              required
              className="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div> */
}
