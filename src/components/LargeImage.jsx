import React, { Component } from "react";
import Img from "gatsby-image";

export default class Logos extends Component {
  render() {
    return (
      <div className="bg-gray-900">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-3xl leading-6 font-semibold text-gray-600 tracking-wider">
            {this.props.title && this.props.title}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center">
            <div className="max-w-screen-xl py-8  lg:px-16 xl:px-24 bg-gray-50 ">
              <img
                // data-sal="slide-up"
                // data-sal-delay="300"
                // data-sal-easing="ease-in-out"
                // data-sal-duration="500"
                className="max-w-full"
                src={this.props.img[0].partner_logo.url}
                // alt={i.partner_logo.alt}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="bg-gray-900">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div
              className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
              data-sal-duration="500"
            >
              <img className=" w-1/2 lg:w-full" src={Suse} alt="Tuple" />
            </div>
            <div
              className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
              data-sal-duration="500"
            >
              <img className="w-1/2 lg:w-full" src={SS} alt="Mirage" />
            </div>
            <div
              className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
              data-sal-duration="500"
            >
              <img
                className="h-12 w-1/2 lg:w-full"
                src={Sophos}
                alt="Transistor"
              />
            </div>
            <div
              className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
              data-sal-duration="500"
            >
              <img
                className="h-12 w-1/2 lg:w-full"
                src={Sophos}
                alt="Transistor"
              />
            </div>
            <div
              className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
              data-sal-duration="500"
            >
              <img
                className="h-12 w-1/2 lg:w-full"
                src={Micro}
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div> */
}
