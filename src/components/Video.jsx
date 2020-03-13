import React, { Component } from "react";

export default class Video extends Component {
  render() {
    return (
      <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="text-center text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Le mot de l'expert
          </h2>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CyZ-V7y6_AM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className=" mx-auto sm:flex sm:justify-center my-6"
          ></iframe>
        </div>
      </div>
    );
  }
}
