import React, { Component } from "react";
import { Date, Link, RichText } from "prismic-reactjs";

export default class Stats extends Component {
  render() {
    return (
      <div className="bg-gray-900 pt-12 mt-12 mb-12 sm:pt-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl leading-9 font-bold text-primary-900 sm:text-4xl sm:leading-10 "
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
              data-sal-duration="500"
            >
              {this.props.title && this.props.title}
            </h2>
            <div
              className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4 richtext"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
              data-sal-duration="500"
            >
              {this.props.description && (
                <RichText render={this.props.description} />
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-gray-900 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  {this.props.items &&
                    this.props.items.map(i => {
                      return (
                        <div
                          className="border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
                          // data-sal="slide-up"
                          // data-sal-delay="300"
                          // data-sal-easing="ease-in-out"
                          // data-sal-duration={500 + i * 100}
                        >
                          <p
                            className="text-5xl leading-none font-extrabold text-primary-600"
                            data-sal="slide-up"
                            data-sal-delay={300 + i * 100}
                            data-sal-easing="ease-in-out"
                            data-sal-duration="500"
                          >
                            {i.key_number.text}
                          </p>
                          <p
                            className="mt-2 text-lg leading-6 font-medium text-gray-500"
                            data-sal="slide-up"
                            data-sal-delay={300 + i * 100}
                            data-sal-easing="ease-in-out"
                            data-sal-duration="500"
                          >
                            {i.key_number_details.text}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
