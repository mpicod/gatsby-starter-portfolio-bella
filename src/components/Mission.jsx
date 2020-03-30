import React, { Component } from "react";
import Team from "../images/team.jpg";
import Pattern from "../images/pattern.svg";
import La_Defense from "../images/La_Defense.png";
import { Date, Link, RichText } from "prismic-reactjs";

export default class Mission extends Component {
  render() {
    return (
      <>
        <div className="pt-16 bg-gray-50 overflow-hidden lg:pt-24">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <svg
              className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
              <rect
                width="404"
                height="384"
                fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
              />
            </svg>

            <div className="relative">
              <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                {this.props.story.text}
              </h3>
              {/* <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus magnam voluptatum cupiditate veritatis in, accusamus
                quisquam.
              </p> */}
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h4
                  className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out"
                  data-sal-duration="500"
                >
                  {this.props.know_how_title.text}
                </h4>
                <div
                  className="mt-3 text-lg leading-7 text-gray-500 richtext"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out"
                  data-sal-duration="500"
                >
                  <RichText render={this.props.description_know_how.raw} />
                </div>

                <h4
                  className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9 mt-10"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out"
                  data-sal-duration="500"
                >
                  {this.props.philosophy_title.text}
                </h4>
                <div
                  className="mt-3 text-lg leading-7 text-gray-500 richtext"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out"
                  data-sal-duration="500"
                >
                  <RichText render={this.props.philosophy_description.raw} />
                </div>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0">
                <svg
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width="784"
                  height="404"
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                  <rect
                    width="784"
                    height="404"
                    fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                  />
                </svg>
                <img
                  className="relative mx-auto"
                  width="490"
                  src={La_Defense}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="py-12 bg-gray-100 mt-10">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
              <div className="relative">
                <h3
                  className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 pb-12 mt-10"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out"
                  data-sal-duration="500"
                >
                  {this.props.title.text}
                </h3>
              </div>
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                {this.props.data.map(m => (
                  <div>
                    <div className="flex items-center justify-center w-16 bg-gray-900 rounded-md text-white p-2 mt-10">
                      {/* <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg> */}
                      <img src={m.mission_icon.url} />
                    </div>
                    <div className="mt-5">
                      <h5
                        className="text-lg leading-6 font-medium text-gray-900"
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-easing="ease-in-out"
                        data-sal-duration="500"
                      >
                        {m.mission_title1.text}
                      </h5>
                      <div
                        className="mt-2 text-base leading-6 text-gray-500 richtext"
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-easing="ease-in-out"
                        data-sal-duration="500"
                      >
                        <RichText render={m.mission_text.raw} />
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  No hidden fees
                </h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Transfers are instant
                </h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
//   <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
//     <div className="absolute absolute-pattern">
//       <img src={Pattern} />
//     </div>
//     <div className="relative">
//       <h3
//         className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
//         data-sal="slide-up"
//         data-sal-delay="300"
//         data-sal-easing="ease-in-out"
//         data-sal-duration="500"
//       >
//         {this.props.title.text}
//       </h3>
//     </div>

//     <div className="relative mt-12 sm:mt-16 lg:mt-24">
//       <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
//         <div className="lg:col-start-2">
//           <ul className="mt-10">
//             {this.props.data.map(m => (
//               <li className="my-10" data-sal="slide-up">
//                 <div className="flex">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
//                       <svg
//                         className="h-6 w-6"
//                         stroke="currentColor"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="ml-4">
//                     <h5 className="text-lg leading-6 font-medium text-gray-900">
//                       {m.mission_title1.text}
//                     </h5>
//                     <p className="mt-2 text-base leading-6 text-gray-500 richtext">
//                       <RichText render={m.mission_text.raw} />
//                       {/* {console.log("missions", m.mission_text)} */}
//                     </p>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
//           <svg
//             className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
//             width="784"
//             height="404"
//             fill="none"
//             viewBox="0 0 784 404"
//           >
//             <defs>
//               <pattern
//                 id="svg-pattern-squares-4"
//                 x="0"
//                 y="0"
//                 width="20"
//                 height="20"
//                 patternUnits="userSpaceOnUse"
//               >
//                 <rect
//                   x="0"
//                   y="0"
//                   width="4"
//                   height="4"
//                   className="text-gray-200"
//                   fill="currentColor"
//                 />
//               </pattern>
//             </defs>
//             <rect width="784" height="404" fill="url(#svg-pattern-squares-4)" />
//           </svg>
//           <img className="relative mx-auto" width="490" src={Team} alt="" />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;

// <svg
//               className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
//               width="404"
//               height="784"
//               fill="none"
//               viewBox="0 0 404 784"
//             >
//               <defs>
//                 <pattern
//                   id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
//                   x="0"
//                   y="0"
//                   width="20"
//                   height="20"
//                   patternUnits="userSpaceOnUse"
//                 >
//                   <rect
//                     x="0"
//                     y="0"
//                     width="4"
//                     height="4"
//                     className="text-gray-200"
//                     fill="currentColor"
//                   />
//                 </pattern>
//               </defs>
//               <rect
//                 width="404"
//                 height="784"
//                 fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
//               />
//             </svg>

//             <div className="relative mt-12 sm:mt-16 lg:mt-24">
//               <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
//                 <div className="lg:col-start-2">
//                   <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
//                     Notre Philosophie
//                   </h4>
//                   <p className="mt-3 text-lg leading-7 text-gray-500">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Impedit ex obcaecati natus eligendi delectus, cum deleniti
//                     sunt in labore nihil quod quibusdam expedita nemo.
//                   </p>

//                   <ul className="mt-10">
//                     <li>
//                       <div className="flex">
//                         {/* <div className="flex-shrink-0">
//                           <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
//                             <svg
//                               className="h-6 w-6"
//                               stroke="currentColor"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                                 stroke-width="2"
//                                 d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
//                               />
//                             </svg>
//                           </div>
//                         </div> */}
//                         <div className="ml-4">
//                           <h5 className="text-lg leading-6 font-medium text-gray-900">
//                             Mobile notifications
//                           </h5>
//                           <p className="mt-2 text-base leading-6 text-gray-500">
//                             Lorem ipsum, dolor sit amet consectetur adipisicing
//                             elit. Maiores impedit perferendis suscipit eaque,
//                             iste dolor cupiditate blanditiis ratione.
//                           </p>
//                         </div>
//                       </div>
//                     </li>
//                     <li className="mt-10">
//                       <div className="flex">
//                         {/* <div className="flex-shrink-0">
//                           <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
//                             <svg
//                               className="h-6 w-6"
//                               stroke="currentColor"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                               />
//                             </svg>
//                           </div>
//                         </div> */}
//                         <div className="ml-4">
//                           <h5 className="text-lg leading-6 font-medium text-gray-900">
//                             Reminder emails
//                           </h5>
//                           <p className="mt-2 text-base leading-6 text-gray-500">
//                             Lorem ipsum, dolor sit amet consectetur adipisicing
//                             elit. Maiores impedit perferendis suscipit eaque,
//                             iste dolor cupiditate blanditiis ratione.
//                           </p>
//                         </div>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
//                   {/* <svg
//                     className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
//                     width="784"
//                     height="404"
//                     fill="none"
//                     viewBox="0 0 784 404"
//                   >
//                     <defs>
//                       <pattern
//                         id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
//                         x="0"
//                         y="0"
//                         width="20"
//                         height="20"
//                         patternUnits="userSpaceOnUse"
//                       >
//                         <rect
//                           x="0"
//                           y="0"
//                           width="4"
//                           height="4"
//                           className="text-gray-200"
//                           fill="currentColor"
//                         />
//                       </pattern>
//                     </defs>
//                     <rect
//                       width="784"
//                       height="404"
//                       fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
//                     />
//                   </svg> */}
//                   <img
//                     className="relative mx-auto"
//                     width="490"
//                     src="/img/features/feature-example-2.png"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
