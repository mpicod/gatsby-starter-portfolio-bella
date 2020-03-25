import React, { Component } from "react";
import { Date, Link, RichText } from "prismic-reactjs";

export default class RichTextColumn extends Component {
  render() {
    return (
      <div className="py-12 bg-gray-50 bg-white overflow-hidden md:py-20 lg:py-20">
        <div className="relative max-w-screen-sm mx-auto px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
          >
            <defs>
              <pattern
                id="svg-pattern-squares-1"
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
            <rect width="404" height="404" fill="url(#svg-pattern-squares-1)" />
          </svg>
          <div className="richtext relative">
            {this.props.content.raw ? (
              <RichText render={this.props.content.raw} />
            ) : (
              this.props.content
            )}
          </div>
        </div>
      </div>
    );
  }
}
