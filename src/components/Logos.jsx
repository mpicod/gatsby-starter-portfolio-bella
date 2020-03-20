import React, { Component } from "react";
import Suse from "../images/suse.png";
import SS from "../images/ss.svg";
import Sophos from "../images/sophos.svg";
import Micro from "../images/micro.svg";

export default class Logos extends Component {
  render() {
    return (
      <div className="bg-gray-900">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base leading-6 font-semibold text-gray-600 tracking-wider">
            {this.props.title && this.props.title}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8 flex flex-wrap items-center justify-center">
            {console.log("logos", this.props.items)}
            {this.props.items?.map(i => (
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 partner-logo">
                {console.log("logo", i)}
                <img
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out"
                  data-sal-duration="500"
                  className="max-h-12 "
                  src={i.partner_logo.url}
                  alt={i.partner_logo.alt}
                />
              </div>
            ))}
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
