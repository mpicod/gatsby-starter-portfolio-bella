import React, { Component } from "react";
import Map from "../images/map.png";
import ContactForm from "./ContactForm";

export default class ContactBanner extends Component {
  render() {
    return (
      <div class="bg-gray-900 ">
        <div class="pt-12 sm:pt-16 lg:pt-24">
          <div class="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto lg:max-w-none">
              {/* <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                Commencez maintenant
              </h2> */}
              <p class="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                Contactez-nous !
              </p>
              <p class="mt-2 text-xl leading-7 text-gray-300">
                ZenOps et ses experts se tiennent à votre disposition pour
                répondre à vos demandes ! N'hésitez pas à nous laisser un
                message et nous reviendrons vers vous rapidement.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-8 pb-12 bg-gray-900 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
          <div class="relative">
            <div class="absolute inset-0 h-3/4 bg-gray-900"></div>
            <div class="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 items-start">
                <div class="rounded-lg shadow-lg overflow-hidden">
                  <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6 bg-img">
                    <div>
                      <span class="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-gray-200 text-primary-600">
                        ZenOps paris
                      </span>
                    </div>
                    <div class="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                      <span class="ml-1 text-2xl leading-8 font-medium text-gray-900">
                        1 Place de la Pyramide, 92911 Puteaux
                      </span>
                    </div>
                    <p class="mt-5 text-lg leading-7 text-gray-500">
                      01 45 06 24 14
                    </p>
                  </div>
                  <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6 bg-img">
                    <div>
                      <span class="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-gray-200 text-primary-600">
                        ZenOps Valence
                      </span>
                    </div>
                    <div class="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                      <span class="ml-1 text-2xl leading-8 font-medium text-gray-900">
                        1 Place de la Pyramide, 92911 Valence
                      </span>
                    </div>
                    <p class="mt-5 text-lg leading-7 text-gray-500">
                      01 45 06 24 14
                    </p>
                  </div>
                  <div class="px-6 pt-6 pb-8 bg-gray-100 sm:p-10 sm:pt-6"></div>
                </div>
                <div class="mt-4 rounded-lg shadow-lg overflow-hidden lg:mt-0 self-stretch">
                  <div class="bg-gray-100 sm:p-10 p-8 h-full">
                    <ContactForm></ContactForm>
                  </div>
                  {/* <div class="px-6 pt-6 pb-8 bg-gray-100 sm:p-10 sm:pt-6"></div> */}
                </div>
              </div>
            </div>
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
