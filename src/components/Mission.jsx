import React, { Component } from "react";
import Team from "../images/team.jpg";
import Pattern from "../images/pattern.svg";
import { Date, Link, RichText } from "prismic-reactjs";

export default class Mission extends Component {
  render() {
    return (
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <div className="absolute absolute-pattern">
            <img src={Pattern} />
          </div>
          <div className="relative">
            <h3
              className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
              data-sal-duration="500"
            >
              {this.props.title.text}
            </h3>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <ul className="mt-10">
                  {this.props.data.map(m => (
                    <li className="my-10" data-sal="slide-up">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                            <svg
                              className="h-6 w-6"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium text-gray-900">
                            {m.mission_title1.text}
                          </h5>
                          <p className="mt-2 text-base leading-6 text-gray-500 richtext">
                            <RichText render={m.mission_text.raw} />
                            {/* {console.log("missions", m.mission_text)} */}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <svg
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width="784"
                  height="404"
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="svg-pattern-squares-4"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="784"
                    height="404"
                    fill="url(#svg-pattern-squares-4)"
                  />
                </svg>
                <img
                  className="relative mx-auto"
                  width="490"
                  src={Team}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
