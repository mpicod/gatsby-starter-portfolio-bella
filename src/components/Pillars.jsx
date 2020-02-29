import React, { Component } from "react";
import Arrow from "../images/arrows.svg";
import Moderniser from "../images/moderniser_white.svg";

export default class Pillars extends Component {
  render() {
    return (
      <div className="py-12">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-16">
            {this.props.title.text}Nos pilliers
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
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 text-white p-8 mt-5 m-auto">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white mx-6 my-4 ">
                  <img src={p.pillar_icon.url} alt={p.pillar_icon.alt} />
                  {/* <img src={Moderniser} alt={p.pillar_icon.alt} /> */}
                </div>
                <div className="px-6 py-4 flex flex-col">
                  <h5 className="text-xl leading-6 font-bold font-medium text-white">
                    {p.pillar_title1.text}
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    {p.pillar_text.text}
                  </p>
                  <a
                    className="self-end text-sm text-primary-900 flex text-bold mt-3"
                    href={p.pillar_cta.url}
                  >
                    Voir plus <img src={Arrow} className="btn-arrow ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
