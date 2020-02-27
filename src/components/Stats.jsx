import React, { Component } from "react";

export default class Stats extends Component {
  render() {
    return (
      <div class="bg-gray-900 pt-12 mt-12 mb-12 sm:pt-16">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl leading-9 font-bold text-primary-900 sm:text-4xl sm:leading-10">
              {this.props.title}
            </h2>
            <p class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
              {this.props.description}
            </p>
          </div>
        </div>
        <div class="mt-10 pb-12 bg-gray-900 sm:pb-16">
          <div class="relative">
            <div class="absolute inset-0 h-1/2 bg-gray-50"></div>
            <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="max-w-4xl mx-auto">
                <div class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  {this.props.items.map(i => (
                    <div class="border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                      <p class="text-5xl leading-none font-extrabold text-primary-600">
                        {i.stat_number}
                      </p>
                      <p class="mt-2 text-lg leading-6 font-medium text-gray-500">
                        {i.stat_desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
