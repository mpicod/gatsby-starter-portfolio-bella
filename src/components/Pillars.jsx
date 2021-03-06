import React, { Component } from "react";
import Arrow from "../images/arrows.svg";
import Moderniser from "../images/moderniser_white.svg";

export default class Pillars extends Component {
  render() {
    return (
      <div className="py-12">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-16">
            {this.props.title}
          </h2>

          {/* <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
</div> */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {this.props.pillars.map(p => (
              <a
                href={p.pillar_cta.url}
                className="rounded bg-gray-900 shadow-lg transform hover:-translate-y-1 transition duration-300 "
              >
                <div className="max-w-sm overflow-hidden sm:mt-5 text-white p-8 m-auto bg-gray-900 mt-10">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white mx-6 my-4 ">
                    <img
                      src={p.pillar_icon.url}
                      alt={p.pillar_icon.alt}
                      data-sal="Fade"
                    />
                    {/* <img src={Moderniser} alt={p.pillar_icon.alt} /> */}
                  </div>
                  <div className="px-6 py-4 flex flex-col">
                    <h5
                      className="text-xl leading-6 font-bold font-medium text-white"
                      data-sal="slide-up"
                      data-sal-delay="300"
                      data-sal-easing="ease-in-out"
                      data-sal-duration="500"
                    >
                      {p.pillar_title1.text}
                    </h5>
                    <p
                      className="mt-2 text-base leading-6 text-gray-500"
                      data-sal="slide-up"
                      data-sal-delay="300"
                      data-sal-easing="ease-in-out"
                      data-sal-duration="500"
                    >
                      {p.pillar_text.text}
                    </p>
                    <div
                      className="self-end text-sm text-primary-900 flex text-bold mt-3 "
                      data-sal="slide-up"
                      data-sal-delay="300"
                      data-sal-easing="ease-in-out"
                      data-sal-duration="500"
                    >
                      <span className="transform hover:translate-x-1 transition duration-300 inline-flex ">
                        Voir plus <img src={Arrow} className="btn-arrow ml-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
