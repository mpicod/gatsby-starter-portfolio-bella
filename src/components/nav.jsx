import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Logo from "../images/zenops_mono.svg";
import Moderniser from "../images/moderniser_white.svg";

const SimpleLink = props => (
  <li className="nav-item active">
    <a
      className="nav-link"
      // {...(l.primary.link ? { href: l.primary.link.url } : {})}
      {...(props.link.primary.link && { href: props.link.primary.link.url })}
    >
      {/* {console.log(props, "link")} */}
      {props.link.primary.label.text}A
    </a>
  </li>
);

const Nav = () => {
  return (
    <StaticQuery
      query={graphql`
        query navQuery {
          prismicLayout {
            data {
              nav {
                primary {
                  label {
                    text
                  }
                  link {
                    url
                  }
                }
                items {
                  sub_nav_link_label {
                    text
                  }
                  sub_nav_link {
                    uid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        // <div className="container">
        //   <nav className="navbar navbar-expand-lg">
        //     {console.log(data)}
        //     <a className="navbar-brand" href="/">
        //       <img src={Logo} />
        //     </a>
        //     <button
        //       className="navbar-toggler"
        //       type="button"
        //       data-toggle="collapse"
        //       data-target="#navbarNavDropdown"
        //       aria-controls="navbarNavDropdown"
        //       aria-expanded="false"
        //       aria-label="Toggle navigation"
        //     >
        //       <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
        //       <ul className="navbar-nav">
        // {data.prismicLayout.data.nav.map(l => {
        //   return l.primary.link ? (
        //     <li className="nav-item active">
        //       <a
        //         className="nav-link"
        //         // {...(l.primary.link ? { href: l.primary.link.url } : {})}
        //         href={l.primary.link.url}
        //         // {...(l.primary.link && { href: l.primary.link.url })}
        //       >
        //         {l.primary.label.text}
        //       </a>
        //     </li>
        //   ) : (
        //     <li className="nav-item dropdown text-white">
        //       <a
        //         className="nav-link dropdown-toggle"
        //         id="navbarDropdownMenuLink"
        //         role="button"
        //         data-toggle="dropdown"
        //         aria-haspopup="true"
        //         aria-expanded="false"
        //       >
        //         {l.primary.label.text}
        //       </a>
        //       <div
        //         className="dropdown-menu"
        //         aria-labelledby="navbarDropdownMenuLink"
        //       >
        //         {l.items.map(i => (
        //           <a
        //             className="dropdown-item"
        //             href={i.sub_nav_link.url}
        //           >
        //             {i.sub_nav_link_label.text}
        //           </a>
        //         ))}
        //       </div>
        //     </li>
        //   );
        // })}

        //         <li className="nav-item">
        //           <a className="nav-link" href="#">
        //             <button
        //               className="btn btn-primary"
        //               type="button"
        //               value="Input"
        //             >
        //               Contactez-nous !
        //             </button>
        //           </a>
        //         </li>
        //       </ul>
        //     </div>
        //   </nav>
        // </div>
        <div>
          {console.log("navData", data)}
          <div className="relative bg-white overflow-hidden">
            <div className="hidden lg:block lg:absolute lg:inset-0">
              <img src={Logo} />
            </div>
          </div>
          <div className="relative pt-6 pb-16 md:pb-16 lg:pb-20 xl:pb-24">
            <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10">
                  {data.prismicLayout.data.nav.map(l => {
                    return l.primary.link.url ? (
                      <a
                        href={l.primary.link.url}
                        className="p-4 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                      >
                        {l.primary.label[0].text}
                      </a>
                    ) : (
                      <>
                        <a
                          className="relative p-3 rounded-t font-medium text-gray-500 hover:text-gray-100 hover:bg-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out dropdown"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {l.primary.label[0].text}
                          <ul className="dropdown-menu absolute hidden text-gray-100 left-0 flex rounded-b">
                            {l.items.map(i => (
                              <li className="mb-0">
                                <a
                                  className=" bg-gray-900 hover:bg-gray-400 py-2 px-4 whitespace-no-wrap flex justify-center align-center"
                                  href={i.sub_nav_link.uid}
                                >
                                  {/* <img
                                    className="mx-2 nav-icon"
                                    src={Moderniser}
                                  /> */}
                                  <p>{i.sub_nav_link_label[0].text}</p>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </a>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="hidden md:block text-right">
                <span className="inline-flex rounded-md shadow-md transform hover:-translate-y-1 transition duration-300">
                  <span className="inline-flex ">
                    <a
                      href="#contactSection"
                      className=" inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-100 hover:bg-gray-50 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    >
                      Contactez-nous !
                    </a>
                  </span>
                </span>
              </div>
            </nav>
          </div>
          <div className="absolute top-0 inset-x-0 p-2 hidden md:hidden">
            <div className="rounded-lg shadow-md transition transform origin-top-right">
              <div className="rounded-lg bg-white shadow-xs overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src="" alt="" />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Company
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-primary-600 bg-gray-50 hover:bg-gray-100 hover:text-primary-700 focus:outline-none focus:bg-gray-100 focus:text-primary-700 transition duration-150 ease-in-out"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Nav;
