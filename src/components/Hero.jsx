import React, { Component } from "react";
import Pattern from "../images/pattern.svg";
import Img from "gatsby-image";
import { Date, Link, RichText } from "prismic-reactjs";

export default class Hero extends Component {
  render() {
    return (
      <header className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="text-center">
          <h1
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease-in-out"
            data-sal-duration="500"
            className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
          >
            {this.props.title}
          </h1>
          {/* <RichText render="<p> Coucou RICH TEXT </p>" /> */}

          <p
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease-in-out"
            data-sal-duration="500"
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            {this.props.description}
            {/* <RichText render="<p> Coucou RICH TEXT </p>" />
            {RichText.asText(this.props.description)} */}
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow transform hover:-translate-y-1 transition duration-300">
              <a
                href={this.props.isHome ? "#contact" : "/#contact"}
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease-in-out"
                data-sal-duration="500"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline-primary transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Contactez-nous !
              </a>
            </div>
            {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-primary-600 bg-white hover:text-primary-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </a>
            </div> */}
            <div className="absolute absolute-pattern">
              <img src={Pattern} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
