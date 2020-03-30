import React, { Component } from "react";
import ContactForm from "./ContactForm";
import { Date, Link, RichText } from "prismic-reactjs";

export default class ContactBanner extends Component {
  render() {
    return (
      <div className="bg-gray-900" id="contact">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto lg:max-w-none">
              {/* <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                Commencez maintenant
              </h2> */}
              <p className="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                {this.props.title}
              </p>
              <div className="mt-2 text-xl leading-7 text-gray-300 richtext">
                {/* ZenOps et ses experts se tiennent à votre disposition pour
                répondre à vos demandes ! N'hésitez pas à nous laisser un
                message et nous reviendrons vers vous rapidement. */}
                <RichText render={this.props.desc} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pb-12 bg-gray-900 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
          <div className="relative">
            <div className="absolute inset-0 h-3/4 bg-gray-900"></div>
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 items-start">
                <div className="rounded-lg shadow-lg overflow-hidden">
                  {this.props.data.map(d => (
                    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6 bg-img">
                      <div>
                        <span
                          itemprop="name"
                          className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide bg-gray-200 text-primary-600"
                        >
                          {d.adress_label.text}
                        </span>
                      </div>
                      <div className="mt-4 flex items-baseline leading-none font-extrabold">
                        <span className="ml-1 text-xl leading-8 font-medium text-gray-900 richtext">
                          <RichText render={d.adress_details.raw} />
                        </span>
                      </div>
                      <div
                        itemscope
                        itemtype="https://schema.org/LocalBusiness"
                      >
                        <span
                          itemprop="telephone"
                          className="mt-5 text-lg leading-7 text-gray-500 hover:text-primary-900"
                        >
                          <a href={`tel:+${d.telephone.text}`}>
                            {d.telephone.text}
                          </a>
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className="px-6 pt-6 pb-8 bg-gray-100 sm:p-10 sm:pt-6"></div>
                </div>
                <div className="mt-4 rounded-lg shadow-lg overflow-hidden lg:mt-0 self-stretch">
                  <div className="bg-gray-100 sm:p-10 p-8 h-full">
                    <ContactForm></ContactForm>
                  </div>
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
