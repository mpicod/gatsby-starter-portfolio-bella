import React, { Component } from "react";
import Arrow from "../images/arrows.svg";

export default class Pillars extends Component {
  render() {
    return (
      <div class="py-12">
        <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
          <h2 className="mb-4 font-weight-600">{this.props.title.text}</h2>
          <div class="lg:grid lg:grid-cols-3 lg:gap-8">
            {this.props.pillars.map(p => (
              <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md text-white">
                  <img src={p.pillar_icon.url} alt={p.pillar_icon.alt} />
                </div>
                <div class="mt-5">
                  <h5 class="text-lg leading-6 font-medium text-gray-900">
                    {p.pillar_title1.text}
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    {p.pillar_text.text}
                  </p>
                  <a className="align-self-end text-black-secondary font-weight-600">
                    Voir plus <img src={Arrow} className="btn-arrow" />
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
