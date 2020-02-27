import React, { Component } from "react";
import Img from "gatsby-image";

export default class Feature extends Component {
  render() {
    return (
      <div class="columns flex flex-wrap items-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 features">
        <div class="w-full md:hidden md:px-0 text-center mb-16">
          {this.props.img.localFile && (
            <Img fluid={this.props.img.localFile.childImageSharp.fluid} />
          )}
        </div>

        <div class="w-full md:w-1/2 pb-8 px-6">
          <div className="flex items-center font-bold rounded-md text-primary-900">
            {this.props.label}
          </div>
          <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            {this.props.title}
          </h2>
          <p className="mt-6 text-lg leading-7 text-gray-500">
            {this.props.desc}
          </p>
        </div>

        <div class="w-full md:w-1/2 md:px-0 hidden md:block text-center">
          {this.props.img.localFile && (
            <Img fluid={this.props.img.localFile.childImageSharp.fluid} />
          )}
        </div>
      </div>
    );
  }
}

// <div className="relative bg-white">
//   <div className="h-56 bg-primary-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2 overflow-hidden">
//     {/* <img
//             className="w-full h-full object-cover"
//             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
//             alt="Support team"
//           /> */}
//     {this.props.img.localFile && (
//       <Img fluid={this.props.img.localFile.childImageSharp.fluid} />
//     )}
//   </div>
//   <div className="relative max-w-screen-xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
//     <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
//       <div>
//         <div className="flex items-center font-bold rounded-md text-primary-900">
//           {/* <svg
//                   className="h-6 w-6"
//                   stroke="currentColor"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg> */}
//           {this.props.label}
//         </div>
//       </div>
//       <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
//         {this.props.title}
//       </h2>
//       <p className="mt-6 text-lg leading-7 text-gray-500">{this.props.desc}</p>
//       {/* <div className="mt-8 overflow-hidden">
//               <div className="-mx-8 -mt-8 flex flex-wrap">
//                 <div className="px-8 pt-8">
//                   <p className="text-2xl leading-8 font-extrabold text-primary-600 sm:text-3xl sm:leading-9">
//                     24/7
//                   </p>
//                   <p className="text-base leading-6 font-medium text-gray-500">
//                     Delivery
//                   </p>
//                 </div>
//                 <div className="px-8 pt-8">
//                   <p className="text-2xl leading-8 font-extrabold text-primary-600 sm:text-3xl sm:leading-9">
//                     99.9%
//                   </p>
//                   <p className="text-base leading-6 font-medium text-gray-500">
//                     Pepperoni
//                   </p>
//                 </div>
//                 <div className="px-8 pt-8">
//                   <p className="text-2xl leading-8 font-extrabold text-primary-600 sm:text-3xl sm:leading-9">
//                     100k+
//                   </p>
//                   <p className="text-base leading-6 font-medium text-gray-500">
//                     Calories
//                   </p>
//                 </div>
//               </div>
//             </div> */}
//     </div>
//   </div>
// </div>;
