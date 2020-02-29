import React, { Component } from "react";
import Suse from "../images/suse.png";
import SS from "../images/ss.svg";
import Sophos from "../images/sophos.svg";
import Micro from "../images/micro.svg";

export default class Logos extends Component {
  render() {
    return (
      <div className="bg-gray-900">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={Suse} alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={SS} alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img className="h-12" src={Sophos} alt="Transistor" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img className="h-12" src={Sophos} alt="Transistor" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img className="h-12" src={Micro} alt="Workcation" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
